
console.log('Color Extraction script loaded.');
const canvas = document.getElementById('canvas');
canvas.style.display = 'none'; // hide canvas used for the pixel color extraction


//Direct List of 2019 image file paths 
const imagePathsByYear = { 
    "2019": [ 
    "/assets/2019-Tickets/10.23.19.am7.PNG", "/assets/2019-Tickets/10.23.19.pm5.PNG","/assets/2019-Tickets/11.21.19.am7.PNG","/assets/2019-Tickets/11.26.19.am7.PNG",
        "/assets/2019-Tickets/11.26.19.pm2.PNG","/assets/2019-Tickets/12.03.19.am7.PNG","/assets/2019-Tickets/12.03.19.pm4.PNG","/assets/2019-Tickets/12.04.19.am7.PNG",
        "/assets/2019-Tickets/12.04.19.pm5.PNG","/assets/2019-Tickets/12.05.19.am7.PNG","/assets/2019-Tickets/12.05.19.pm4.PNG","/assets/2019-Tickets/12.09.19.am7.PNG",
        "/assets/2019-Tickets/12.09.19.pm5.PNG","/assets/2019-Tickets/12.10.19.am7.PNG","/assets/2019-Tickets/12.10.19.pm5.PNG","/assets/2019-Tickets/12.12.19.am7.PNG",
        "/assets/2019-Tickets/12.14.19.pm1.PNG","/assets/2019-Tickets/12.14.19.pm5.PNG","/assets/2019-Tickets/12.16.19.am7.PNG","/assets/2019-Tickets/12.16.19.pm5.PNG",
        "/assets/2019-Tickets/12.19.19.am7.PNG","/assets/2019-Tickets/12.19.19.pm5.PNG","/assets/2019-Tickets/12.20.19.am7.PNG","/assets/2019-Tickets/12.20.19.am11.PNG",
        "/assets/2019-Tickets/12.30.19.pm1.PNG"],
//2020 image file paths
    "2020": [
        "/assets/2020-Tickets/01.02.20.am7.PNG","/assets/2020-Tickets/01.02.20.pm5.PNG","/assets/2020-Tickets/01.03.20.am7.PNG","/assets/2020-Tickets/01.03.20.pm4.PNG","/assets/2020-Tickets/01.06.20.am7.PNG",
            "/assets/2020-Tickets/01.06.20.pm5.PNG","/assets/2020-Tickets/01.08.20.am7.PNG","/assets/2020-Tickets/01.08.20.pm5.PNG","/assets/2020-Tickets/01.10.20.am7.PNG","/assets/2020-Tickets/01.10.20.pm5.PNG","/assets/2020-Tickets/01.13.20.am7.PNG",
            "/assets/2020-Tickets/01.13.20.pm5.PNG","/assets/2020-Tickets/01.15.20.am7.PNG","/assets/2020-Tickets/01.15.20.pm5.PNG","/assets/2020-Tickets/01.16.20.am8.PNG","/assets/2020-Tickets/01.16.20.pm4.PNG","/assets/2020-Tickets/01.21.20.am7.PNG",
            "/assets/2020-Tickets/01.21.20.pm5.PNG","/assets/2020-Tickets/01.22.20.am7.PNG","/assets/2020-Tickets/01.22.20.pm5.PNG","/assets/2020-Tickets/01.28.20.am7.PNG","/assets/2020-Tickets/01.28.20.pm5.PNG","/assets/2020-Tickets/01.29.20.am7.PNG",
            "/assets/2020-Tickets/01.29.20.pm5.PNG","/assets/2020-Tickets/01.30.20.am7.PNG","/assets/2020-Tickets/01.30.20.pm5.PNG","/assets/2020-Tickets/02.01.20.am7.PNG","/assets/2020-Tickets/02.03.20.pm5.PNG","/assets/2020-Tickets/02.04.20.am7.PNG",
            "/assets/2020-Tickets/02.05.20.am7.PNG","/assets/2020-Tickets/02.05.20.pm8.PNG","/assets/2020-Tickets/02.06.20.am7.PNG","/assets/2020-Tickets/02.06.20.pm5.PNG","/assets/2020-Tickets/02.10.20.am7.PNG","/assets/2020-Tickets/02.10.20.pm5.PNG",
            "/assets/2020-Tickets/02.11.20.am7.PNG","/assets/2020-Tickets/02.11.20.pm5.PNG","/assets/2020-Tickets/02.13.20.am7.PNG","/assets/2020-Tickets/02.13.20.pm4.PNG","/assets/2020-Tickets/02.18.20.am7.PNG","/assets/2020-Tickets/02.18.20.pm5.PNG",
            "/assets/2020-Tickets/02.19.20.am8.PNG","/assets/2020-Tickets/02.19.20.pm5.PNG","/assets/2020-Tickets/02.20.20.am7.PNG","/assets/2020-Tickets/02.20.20.pm5.PNG","/assets/2020-Tickets/02.21.20.am10.PNG","/assets/2020-Tickets/02.21.20.pm5.PNG",
            "/assets/2020-Tickets/02.23.20.pm5.PNG","/assets/2020-Tickets/02.24.20.am7.PNG","/assets/2020-Tickets/02.24.20.pm5.PNG","/assets/2020-Tickets/02.26.20.pm5.PNG","/assets/2020-Tickets/02.27.20.am7.PNG","/assets/2020-Tickets/02.27.20.pm5.PNG",
            "/assets/2020-Tickets/02.29.20.pm5.PNG","/assets/2020-Tickets/03.01.20.pm12.PNG","/assets/2020-Tickets/03.03.20.am7.PNG","/assets/2020-Tickets/03.03.20.pm5.PNG","/assets/2020-Tickets/03.04.20.am7.PNG","/assets/2020-Tickets/03.04.20.pm5.PNG",
            "/assets/2020-Tickets/03.09.20.am7.PNG","/assets/2020-Tickets/03.10.20.am7.PNG","/assets/2020-Tickets/03.13.20.am9.PNG","/assets/2020-Tickets/03.13.20.pm6.PNG"
        ],
    
    "2021": [ "/assets/2021-Tickets/12.29.21.pm7.PNG"
    ], 
//2022 image file paths
    "2022": [ "/assets/2022-Tickets/02.15.22.pm1.PNG","/assets/2022-Tickets/02.15.22.pm2.PNG","/assets/2022-Tickets/05.09.22.am7.PNG","/assets/2022-Tickets/05.19.22.am7.PNG",
        "/assets/2022-Tickets/06.16.22.pm1.PNG","/assets/2022-Tickets/06.18.22.am9.PNG","/assets/2022-Tickets/06.18.22.pm4.PNG","/assets/2022-Tickets/06.27.22.am9.PNG","/assets/2022-Tickets/06.27.22.pm2.PNG",
        "/assets/2022-Tickets/07.20.22.am7.PNG","/assets/2022-Tickets/07.20.22.pm5.PNG","/assets/2022-Tickets/08.02.22.am6.PNG",
        "/assets/2022-Tickets/09.06.22.am7.PNG","/assets/2022-Tickets/09.07.22.am7.PNG",
        "/assets/2022-Tickets/09.08.22.am7.PNG","/assets/2022-Tickets/09.13.22.am8.PNG","/assets/2022-Tickets/09.13.22.pm5.PNG","/assets/2022-Tickets/09.14.22.pm5.PNG","/assets/2022-Tickets/09.15.22.am6.PNG","/assets/2022-Tickets/09.15.22.pm5.PNG",
        "/assets/2022-Tickets/09.20.22.am7.PNG","/assets/2022-Tickets/09.20.22.pm5.PNG","/assets/2022-Tickets/09.22.22.am6.PNG","/assets/2022-Tickets/09.22.22.pm5.PNG","/assets/2022-Tickets/09.27.22.am8.PNG","/assets/2022-Tickets/09.27.22.pm4.PNG",
        "/assets/2022-Tickets/10.11.22.pm5.PNG","/assets/2022-Tickets/10.13.22.am7.PNG","/assets/2022-Tickets/10.13.22.pm5.PNG","/assets/2022-Tickets/10.18.22.pm4.PNG","/assets/2022-Tickets/10.20.22.am7.PNG","/assets/2022-Tickets/10.20.22.pm4.PNG",
        "/assets/2022-Tickets/11.01.22.pm6.PNG","/assets/2022-Tickets/11.14.22.am7.PNG","/assets/2022-Tickets/11.14.22.pm5.PNG","/assets/2022-Tickets/11.15.22.pm3.PNG","/assets/2022-Tickets/11.15.22.pm4.PNG","/assets/2022-Tickets/11.21.22.am8.PNG",
        "/assets/2022-Tickets/11.26.22.pm10.PNG","/assets/2022-Tickets/11.28.22.am7.PNG","/assets/2022-Tickets/11.28.22.pm5.PNG","/assets/2022-Tickets/11.29.22.am7.PNG","/assets/2022-Tickets/12.20.22.am8.PNG","/assets/2022-Tickets/12.21.22.am7.PNG",

    ],

    "2023": [
        "/assets/2023-Tickets/01.03.23.am11.PNG","/assets/2023-Tickets/01.05.23.am7.PNG","/assets/2023-Tickets/01.05.23.pm5.PNG","/assets/2023-Tickets/01.09.23.am7.PNG",
        "/assets/2023-Tickets/01.09.23.pm5.PNG","/assets/2023-Tickets/01.10.23.am7.PNG","/assets/2023-Tickets/01.10.23.pm5.PNG","/assets/2023-Tickets/01.17.23.pm3.PNG",
        "/assets/2023-Tickets/01.24.23.am8.PNG","/assets/2023-Tickets/01.24.23.pm5.PNG","/assets/2023-Tickets/01.25.23.pm4.PNG","/assets/2023-Tickets/02.01.23.am8.PNG",
        "/assets/2023-Tickets/02.01.23.pm5.PNG","/assets/2023-Tickets/02.03.23.am8.PNG","/assets/2023-Tickets/02.15.23.am7.PNG","/assets/2023-Tickets/06.15.23.pm4.PNG",
        "/assets/2023-Tickets/06.20.23.pm4.PNG","/assets/2023-Tickets/06.21.23.am7.PNG","/assets/2023-Tickets/06.22.23.pm10.PNG","/assets/2023-Tickets/06.25.23.pm5.PNG",
        "/assets/2023-Tickets/07.06.23.pm5.PNG","/assets/2023-Tickets/07.13.23.am8.PNG","/assets/2023-Tickets/07.20.23.am8.PNG","/assets/2023-Tickets/08.31.23.pm5.PNG",
        "/assets/2023-Tickets/09.18.23.am8.PNG","/assets/2023-Tickets/09.22.23.pm5.PNG","/assets/2023-Tickets/09.26.23.pm5.PNG","/assets/2023-Tickets/10.03.23.pm5.PNG",
    ], 

    "2024": [
        "/assets/2024-Tickets/01.08.24.pm5.PNG",
        "/assets/2024-Tickets/05.10.24.pm4.PNG",
        "/assets/2024-Tickets/05.14.24.am8.PNG",
        "/assets/2024-Tickets/05.21.24.pm5.PNG",
        "/assets/2024-Tickets/05.23.24.am8.PNG",
        "/assets/2024-Tickets/05.28.24.am7.PNG",
        "/assets/2024-Tickets/05.23.24.am11.PNG"
    ], 
 };

const swatchArea = document.getElementById('swatchArea'); 

Object.entries(imagePathsByYear).forEach(([year, paths]) => {
// Create container for the entire year section
const yearSection = document.createElement('div');
yearSection.classList.add('year-section'); // for optional CSS styling

const yearHeader = document.createElement('h2');
yearHeader.textContent = year;
yearSection.appendChild(yearHeader);

//Create a swatch container grid for the year 
const swatchContainer = document.createElement('div');
swatchContainer.classList.add('swatch-container');
yearSection.appendChild(swatchContainer);

//add year sections to the main swatch area
swatchArea.appendChild(yearSection);


    //processing each image
    paths.forEach(imageSrc => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = function () {
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            ctx.drawImage(img, 0, 0);
            canvas.style.display = 'none';

            const colorTriplets = extractColors(ctx, year, imageSrc);
            drawColorSwatches(colorTriplets, swatchContainer)
        };
    });
});
// FUNCTION TO EXTRACT COLORS from each ticket's color bar

// Trying dynamic color bar extraction based on year as location on interface changes!
const barStartYOffsetByYear = {
    "2019": -335, 
    "2020": -335, 
    "2021": 5, 
    "2022": -5, 
    "2023": -39, 
    "2024": -39,
}; 

//Defining images in the 2022 set that need a different offset
const barStartYOffsetOverrides = {
        "/assets/2022-Tickets/09.06.22.am7.PNG":-39,
        "/assets/2022-Tickets/09.07.22.am7.PNG":-39,
        "/assets/2022-Tickets/09.08.22.am7.PNG":-39,
        "/assets/2022-Tickets/09.13.22.am8.PNG":-39,
        "/assets/2022-Tickets/09.13.22.pm5.PNG":-39,
        "/assets/2022-Tickets/09.14.22.pm5.PNG":-39,
        "/assets/2022-Tickets/09.15.22.am6.PNG":-39,
        "/assets/2022-Tickets/09.15.22.pm5.PNG":-39,
        "/assets/2022-Tickets/09.20.22.am7.PNG":-39,
        "/assets/2022-Tickets/09.20.22.pm5.PNG":-39,
        "/assets/2022-Tickets/09.22.22.am6.PNG":-39,
        "/assets/2022-Tickets/09.22.22.pm5.PNG":-39,
        "/assets/2022-Tickets/09.27.22.am8.PNG":-39,
        "/assets/2022-Tickets/09.27.22.pm4.PNG":-39,
        "/assets/2022-Tickets/10.11.22.pm5.PNG":-39,
        "/assets/2022-Tickets/10.13.22.am7.PNG":-39,
        "/assets/2022-Tickets/10.13.22.pm5.PNG":-39,
        "/assets/2022-Tickets/10.18.22.pm4.PNG":-39,
        "/assets/2022-Tickets/10.20.22.am7.PNG":-39,
        "/assets/2022-Tickets/10.20.22.pm4.PNG":-39,
        "/assets/2022-Tickets/11.01.22.pm6.PNG":-39,
        "/assets/2022-Tickets/11.14.22.am7.PNG":-39,
        "/assets/2022-Tickets/11.14.22.pm5.PNG":-39,
        "/assets/2022-Tickets/11.15.22.pm3.PNG":-39,
        "/assets/2022-Tickets/11.15.22.pm4.PNG":-39,
        "/assets/2022-Tickets/11.21.22.am8.PNG":-39,
        "/assets/2022-Tickets/11.26.22.pm10.PNG":-39,
        "/assets/2022-Tickets/11.28.22.am7.PNG":-39,
        "/assets/2022-Tickets/11.28.22.pm5.PNG":-39,
        "/assets/2022-Tickets/11.29.22.am7.PNG":-39,
        "/assets/2022-Tickets/12.20.22.am8.PNG":-39,
        "/assets/2022-Tickets/12.21.22.am7.PNG":-39,

};

function extractColors(ctx, year, imageSrc) {

    const yearHeights = {
        "2019": 30, 
        "2020": 30, 
        "2021": 10, 
        "2022": 10, 
        "2023": 10,
        "2024": 10,
    };

    // Define color bar area 
    const colorBarHeight = yearHeights[year] || 20; 
    const colorBarWidth = 650; 
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height; 
    const barStartX = (canvasWidth / 2 ) - (colorBarWidth / 2) ;

    //updating the Ystart extraction to be dynamic based on year
    const offsetY = barStartYOffsetOverrides[imageSrc] ?? barStartYOffsetByYear[year] ?? -355; // default value is the position for 2019/2020
    const barStartY = (canvasHeight / 2 ) + offsetY ; 

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

    console.log(`Extracted colors from ${year} (${imageSrc}):`, colorTriplets);
    return colorTriplets; 

}; 

function drawColorSwatches(colorTriplets, container) {
    const groupContainer = document.createElement('div');
    groupContainer.classList.add('group-container');
    groupContainer.style.gap = '1px';

    colorTriplets.forEach(color => {
        const swatch = document.createElement('div');
        swatch.classList.add('swatch');
        swatch.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        groupContainer.appendChild(swatch);
    });

    container.appendChild(groupContainer);
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



 