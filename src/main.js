// total width/height that the grid will occupy
const totalSpace = 540;

const button = document.querySelector("button");
button.addEventListener("click", makeNewGrid);

createGrid(16);

function createGrid(gridSize){
    const container = document.querySelector(".container");
    const cellSize = Math.floor(totalSpace / gridSize) - 2;
    for(let i=0; i<gridSize; i++){
        let row = document.createElement("div");
        row.classList.add("row");
        for(let j=0; j<gridSize; j++){
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseover", changeColour);
            cell.style.width = cellSize + "px";
            cell.style.height = cellSize + "px";
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

// callback function for mouseover event listener
function changeColour(e){
    e.target.classList.add("hovered");
}

function makeNewGrid(){
    const container = document.querySelector(".container");

    //remove all children from the container
    container.textContent = "";

    let gridSize = Number(prompt("Grid Size"));
    while(isNaN(gridSize) || gridSize < 1 || gridSize > 100){
        gridSize = prompt("Grid Size");
    }
    createGrid(gridSize);
}
