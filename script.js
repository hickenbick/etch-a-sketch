let container = document.createElement("div");
container.classList.add("container")
document.body.appendChild(container)

for (i = 0; i < 16; i++) {
  let square = document.createElement("div");
  square.classList.add("square")
  container.appendChild(square);
}


