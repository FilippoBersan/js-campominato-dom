'use strict';
// <div class="cell">1</div>
//       <div class="cell">2</div>
//       <div class="cell">3</div>
//       <div class="cell">4</div>
//       <div class="cell">5</div>
//       <div class="cell">6</div>
//       <div class="cell">7</div>
//       <div class="cell">8</div>
//       <div class="cell">9</div>
//       <div class="cell">10</div>
//       <div class="cell">11</div>
//       <div class="cell">12</div>
//       <div class="cell">13</div>

// creo html in js
function myCreateElement(tag, ClassName, content) {
  const element = document.createElement(tag);
  element.classList.add(ClassName);
  element.append(content);
  return element;
}

function myBombe(tag, ClassName, content) {
  const element = document.createElement(tag);
  element.classList.add(ClassName);
  element.append(content);
  return element;
}

// creo variabile  boards
const board = document.querySelector('.board');
console.log(board);

// creo celle da 1 a 100
for (let i = 1; i < 101; i++) {
  const myElement = myCreateElement('div', 'cell', i);
  board.append(myElement);

  myElement.addEventListener('click', function () {
    myElement.classList.add('onclick');
    console.log('haicliccato su:', myElement);
  });
}

for (let i = 1; i < 17; i++) {
  let bombe = myBombe('div', 'cell', i);
  bombe = Math.floor(Math.random(0) * 16);

  console.log(bombe);
}

// seleziono variabile bottone
const inputButton = document.querySelector('.btn-play');
console.log(inputButton);

// al click aggiungo classe active
inputButton.addEventListener('click', function () {
  console.log(inputButton, ' hai cliccato su play');
  if (inputButton !== null) {
    board.classList.add('active');
  }
});
