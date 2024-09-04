createGrid(16);

function createGrid(gridSize){
    const container = document.querySelector(".container");
    for(let i=0; i<gridSize; i++){
        let row = document.createElement("div");
        row.classList.add("row");
        for(let j=0; j<gridSize; j++){
            let cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}