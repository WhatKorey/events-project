const colorDisplay = document.querySelector('#color-display');
const aquaButton = document.querySelector('#aqua');
const tealButton = document.querySelector('#teal');
const pinkButton = document.querySelector('#pink');
const purpleButton = document.querySelector('#purple');
const colorlessButton = document.querySelector('#colorless');
const toggleVisibilityButton = document.querySelector('#toggle-visibility');

function updateColor(color, text) {
    colorDisplay.style.backgroundColor = color;
    colorDisplay.textContent = text;
}

aquaButton.addEventListener('click', () => updateColor('aqua', 'aqua'));
tealButton.addEventListener('click', () => updateColor('teal', 'teal'));
pinkButton.addEventListener('click', () => updateColor('pink', 'pink'));
purpleButton.addEventListener('click', () => updateColor('purple', 'purple'));
colorlessButton.addEventListener('click', () => updateColor('transparent', 'colorless'));

toggleVisibilityButton.addEventListener('click', () => {
    if (colorDisplay.style.display === 'none') {
        colorDisplay.style.display = 'flex';
    } else {
        colorDisplay.style.display = 'none';
    }
});