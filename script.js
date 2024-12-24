document.getElementById('generate-btn').addEventListener('click', () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
document.getElementById('color-display').textContent = randomColor;
document.body.style.backgroundColor = randomColor;    
})