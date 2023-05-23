//Creating grid-container and inserting into body
let tempElement = document.createElement('div');

//Creati
const currentContainer = document.querySelector("#grid-container");
createGrid(16);
const newGridButton = document.querySelector("#new-grid-button");
newGridButton.addEventListener("click", resetGrid);

function createGrid(number){
    for(let i = 0; i < number; i++){

        for(let j = 0; j < number; j++){

            tempElement = document.createElement('div');
            tempElement.classList.add("grid-tile");
            tempElement.setAttribute(`style`, `height: ${100/number}%; flex-basis: ${100/number}%; `)
            currentContainer.appendChild(tempElement);
            tempElement.addEventListener("mousemove", changeColor);
            // tempElement.addEventListener("mouseleave", changeColor);

        }
    }

    document.getElementById("grid-size").innerHTML = `Current grid size: ${number} x ${number}`;
}

function resetGrid(){
    const tiles = document.querySelectorAll(".grid-tile");
    tiles.forEach(tile => tile.remove());
    promptGrid();
}
function promptGrid(){
    let number = prompt("Enter size of grid: (example: 16 for 16x16 grid)");
    createGrid(number);
}

function changeColor(e){
    e.target.classList.add("green");
}

