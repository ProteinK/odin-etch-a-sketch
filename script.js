const container = document.querySelector('.container');

let divs = [];

for (let i = 0; i < 256; i++) {
  let div = document.createElement('div');
  div.classList.add('square');
  div.style.width = '50px';
  div.style.height = '50px';

  div.addEventListener('mouseenter', e => {
    e.target.classList.add('square-hovered');
  });

  container.appendChild(div);
  divs.push(div);
}

const button = document.querySelector('#clear');
button.addEventListener('click', e => {
  divs.forEach(div => {
    div.classList.remove('square-hovered');
  });
});
