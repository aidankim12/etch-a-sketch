//makes the change size button functional
const changeSize = document.getElementById("grid-size");
changeSize.addEventListener("click", () => {
    const gridContainer = document.querySelector("#grid-container");
    gridContainer.remove();
    makeGrid(askGridSize());
});

// make the initial grid for the webpage
makeGrid(16);

function askGridSize() {
    //prompts user for an appropriate grid size
    let size = prompt("Enter a number between 1-100: ");
    while (size > 100 || size.trim() === "") {
        size = prompt("Please enter a valid number: ")
    }
    return size;
}

function makeGrid(size) {
    //makes a grid of any size
    const gridContainer = document.createElement("div");
    gridContainer.id = "grid-container";
    document.body.appendChild(gridContainer);

    const length = 960 / size;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const newCell = document.createElement("div");
            newCell.setAttribute("style", `height: ${length}px; width: ${length}px; box-sizing: border-box; opacity: 0;`);
            newCell.addEventListener("mouseover", () => {
                newCell.style.backgroundColor = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
                let newOpacity = Number(window.getComputedStyle(newCell).opacity) + 0.1;
                newCell.style.opacity = `${newOpacity}`;
            });

            gridContainer.appendChild(newCell);
        }
    }
}

function randomNumber(max) {
    // generates a number between 0 and the max value inputted.
    return Math.floor(Math.random() * max);
}