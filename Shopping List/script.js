var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress() {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

// denial repeat yourself
button.addEventListener("click", addListAfterClick, false);
input.addEventListener("keypress", addListAfterKeypress);