const GRID_SIZE = 16 * 16;

function createGrid() {

    const gridContainer = document.getElementById("grid");
    
    for (let i = 0; i < GRID_SIZE; i++) {
        const block = document.createElement("div");
        block.className = "gridBlock";

        gridContainer.appendChild(block);
    };
};

createGrid();

function generateRandomColor() {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
};

function colorChange() {
    this.style.backgroundColor = generateRandomColor();
};

const gridBlock = document.querySelectorAll(".gridBlock");
gridBlock.forEach(div => {
    div.addEventListener('mouseover', colorChange);
});

function clearGrid() {
    gridBlock.forEach(div => {
        div.style.backgroundColor = '#FFFFFF';
    });
};

const clear = document.querySelector("#clear");
clear.addEventListener("click", clearGrid);