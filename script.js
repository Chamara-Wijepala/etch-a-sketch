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