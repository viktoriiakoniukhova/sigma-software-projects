// Task 15
const inputTag = document.getElementsByTagName("input")[0];
const submitButton = document.getElementsByTagName("button")[0];

submitButton.addEventListener("click", () => {
  if (document.body.children.length > 2)
    document.body.lastElementChild.remove();
  remakeStr(inputTag.value);
});

function remakeStr(str) {
  if (typeof str === "string") {
    const words = str.split(" ");
    const aCounter = [...str.toLowerCase()].filter(
      (char) => char === "a"
    ).length;

    words[0] = words[0].toUpperCase();
    words[words.length - 2] = words[words.length - 2].toLowerCase();
    words[words.length - 1] = words[words.length - 1].toLowerCase();

    makeList(words);

    setTimeout(() => {
      alert(`Літера 'a' повторювалась ${aCounter} разів.`);
      setTimeout(() => {
        const helpMessage = confirm("Ви ще тут?");
        if (!helpMessage) {
          window.close();
        }
      }, 1000 * 60 * 5);
    }, 500);
  } else return "Wrong data passed";
}

function makeList(words) {
  const ulELement = document.createElement("ul");
  document.body.append(ulELement);

  words.forEach((word) => {
    const liElement = document.createElement("li");
    ulELement.append(liElement);
    liElement.innerHTML = word;
  });
}
