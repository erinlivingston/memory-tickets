
console.log('Color Extraction script loaded.');

//Direct List of 2019 image file paths 
const imagePaths = [
    "/assets/2019-Tickets/10.23.19.am7.PNG", "/assets/2019-Tickets/10.23.19.pm5.PNG","/assets/2019-Tickets/11.21.19.am7.PNG","/assets/2019-Tickets/11.26.19.am7.PNG",
        "/assets/2019-Tickets/11.26.19.pm2.PNG","/assets/2019-Tickets/12.03.19.am7.PNG","/assets/2019-Tickets/12.03.19.pm4.PNG","/assets/2019-Tickets/12.04.19.am7.PNG",
        "/assets/2019-Tickets/12.04.19.pm5.PNG","/assets/2019-Tickets/12.05.19.am7.PNG","/assets/2019-Tickets/12.05.19.pm4.PNG","/assets/2019-Tickets/12.09.19.am7.PNG",
        "/assets/2019-Tickets/12.09.19.pm5.PNG","/assets/2019-Tickets/12.10.19.am7.PNG","/assets/2019-Tickets/12.10.19.pm5.PNG","/assets/2019-Tickets/12.12.19.am7.PNG",
        "/assets/2019-Tickets/12.14.19.pm1.PNG","/assets/2019-Tickets/12.14.19.pm5.PNG","/assets/2019-Tickets/12.16.19.am7.PNG","/assets/2019-Tickets/12.16.19.pm5.PNG",
        "/assets/2019-Tickets/12.19.19.am7.PNG","/assets/2019-Tickets/12.19.19.pm5.PNG","/assets/2019-Tickets/12.20.19.am7.PNG","/assets/2019-Tickets/12.20.19.am11.PNG",
        "/assets/2019-Tickets/12.30.19.pm1.PNG",
]; 



imagePaths.forEach(imageSrc => { 
    const testImage = new Image(); 
    testImage.src = imageSrc; 


    testImage.onload = function() {
        console.log('image fully loaded:', imageSrc);

        // sizing canvas to match image size
        canvas.width = testImage.naturalWidth;
        canvas.height = testImage.naturalHeight;
        //draw it onto the canvas 
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        // draw the image onto the canvas as point 0,0
        ctx.drawImage(testImage, 0, 0);
        console.log('image drawn on canvas.')
        canvas.style.display = 'none'; //hide canvas element, only see colors

        //visualizeColorBar(ctx); comment out this line 
        const colorTriplets = extractColors(ctx);

    };
}); 
// FUNCTION TO EXTRACT COLORS from each ticket's color bar

function extractColors(ctx) {
    // Define color bar area 
    const colorBarHeight = 30; 
    const colorBarWidth = 650; 
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height; 
    const barStartX = (canvasWidth / 2 ) - (colorBarWidth / 2) ;
    const barStartY = (canvasHeight / 2 ) - 335 ; 

    // array colorTriplets to store color combos
    const colorTriplets = [];

    //Loop over three sections of the color bar
    for (let i = 0; i < 3; i++) {
        const sectionWidth = colorBarWidth / 3;
        // sample roughly at the center of each third of the color bar
        const xSample = barStartX + (i * sectionWidth) + (sectionWidth / 2);
        const ySample = barStartY + (colorBarHeight / 2);

        // Get pixel color data at xSample, ySample
        const pixel = ctx.getImageData(xSample, ySample, 1, 1).data;
        const color = [pixel[0], pixel[1], pixel[2]]; // [r, g, b]

        // add this color combination to the array 
        colorTriplets.push(color)
    }

    console.log('Extracted colors triplet:', colorTriplets);
    // Draw color swatched below the canvas 
    drawColorSwatches(colorTriplets);
    return colorTriplets; 

}; 

function drawColorSwatches(colorTriplets) {
    const swatchContainer = document.createElement('div'); 
    swatchContainer.classList.add('swatch-container'); // adding class for the color grid styling so it's easier to style in css sheet


    // Loop through color triplets, to be groups of three
    for (let i = 0; i < colorTriplets.length; i += 3) {
        const group = colorTriplets.slice(i, i + 3);  // Get the group of 3 colors
        
        const groupContainer = document.createElement('div');
        groupContainer.style.gap = '2px';
    
        //this block controls the triplets of color groups and how they are styled
        group.forEach(color => { 
            const swatch = document.createElement('div');
            swatch.classList.add('swatch');
            swatch.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            groupContainer.appendChild(swatch);  // Append to groupContainer, not swatchContainer
        });

        // Append groupContainer to swatchContainer
        swatchContainer.appendChild(groupContainer);
    }

    const swatchArea = document.getElementById('swatchArea');
    swatchArea.appendChild(swatchContainer);
}






/* FUNCTION TO FIND PICTURE AREA FOR EXTRACTION, archived
function visualizeColorBar(ctx) {
    const colorBarHeight = 30;
    const colorBarWidth = 650;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const barStartX = (canvasWidth) / 2 - 325;
    const barStartY = canvasHeight / 2 - 335 ;

    console.log(`Drawing red rectangle at: x: ${barStartX}, y: ${barStartY}`);
    // Set the color for the outline (for visualization)
    ctx.strokeStyle = 'red'; 
    ctx.lineWidth = 3; // Adjust thickness of the rectangle

    // Draw the rectangle around the color bar
    ctx.strokeRect(barStartX, barStartY, colorBarWidth, colorBarHeight);

} /*

/* CLICK EVENT DEBUGGING FOR FINDING COLOR EXTRACTION LOCATION 

// Listen for mouse clicks to extract pixel color
canvas.addEventListener('click', function(event) {
    const ctx = canvas.getContext('2d');
    const canvasX = event.offsetX;
    const canvasY = event.offsetY;

    // Get pixel data at the clicked location
    const pixel = ctx.getImageData(canvasX, canvasY, 1, 1).data;
    const color = [pixel[0], pixel[1], pixel[2]]; // [r, g, b]

    console.log(`Clicked at (${canvasX}, ${canvasY})`);
    console.log('Color at clicked position:', color);
}); */



 