const ATLAS_URI =
  "mongodb+srv://tory:DHKLa3Mx4m-e.Qj@cluster0.3b27q1x.mongodb.net/groceryShop?retryWrites=true&w=majority";
const PORT = 3001;
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const ProductModel = require("./models/Product");
const OrderModel = require("./models/Order");

app.use(cors());
app.use(express.json());

mongoose.connect(ATLAS_URI, {
  useNewUrlParser: true,
});

app.get("/products", async (req, res) => {
  const result = await ProductModel.find({});
  try {
    res.status(200).json(result);
  } catch (err) {
    res.send(err);
  }
});

app.get("/orders", async (req, res) => {
  const result = await OrderModel.find({});
  try {
    res.status(200).json(result);
  } catch (err) {
    res.send(err);
  }
});

app.post("/insert", async (req, res) => {
  const formData = new OrderModel(req.body);

  const orderProducts = req.body.orderProducts;

  let updates = orderProducts.map((product) => {
    const quantityInStock = ProductModel.findOne({
      _id: product.productId,
    });
    quantityInStock
      .then((res) => {
        ProductModel.findOneAndUpdate(
          { _id: product.productId },
          { $inc: { quantity: -product.quantity } }
        )
          .then((res) => {
            console.log("Succesfull update quantity");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  Promise.all(updates);

  try {
    await formData.save();
    res.send("Data saved");
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

//Test Order
const testOrder = {
  fname: "Test Name",
  address: "Test Address",
  email: "Test email",
  phone: "Test phone",
  message: "Test message",
  totalCost: 100,
  totalDiscount: 25,
  orderProducts: [
    {
      productId: "test_id",
      productName: "test name",
      price: 50,
      discount: 12,
      quantity: 2,
    },
  ],
};

// Categories

const vegetable = {
  name: "vegetable",
  desc: "Vegetables are parts of plants that are consumed by humans or other animals as food. The original meaning is still commonly used and is applied to plants collectively to refer to all edible plant matter, including the flowers, fruits, stems, leaves, roots, and seeds.",
};
const fruit = {
  name: "fruit",
  desc: "In botany, a fruit is the seed-bearing structure in flowering plants that is formed from the ovary after flowering. Fruits are the means by which flowering plants (also known as angiosperms) disseminate their seeds",
};
const nuts = {
  name: "nuts",
  desc: "A nut is a fruit consisting of a hard or tough nutshell protecting a kernel which is usually edible. In general usage and in a culinary sense, a wide variety of dry seeds are called nuts, but in a botanical context nut implies that the shell does not open to release the seed (indehiscent)",
};
const millets = {
  name: "millets",
  desc: "Millets are a group of cereal grains that belong to the Poaceae family, commonly known as the grass family. It’s widely consumed in developing countries throughout Africa and Asia. While it may look like a seed, millet’s nutritional profile is similar to that of sorghum and other cereal",
};
const grains = {
  name: "grains",
  desc: "A grain is a small, hard, dry fruit (caryopsis) – with or without an attached hull layer – harvested for human or animal consumption.",
};
const poultry = {
  name: "poultry",
  desc: "Poultry (/ˈpoʊltri/) are domesticated birds kept by humans for their eggs, their meat or their feathers.[1] These birds are most typically members of the superorder Galloanserae (fowl), especially the order Galliformes (which includes chickens, quails, and turkeys)",
};

// Discounts

const minimal = {
  name: "minimal",
  percent: 20,
  active: false,
};
const medium = {
  name: "medium",
  percent: 40,
  active: false,
};
const maximal = {
  name: "maximal",
  percent: 70,
  active: false,
};
const noDiscount = {
  name: "zero",
  percent: 0,
  active: false,
};

//Fill in products
const broccoli = new ProductModel({
  name: "Calabrese Broccoli",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis viverra est. Vestibulum feugiat at ligula sit amet bibendum. Fusce consequat magna sit amet tincidunt pellentesque. Praesent finibus rhoncus mauris, ullamcorper gravida libero. Maecenas congue dapibus elementum. Etiam rhoncus urna.",
  quantity: 150,
  price: 20,
  discount: medium,
  category: vegetable,
  imgUrl: "./assets/v-broccoli.png",
});
const banana = new ProductModel({
  name: "Fresh Banana Fruits",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis viverra est. Vestibulum feugiat at ligula sit amet bibendum. Fusce consequat magna sit amet tincidunt pellentesque. Praesent finibus rhoncus mauris, ullamcorper gravida libero. Maecenas congue dapibus elementum. Etiam rhoncus urna.",
  quantity: 500,
  price: 20,
  discount: medium,
  category: fruit,
  imgUrl: "./assets/f-banana.png",
});
const whiteNuts = new ProductModel({
  name: "White Nuts",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis viverra est. Vestibulum feugiat at ligula sit amet bibendum. Fusce consequat magna sit amet tincidunt pellentesque. Praesent finibus rhoncus mauris, ullamcorper gravida libero. Maecenas congue dapibus elementum. Etiam rhoncus urna.",
  quantity: 1000,
  price: 20,
  discount: minimal,
  category: nuts,
  imgUrl: "./assets/n-whitenuts.png",
});
const tomato = new ProductModel({
  name: "Vegan Red Tomato",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis viverra est. Vestibulum feugiat at ligula sit amet bibendum. Fusce consequat magna sit amet tincidunt pellentesque. Praesent finibus rhoncus mauris, ullamcorper gravida libero. Maecenas congue dapibus elementum. Etiam rhoncus urna.",
  quantity: 700,
  price: 20,
  discount: minimal,
  category: vegetable,
  imgUrl: "./assets/v-tomato.png",
});
const beans = new ProductModel({
  name: "Mung Bean",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis viverra est. Vestibulum feugiat at ligula sit amet bibendum. Fusce consequat magna sit amet tincidunt pellentesque. Praesent finibus rhoncus mauris, ullamcorper gravida libero. Maecenas congue dapibus elementum. Etiam rhoncus urna.",
  quantity: 1000,
  price: 20,
  discount: medium,
  category: millets,
  imgUrl: "./assets/m-beans.png",
});
const hazelNuts = new ProductModel({
  name: "Brown Hazelnut",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis viverra est. Vestibulum feugiat at ligula sit amet bibendum. Fusce consequat magna sit amet tincidunt pellentesque. Praesent finibus rhoncus mauris, ullamcorper gravida libero. Maecenas congue dapibus elementum. Etiam rhoncus urna.",
  quantity: 1000,
  price: 20,
  discount: medium,
  category: nuts,
  imgUrl: "./assets/n-brownhazel.png",
});
const egg = new ProductModel({
  name: "Eggs",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis viverra est. Vestibulum feugiat at ligula sit amet bibendum. Fusce consequat magna sit amet tincidunt pellentesque. Praesent finibus rhoncus mauris, ullamcorper gravida libero. Maecenas congue dapibus elementum. Etiam rhoncus urna.",
  quantity: 1000,
  price: 20,
  discount: minimal,
  category: poultry,
  imgUrl: "./assets/p-eggs.png",
});
const bread = new ProductModel({
  name: "Zelco Suji Elaichi Rusk",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis viverra est. Vestibulum feugiat at ligula sit amet bibendum. Fusce consequat magna sit amet tincidunt pellentesque. Praesent finibus rhoncus mauris, ullamcorper gravida libero. Maecenas congue dapibus elementum. Etiam rhoncus urna.",
  quantity: 300,
  price: 20,
  discount: minimal,
  category: grains,
  imgUrl: "./assets/g-bread.png",
});
const linedTsukini = new ProductModel({
  name: "Lined Tsukini",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis viverra est. Vestibulum feugiat at ligula sit amet bibendum. Fusce consequat magna sit amet tincidunt pellentesque. Praesent finibus rhoncus mauris, ullamcorper gravida libero. Maecenas congue dapibus elementum. Etiam rhoncus urna.",
  quantity: 2000,
  price: 20,
  discount: maximal,
  category: vegetable,
  imgUrl: "./assets/v-linedtsukini.png",
});
const whiteHazel = new ProductModel({
  name: "White Hazelnut",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis viverra est. Vestibulum feugiat at ligula sit amet bibendum. Fusce consequat magna sit amet tincidunt pellentesque. Praesent finibus rhoncus mauris, ullamcorper gravida libero. Maecenas congue dapibus elementum. Etiam rhoncus urna.",
  quantity: 3000,
  price: 20,
  discount: maximal,
  category: nuts,
  imgUrl: "./assets/n-whitehazel.png",
});
const corn = new ProductModel({
  name: "Fresh Corn",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis viverra est. Vestibulum feugiat at ligula sit amet bibendum. Fusce consequat magna sit amet tincidunt pellentesque. Praesent finibus rhoncus mauris, ullamcorper gravida libero. Maecenas congue dapibus elementum. Etiam rhoncus urna.",
  quantity: 2500,
  price: 20,
  discount: minimal,
  category: vegetable,
  imgUrl: "./assets/v-corn.png",
});
const almonds = new ProductModel({
  name: "Organic Almonds",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis viverra est. Vestibulum feugiat at ligula sit amet bibendum. Fusce consequat magna sit amet tincidunt pellentesque. Praesent finibus rhoncus mauris, ullamcorper gravida libero. Maecenas congue dapibus elementum. Etiam rhoncus urna.",
  quantity: 2000,
  price: 15,
  discount: noDiscount,
  category: nuts,
  imgUrl: "./assets/n-almonds.png",
});
const ukrBroccoli = new ProductModel({
  name: "Ukrainian Broccoli",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis viverra est. Vestibulum feugiat at ligula sit amet bibendum. Fusce consequat magna sit amet tincidunt pellentesque. Praesent finibus rhoncus mauris, ullamcorper gravida libero. Maecenas congue dapibus elementum. Etiam rhoncus urna.",
  quantity: 3000,
  price: 11,
  discount: noDiscount,
  category: vegetable,
  imgUrl: "./assets/v-ubroccoli.png",
});
const tsukini = new ProductModel({
  name: "Ukrainian Tsukini",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis viverra est. Vestibulum feugiat at ligula sit amet bibendum. Fusce consequat magna sit amet tincidunt pellentesque. Praesent finibus rhoncus mauris, ullamcorper gravida libero. Maecenas congue dapibus elementum. Etiam rhoncus urna.",
  quantity: 1500,
  price: 12,
  discount: noDiscount,
  category: vegetable,
  imgUrl: "./assets/v-tsukini.png",
});
const onion = new ProductModel({
  name: "Oniun",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis viverra est. Vestibulum feugiat at ligula sit amet bibendum. Fusce consequat magna sit amet tincidunt pellentesque. Praesent finibus rhoncus mauris, ullamcorper gravida libero. Maecenas congue dapibus elementum. Etiam rhoncus urna.",
  quantity: 5000,
  price: 17,
  discount: noDiscount,
  category: vegetable,
  imgUrl: "./assets/v-onion.png",
});
const cabbage = new ProductModel({
  name: "Cabbage",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis viverra est. Vestibulum feugiat at ligula sit amet bibendum. Fusce consequat magna sit amet tincidunt pellentesque. Praesent finibus rhoncus mauris, ullamcorper gravida libero. Maecenas congue dapibus elementum. Etiam rhoncus urna.",
  quantity: 5000,
  price: 17,
  discount: noDiscount,
  category: vegetable,
  imgUrl: "./assets/v-cabbage.png",
});
