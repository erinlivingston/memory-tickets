//dotqr-code.js

let cellSize = 9;
let columnCount;
let rowCount;
let currentCells = [];
let nextCells = [];

function setup() {
  let canvas = createCanvas(200, 200);
  canvas.parent('qr-code-container'); 
  frameRate(3); 
  noStroke();

  columnCount = floor(width / cellSize);
  rowCount = floor(height / cellSize);

  for (let col = 0; col < columnCount; col++) {
    currentCells[col] = [];
    nextCells[col] = [];
  }

  randomizeBoard(); // initial random state of circles 
  setInterval(() => {
    randomizeBoard();
  }, 10);

}

function draw() {
  clear(); // keeps canvas transparent  
  background(255,255,255,25); //alpha value, lower = slower fade, higher = faster fade
  generate();


  for (let col = 0; col < columnCount; col++) {
    for (let row = 0; row < rowCount; row++) {
      let cell = currentCells[col][row];
      if (cell === 1) {
        fill(200 + random(-20, 20), 100 + random(-30, 30), 255); // Variants of purple
        
        
        ellipse(
            col * cellSize + cellSize / 2,
            row * cellSize + cellSize / 2,
            cellSize * 0.8,
            cellSize * 0.8,
          );
      }
    }
  }
}


// Randomize grid to begin
function randomizeBoard() {
  for (let col = 0; col < columnCount; col++) {
    for (let row = 0; row < rowCount; row++) {
      currentCells[col][row] = random([0, 1]);
    }
  }
}

function generate() {
  for (let col = 0; col < columnCount; col++) {
    for (let row = 0; row < rowCount; row++) {
      let left = (col - 1 + columnCount) % columnCount;
      let right = (col + 1) % columnCount;
      let above = (row - 1 + rowCount) % rowCount;
      let below = (row + 1) % rowCount;

      let neighbours =
        currentCells[left][above] +
        currentCells[col][above] +
        currentCells[right][above] +
        currentCells[left][row] +
        currentCells[right][row] +
        currentCells[left][below] +
        currentCells[col][below] +
        currentCells[right][below];

    }
  }

  // Swap boards
  let temp = currentCells;
  currentCells = nextCells;
  nextCells = temp;
}