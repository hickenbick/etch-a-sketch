const alertMessage = document.querySelector(".alert-message");
const updateButton = document.querySelector(".input button")
const container = document.querySelector(".container");
const input = document.querySelector(".input input");
const body = document.querySelector("body");
let squaresToRemove = 0;


updateButton.addEventListener("click", () => {
  let squareNumber = input.value;
  updateSquares(squareNumber);
})

function updateSquares(squareNumber) {
  if (squareNumber < 101 && squareNumber > 0) {
    removeSquares(squaresToRemove);
    for (let i = 0; i < squareNumber * squareNumber; i++) {
     const square = document.createElement("div");
      square.classList.add("square");
      container.appendChild(square);
      container.style.gridTemplateColumns = `repeat(${squareNumber}, 1fr)`
      alertMessage.textContent = "";
      square.addEventListener("mouseover", () => {
        changeSquareColor(square)
       })
    }
    squaresToRemove = squareNumber
  } else {
    alertMessage.textContent = "Type a number between 1 and 100!";
  }
}

function removeSquares(n) {
  for (let i = 0; i < n * n; i++) {
    const square = document.querySelector(".container div")
    container.removeChild(square)
  }
}

function changeSquareColor(square) {
  square.style.backgroundColor = "#000"
}






