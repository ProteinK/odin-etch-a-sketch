const container = document.querySelector('.container');

const createGrid = (squaresPerSide) => {
  const totalSquares = squaresPerSide * squaresPerSide;
  const squareSize = container.clientWidth / squaresPerSide;
  for (let i = 0; i < totalSquares; i++) {

    let div = document.createElement('div');
    div.classList.add('square');
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;

    div.addEventListener('mouseenter', e => {
      e.target.classList.add('square-hovered');
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
