// Task 14

const inputTag = document.getElementsByTagName("input")[0];
const submitButton = document.getElementsByTagName("button")[0];

submitButton.addEventListener("click", () => {
  if (document.body.children.length > 2)
    document.body.lastElementChild.remove();
  checkText(inputTag.value);
});

function checkBrackets(str) {
  if (typeof str === "string") {
    const brackets = ["(", ")"];
    const bracketsStack = [];
    let flag = true;

    [...str].forEach((char) => {
      if (char === brackets[0]) bracketsStack.push(char);
      else if (char === brackets[1] && bracketsStack.length !== 0)
        bracketsStack.pop();
      else if (char === brackets[1] && bracketsStack.length === 0) flag = false;
    });

    return bracketsStack.length === 0 ? flag : false;
  } else return "Wrong data passed";
}

function checkText(str) {
  if (typeof str === "string") {
    if (checkBrackets(str)) {
      const pTag = document.createElement("p");
      pTag.innerHTML = "Баланс дотримано: " + str;
      document.body.append(pTag);

      document.addEventListener("contextmenu", (event) =>
        event.preventDefault()
      );
      document.addEventListener("keydown", (event) => {
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
        }
      });
      document.body.style.userSelect = "none";

      document.addEventListener("keydown", (e) => {
        if (e.ctrlKey || e.code == "F12") {
          e.stopPropagation();
          e.preventDefault();
        }
      });
    }
  } else return "Wrong data passed";
}
