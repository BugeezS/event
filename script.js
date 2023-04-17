const _initTime = Date.now();

const getElapsedTime = () => {
  return ((Date.now() - _initTime) / 1000).toFixed(2) + 's';
};

const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
};

const actionSquares = document.querySelectorAll('.actionsquare');
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);
}

const squares = document.querySelectorAll('.green, .violet, .orange');
const section = document.querySelector('.displayedsquare-wrapper');
const section2 = document.querySelectorAll("section")[2];

function createDiv(e) {
  const div = document.createElement('div');
  div.classList.add(e.target.classList[1], 'actionsquare');
  section.appendChild(div);
  const li = document.createElement('li');
  section2.appendChild(li);
  li.textContent = getElapsedTime();
  alert("la couleur est " + e.target.classList[1]);

}

squares.forEach(square => {
  square.addEventListener('click', createDiv);
});

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
      const randomColor = Math.floor(Math.random()*16777215).toString(16); // Generate a random hexadecimal color value
      document.body.style.backgroundColor = "#" + randomColor; // Set the body color to the random color value
      const ul = document.querySelector('ul');
      const li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = "Space key pressed";
    }
    if (event.code === 'KeyL') {
      const ul = document.querySelector('ul');
      while (ul.firstChild) { // Remove all child elements of the ul element
        ul.removeChild(ul.firstChild);
      }
    }
    if (event.code === 'KeyS') {
        const section3 = document.querySelector('.displayedsquare-wrapper');
        while (section3.firstChild) { // Remove all child elements of the ul element
          section3.removeChild(section3.firstChild);
        }
      }
  });

// function click(){
//     const prompt = prompt("Couleur est " + getElapsedTime());
// }



  
  


