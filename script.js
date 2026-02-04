const squaresContainer = document.querySelector('.squares-container');
const resetButton = document.querySelector('.reset');

function createGrid (size) {
    // Clear any existing squares
    squaresContainer.innerHTML = '';

    //Calculate square size - Container is 800px wide
    const squareSize = 800 / size;

    //Total squares = size × size 
    for (let i=0; i<size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        //Each square remembers: its color, its darkness level
        square.dataset.opacity = 0;
        square.dataset.r = "";
        square.dataset.g = "";
        square.dataset.b = "";

        square.addEventListener("mouseover", () => {
            let opacity = Number(square.dataset.opacity);
            if (opacity === 0) {
                //Random colors
                square.dataset.r = Math.floor(Math.random() * 256);
                square.dataset.g = Math.floor(Math.random() * 256);
                square.dataset.b = Math.floor(Math.random() * 256);
            }

            if (opacity < 1) {
                //Each hover = +10%
                opacity += 0.1;
                square.dataset.opacity = opacity;
                const r = square.dataset.r;
                const g = square.dataset.g;
                const b = square.dataset.b;

                square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
            }
        });
        squaresContainer.appendChild(square);
    }
}

resetButton.addEventListener('click', () => {
    const newSize = window.prompt('How many squares per side do you want? Please choose between 1 and 100', 16);
    if (newSize >=1 && newSize <=100) {
        createGrid(newSize);
    } else {
        createGrid(100);
    }
});

// Default grid
createGrid(16);
