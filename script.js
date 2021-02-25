let side = 16;
const gridContainer = document.getElementById('grid');

function createGrid() {
    let gridSize = side * side;
    
    for (let i = 0; i < gridSize; i++) {
        const block = document.createElement('div');
        block.className = 'gridBlock';
        gridContainer.appendChild(block);
    };

    blockListeners();
};

function removeGrid() {
    const gridContainerArray = Array.from(gridContainer.childNodes);

    gridContainerArray.forEach((child) => {
        gridContainer.removeChild(child);
    });

    createGrid();
};

function generateRandomColor() {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
};

function colorChange() {
    this.style.backgroundColor = generateRandomColor();
};

function blockListeners() {
    document.querySelectorAll('.gridBlock').forEach(div => {
        div.addEventListener('mouseover', colorChange);
    });
};

function clearGrid() {
    document.querySelectorAll('.gridBlock').forEach(div => {
        div.style.backgroundColor = '#FFFFFF';
    });
};

document.querySelector('#clear').addEventListener('click', clearGrid);

function changeGridSize(blocksPerSide) {
    //let blocksPerSide = parseInt(window.prompt('How many squares on each side?'));
    side = blocksPerSide;
    document.documentElement.style.setProperty('--grid-size', `repeat(${side}, 1fr)`);
    removeGrid();
};

function getGridSize() {
    let blocksPerSide = parseInt(window.prompt('How many squares on each side? Max 100'));
    
    if (blocksPerSide < 0 || blocksPerSide > 100) {
        getGridSize();
    }
    changeGridSize(blocksPerSide);
};

document.getElementById('size').addEventListener('click', getGridSize);

createGrid();