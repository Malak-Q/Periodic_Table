document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const elementPage = document.getElementById('element-page');
    const elementContent = document.getElementById('element-content');
    const backButton = document.getElementById('back-button');

    const elementsData = {
        'Mg': {
            name: 'Magnesium',
            symbol: 'Mg',
            story: 'Mohammed Mahdi’s special element is Magnesium! This is a light, strong metal used in fireworks that make bright, beautiful flashes in the sky. Just like Magnesium, Mohammed’s ideas are super bright and make everything around him shine!'
        },
        'Al': {
            name: 'Aluminum',
            symbol: 'Al',
            story: 'Abdul Aziz Husain’s special element is Aluminum! This is a light metal used to make airplanes and soda cans. Just like an airplane, Abdul is full of energy and ready to fly into a new adventure!'
        },
        'Fe': {
            name: 'Iron',
            symbol: 'Fe',
            story: 'Fahad Husain’s special element is Iron! This super-strong metal is used to build things like skyscrapers and bridges. Just like Iron, Fahad is a strong and reliable friend who you can always count on.'
        },
        'Au': {
            name: 'Gold',
            symbol: 'Au',
            story: 'Albandari Ali’s special element is Gold! Gold is a beautiful, shiny, and very valuable metal used to make crowns and jewelry. Just like Gold, Albandari is unique and precious!'
        },
        'Li': {
            name: 'Lithium',
            symbol: 'Li',
            story: 'Lulwah Khalifa’s special element is Lithium! This element is a superstar in batteries that power our phones and electric cars. The story can be about how Lulwah has the power and energy to do amazing things!'
        },
        'Ne': {
            name: 'Neon',
            symbol: 'Ne',
            story: 'Nayla Khalifa’s special element is Neon! This gas glows with a bright, beautiful color when it gets a little electricity. Just like Neon, Nayla is a brilliant and fun person who always shines bright!'
        },
        'H': {
            name: 'Hydrogen',
            symbol: 'H',
            story: 'Alhusain Tawfiq’s special element is Hydrogen! It is the most common element in the universe and is the fuel that powers stars in the sky. Just like Hydrogen, Alhusain is a superstar camper with lots of energy to explore!'
        },
        'C': {
            name: 'Carbon',
            symbol: 'C',
            story: 'Ali Abdulla’s special element is Carbon! This amazing element is found in everything from your pencil to a sparkling diamond. Carbon is a “master builder,” and so is Ali, who loves to create and imagine new things!'
        },
        'He': {
            name: 'Helium',
            symbol: 'He',
            story: 'Malak Hasan’s special element is Helium! This is the gas that makes balloons float and can make your voice sound funny and squeaky. Just like Helium, Malak is a fun-loving and playful person who makes everyone smile!'
        },
        'Cu': {
            name: 'Copper',
            symbol: 'Cu',
            story: 'Mariam Hasan’s special element is Copper! This reddish-brown metal is used to make wires that help electricity travel and connect things. Just like Copper, Mariam is a great friend who helps everyone connect and have fun together!'
        },
        'Na': {
            name: 'Sodium',
            symbol: 'Na',
            story: 'Sameera Saad’s special element is Sodium! Sodium is a part of salt, and a little bit of it makes food taste better. Just like Sodium, Sameera adds a pinch of magic and fun to our camp!'
        }
    };

    document.querySelectorAll('.element-block').forEach(block => {
        block.addEventListener('click', (event) => {
            const elementSymbol = event.currentTarget.dataset.element;
            const data = elementsData[elementSymbol];

            if (data) {
                mainContent.classList.add('hidden');
                elementPage.classList.remove('hidden');
                
                elementContent.innerHTML = `
                    <h2 class="element-title">${data.name} (${data.symbol})</h2>
                    <div class="placeholder-3d-block">3D Block Placeholder</div>
                    <p class="element-story">${data.story}</p>
                `;
            }
        });
    });

    backButton.addEventListener('click', () => {
        elementPage.classList.add('hidden');
        mainContent.classList.remove('hidden');
    });
});

let rainInterval;
const fallingColors = ['#F9A8D4', '#FCD34D', '#A78BFA', '#6EE7B7', '#93C5FD', '#FCA5A5'];

const startRain = (container) => {
    rainInterval = setInterval(() => {
        const element = document.createElement('div');
        const size = Math.random() * 15 + 10;
        const duration = Math.random() * 5 + 5;
        const delay = Math.random() * 5;
        const left = Math.random() * 100;
        const color = fallingColors[Math.floor(Math.random() * fallingColors.length)];

        element.className = 'falling-element';
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.left = `${left}%`;
        element.style.backgroundColor = color;
        element.style.animationDuration = `${duration}s`;
        element.style.animationDelay = `-${delay}s`;
        
        container.appendChild(element);

        // Remove the element after it falls to prevent memory issues
        element.addEventListener('animationend', () => {
            element.remove();
        });

    }, 100);
};

const stopRain = () => {
    if (rainInterval) {
        clearInterval(rainInterval);
        rainInterval = null;
    }
};

// To start the rain on page load:
const leftRain = document.getElementById('left-rain');
const rightRain = document.getElementById('right-rain');
startRain(leftRain);
startRain(rightRain);

// To stop and start the rain when navigating pages:
// Call stopRain() when a bubble is clicked to go to the element page.
// Call startRain(leftRain) and startRain(rightRain) when the "Back" button is clicked.