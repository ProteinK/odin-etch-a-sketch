const container = document.querySelector('.container');

const getRandomInt = max => {
  return Math.floor(Math.random() * max);
}

const createGrid = squaresPerSide => {
  const totalSquares = squaresPerSide * squaresPerSide;
  const squareSize = container.clientWidth / squaresPerSide;
  for (let i = 0; i < totalSquares; i++) {

    let div = document.createElement('div');
    div.classList.add('square');
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;
    div.style.backgroundColor = `rgb(255, 255, 255)`;
    div['data-color'] = 255;

    div.addEventListener('mouseenter', e => {
      // random color
      // const r = getRandomInt(256);
      // const g = getRandomInt(256);
      // const b = getRandomInt(256);
      // e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

      // add 10% black
      let newColor = e.target['data-color'] - 25.5;
      e.target.style.backgroundColor = `rgb(${newColor}, ${newColor}, ${newColor})`;
      e.target['data-color'] = newColor;
    });

    container.appendChild(div);
  }
};

createGrid(16);

const button = document.querySelector('#clear');
button.addEventListener('click', e => {
  const squaresPerSide = Number(prompt('Squares per side: '));
  if (squaresPerSide > 100) {
    return;
  }

  // Remove all children
  container.innerHTML = '';


  createGrid(squaresPerSide);
});
