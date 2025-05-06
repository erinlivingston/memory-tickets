// archive.js file, Create object for arrays of file names by each year

const imageData = {
    "2019": [
        "10.23.19.am7.PNG",
        "10.23.19.pm5.PNG",
        "11.21.19.am7.PNG",
        "11.26.19.am7.PNG",
        "11.26.19.pm2.PNG",
        "12.03.19.am7.PNG",
        "12.03.19.pm4.PNG",
        "12.04.19.am7.PNG",
        "12.04.19.pm5.PNG",
        "12.05.19.am7.PNG",
        "12.05.19.pm4.PNG",
        "12.09.19.am7.PNG",
        "12.09.19.pm5.PNG",
        "12.10.19.am7.PNG",
        "12.10.19.pm5.PNG",
        "12.12.19.am7.PNG",
        "12.14.19.pm1.PNG",
        "12.14.19.pm5.PNG",
        "12.16.19.am7.PNG",
        "12.16.19.pm5.PNG",
        "12.19.19.am7.PNG",
        "12.19.19.pm5.PNG",
        "12.20.19.am7.PNG",
        "12.20.19.am11.PNG",
        "12.30.19.pm1.PNG",
    ],
    "2020": [
        "01.02.20.am7.PNG",
        "01.02.20.pm5.PNG",
        "01.03.20.am7.PNG",
        "01.03.20.pm4.PNG",
        "01.06.20.am7.PNG",
        "01.06.20.pm5.PNG",
        "01.08.20.am7.PNG",
        "01.08.20.pm5.PNG",
        "01.10.20.am7.PNG",
        "01.10.20.pm5.PNG",
        "01.13.20.am7.PNG",
        "01.13.20.pm5.PNG",
        "01.15.20.am7.PNG",
        "01.15.20.pm5.PNG",
        "01.16.20.am8.PNG",
        "01.16.20.pm4.PNG",
        "01.21.20.am7.PNG",
        "01.21.20.pm5.PNG",
        "01.22.20.am7.PNG",
        "01.22.20.pm5.PNG",
        "01.28.20.am7.PNG",
        "01.28.20.pm5.PNG",
        "01.29.20.am7.PNG",
        "01.29.20.pm5.PNG",
        "01.30.20.am7.PNG",
        "01.30.20.pm5.PNG",
        "02.01.20.am7.PNG",
        "02.03.20.pm5.PNG",
        "02.04.20.am7.PNG",
        "02.05.20.am7.PNG",
        "02.05.20.pm8.PNG",
        "02.06.20.am7.PNG",
        "02.06.20.pm5.PNG",
        "02.10.20.am7.PNG",
        "02.10.20.pm5.PNG",
        "02.11.20.am7.PNG",
        "02.11.20.pm5.PNG",
        "02.13.20.am7.PNG",
        "02.13.20.pm4.PNG",
        "02.18.20.am7.PNG",
        "02.18.20.pm5.PNG",
        "02.19.20.am8.PNG",
        "02.19.20.pm5.PNG",
        "02.20.20.am7.PNG",
        "02.20.20.pm5.PNG",
        "02.21.20.am10.PNG",
        "02.21.20.pm5.PNG",
        "02.23.20.pm5.PNG",
        "02.24.20.am7.PNG",
        "02.24.20.pm5.PNG",
        "02.26.20.pm5.PNG",
        "02.27.20.am7.PNG",
        "02.27.20.pm5.PNG",
        "02.29.20.pm5.PNG",
        "03.01.20.pm12.PNG",
        "03.03.20.am7.PNG",
        "03.03.20.pm5.PNG",
        "03.04.20.am7.PNG",
        "03.04.20.pm5.PNG",
        "03.09.20.am7.PNG",
        "03.10.20.am7.PNG",
        "03.13.20.am9.PNG",
        "03.13.20.pm6.PNG",
    ],

    "2021": [
        "12.29.21.pm7.PNG",
    ],

    "2022": [
        "02.15.22.pm1.PNG",
        "02.15.22.pm2.PNG",
        "05.09.22.am7.PNG",
        "05.19.22.am7.PNG",
        "06.16.22.pm1.PNG",
        "06.18.22.am9.PNG",
        "06.18.22.pm4.PNG",
        "06.27.22.am9.PNG",
        "06.27.22.pm2.PNG",
        "07.20.22.am7.PNG",
        "07.20.22.pm5.PNG",
        "08.02.22.am6.PNG",
        "09.06.22.am7.PNG",
        "09.07.22.am7.PNG",
        "09.08.22.am7.PNG",
        "09.13.22.am8.PNG",
        "09.13.22.pm5.PNG",
        "09.14.22.pm5.PNG",
        "09.15.22.am6.PNG",
        "09.15.22.pm5.PNG",
        "09.20.22.am7.PNG",
        "09.20.22.pm5.PNG",
        "09.22.22.am6.PNG",
        "09.22.22.pm5.PNG",
        "09.27.22.am8.PNG",
        "09.27.22.pm4.PNG",
        "10.11.22.pm5.PNG",
        "10.13.22.am7.PNG",
        "10.13.22.pm5.PNG",
        "10.18.22.pm4.PNG",
        "10.20.22.am7.PNG",
        "10.20.22.pm4.PNG",
        "11.01.22.pm6.PNG",
        "11.14.22.am7.PNG",
        "11.14.22.pm5.PNG",
        "11.15.22.pm3.PNG",
        "11.15.22.pm4.PNG",
        "11.21.22.am8.PNG",
        "11.26.22.pm10.PNG",
        "11.28.22.am7.PNG",
        "11.28.22.pm5.PNG",
        "11.29.22.am7.PNG",
        "12.20.22.am8.PNG",
        "12.21.22.am7.PNG",
    ],

    "2023": [
        "01.03.23.am11.PNG",
        "01.05.23.am7.PNG",
        "01.05.23.pm5.PNG",
        "01.09.23.am7.PNG",
        "01.09.23.pm5.PNG",
        "01.10.23.am7.PNG",
        "01.10.23.pm5.PNG",
        "01.17.23.pm3.PNG",
        "01.24.23.am8.PNG",
        "01.24.23.pm5.PNG",
        "01.25.23.pm4.PNG",
        "02.01.23.am8.PNG",
        "02.01.23.pm5.PNG",
        "02.03.23.am8.PNG",
        "02.15.23.am7.PNG",
        "06.15.23.pm4.PNG",
        "06.20.23.pm4.PNG",
        "06.21.23.am7.PNG",
        "06.22.23.pm10.PNG",
        "06.25.23.pm5.PNG",
        "07.06.23.pm5.PNG",
        "07.13.23.am8.PNG",
        "07.20.23.am8.PNG",
        "08.31.23.pm5.PNG",
        "09.18.23.am8.PNG",
        "09.22.23.pm5.PNG",
        "09.26.23.pm5.PNG",
        "10.03.23.pm5.PNG",
    ],

    "2024": [
        "01.08.24.pm5.PNG",
        "05.10.24.pm4.PNG",
        "05.14.24.am8.PNG",
        "05.21.24.pm5.PNG",
        "05.23.24.am8.PNG",
        "05.28.24.am7.PNG",
        "05.23.24.am11.PNG",
    ]

};

// Load colorTriplets first, then render images once
fetch('/ticket-colors.json')
    .then(res => res.json())
    .then(rawTriplets => {
        // Convert array of color triplets to a lookup object
        const colorTriplets = {};
        rawTriplets.forEach(entry => {
            colorTriplets[entry.path] = entry.colors;  // entry.path is the image path, entry.colors is the color data
        });

        // Then proceed with rendering the images as before
        Object.entries(imageData).forEach(([year, files]) => {
            const container = document.getElementById(`grid-${year}`);

            files.forEach(file => {
                const img = document.createElement("img");
                img.src = `../assets/${year}-Tickets/${file}`;
                img.alt = file;

                // Attach color data if available
                const relativePath = `/assets/${year}-Tickets/${file}`;
                if (colorTriplets[relativePath]) {
                    img.dataset.colors = JSON.stringify(colorTriplets[relativePath]);
                }

                container.appendChild(img);
            });
        });
    })
    .catch(err => {
        console.error("Error loading ticket-colors.json:", err);
    });

// Swatch creation function
function createColorSwatches(colorTriplets) {
    const groupContainer = document.createElement('div');
    groupContainer.classList.add('group-container');
    groupContainer.style.display = 'flex';
    groupContainer.style.gap = '2px';

    colorTriplets.forEach(color => {
        const swatch = document.createElement('div');
        swatch.classList.add('swatch');
        swatch.style.width = '50px';
        swatch.style.height = '50px';
        swatch.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        groupContainer.appendChild(swatch);
    });

    return groupContainer;
}

// Toggle view
let showingSwatches = false;

document.getElementById('colortoggleView').addEventListener('click', () => {
    document.querySelectorAll('.image-grid').forEach(grid => {
        Array.from(grid.children).forEach(child => {
            if (child.tagName === 'IMG') {
                const img = child;
                const parent = img.parentElement;

                if (!showingSwatches) {
                    const colors = img.dataset.colors ? JSON.parse(img.dataset.colors) : null;
                    if (colors) {
                        img.style.display = 'none';
                        const swatchDiv = createColorSwatches(colors);
                        parent.appendChild(swatchDiv);
                    }
                } else {
                    img.style.display = 'block';
                    const swatch = parent.querySelector('.group-container');
                    if (swatch) swatch.remove();
                }
            }
        });
    });

    showingSwatches = !showingSwatches;
    document.getElementById('colortoggleView').textContent = showingSwatches
        ? 'Show Ticket Images'
        : 'Show Color Swatches';
});






/* version before
//Open each file for each year, look at the ticket images inside
Object.entries(imageData).forEach(([year, files]) => {

    //Reference html file, look for the id with the grid-YYYY format
    const container = document.getElementById(`grid-${year}`);

    // For every image in that year's file, make a new <img> tag in the HTML
    files.forEach(file => {
        const img = document.createElement("img");

        //set the image's src using the file year and name
        img.src = `../assets/${year}-Tickets/${file}`;

        // check if this is working using console.log 
        console.log("Loading Image:", img.src);

        img.alt = file;
        //add the finished <img> tag for the part of the page for that year
        container.appendChild(img);
    });
});

//Loading the colorTriplet json and trying to edit it into the toggle button 

fetch('/colorTriplets.json')
    .then(res => res.json())
    .then(colorTriplets => {
        Object.entries(imageData).forEach(([year, files]) => {
            const container = document.getElementById(`grid-${year}`);

            files.forEach(file => {
                const img = document.createElement("img");
                img.src = `../assets/${year}-Tickets/${file}`;
                img.alt = file;

                // Attach color data if available
                const relativePath = `/assets/${year}-Tickets/${file}`;
                if (colorTriplets[relativePath]) {
                    img.dataset.colors = JSON.stringify(colorTriplets[relativePath]);
                }

                container.appendChild(img);
            });
        });
    })
    .catch(err => {
        console.error("Error loading colorTriplets.json:", err);
    });


// Swatch creation function
function createColorSwatches(colorTriplets) {
    const groupContainer = document.createElement('div');
    groupContainer.classList.add('group-container');
    groupContainer.style.display = 'flex';

    colorTriplets.forEach(color => {
        const swatch = document.createElement('div');
        swatch.classList.add('swatch');
        swatch.style.width = '20px';
        swatch.style.height = '20px';
        swatch.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        groupContainer.appendChild(swatch);
    });

    return groupContainer;
}


// Toggle view
let showingSwatches = false;

document.getElementById('colortoggleView').addEventListener('click', () => {
    document.querySelectorAll('.image-grid img').forEach(img => {
        const parent = img.parentElement;

        // Remove any existing swatch divs
        const existingSwatch = parent.querySelector('.group-container');
        if (existingSwatch) {
            existingSwatch.remove();
        }

        if (!showingSwatches) {
            // Hide image and insert swatch group if available
            const colors = img.dataset.colors ? JSON.parse(img.dataset.colors) : null;
            if (colors) {
                const swatchDiv = createColorSwatches(colors);
                img.style.display = 'none';
                parent.appendChild(swatchDiv);
            }
        } else {
            // Show image
            img.style.display = 'block';
        }
    });

    showingSwatches = !showingSwatches;
    document.getElementById('colortoggleView').textContent = showingSwatches
        ? 'Show Ticket Images'
        : 'Show Color Swatches';
});

version before end line */