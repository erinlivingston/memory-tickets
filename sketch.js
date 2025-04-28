// code for the p5 element of the 'now ticket'
function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0); //canvas fills the page 
    canvas.style('z-index', '1') //canvas goes over background perler tile image
    canvas.style('pointer-events', 'none'); // mouse clicks
}

function draw() {
    clear(); //keep canvas transparent to see perler image 

    rect(width/2 - 250, height/2 - 90, 130, 48); //adjust numbers for size, 
//Erin add drawing code here 

}
