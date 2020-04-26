'use usestrict';

console.log('its Saturday!');

var pIndex = [];

// link to dom
var choiceOne = document.getElementById('first_choice');
var choiceTwo = document.getElementById('second_choice');
var choiceThree = document.getElementById('third_choice');
var divElement = document.getElementById('product-options');

//track number of clicks
var tracker = 25;

// Create a constructor
function Shelf(opt, src){
  this.opt = opt;
  this.src = src;
  this.clicks = 0;

  pIndex.push(this);
}
// Create an algorithm that will randomly generate three unique product images
function randomizer(max) {
  return Math.floor(Math.random() * max);
}

function imgChoices() {
  var pic1 = randomizer(pIndex.length);
  console.log(pic1);
  var pic2 = randomizer(pIndex.length);
  console.log(pic2);
  var pic3 = randomizer(pIndex.length);
  console.log(pic3);

  choiceOne.src = pIndex[pic1].src;
  choiceOne.title = pIndex[pic1].opt;

  choiceTwo.src = pIndex[pic2].src;
  choiceTwo.title = pIndex[pic2].opt;

  choiceThree.src = pIndex[pic3].src;
  choiceThree.title = pIndex[pic3].opt;
}

function endChoices() {
  divElement.removeEventListener('click', handleClick);
  divElement.textContent ='';
  alert ('Thank you for taking the time to complete the survey.');
}

new Shelf('bag', './images/bag.jpg');
new Shelf('banana', './images/banana.jpg');
new Shelf('bathroom', './images/bathroom.jpg');
new Shelf('boots', './images/boots.jpg');
new Shelf('breakfast', './images/breakfast.jpg');
new Shelf('bubblegum', './images/bubblegum.jpg');
new Shelf('chair', './images/chair.jpg');
new Shelf('cthulhu', './images/cthulhu.jpg');
new Shelf('DD', './images/dog-duck.jpg');
new Shelf('dragon', './images/dragon.jpg');
new Shelf('pen', './images/pen.jpg');
new Shelf('sweep', './images/pet-sweep.jpg');
new Shelf('scissors', './images/scissors.jpg');
new Shelf('shark', './images/shark.jpg');
new Shelf('sweep', './images/sweep.png');
new Shelf('tauntaun', './images/tauntaun.jpg');
new Shelf('unicorn', './images/unicorn.jpg');
new Shelf('usb', './images/usb.gif');
new Shelf('water', './images/water-can.jpg');
new Shelf('wine', './images/wine-glass.jpg');



//Once the users ‘clicks’ a product, generate three new products for the user to pick from.
function handleClick(event){
  var productChoice = event.target.title;
  for(var i = 0; i < pIndex.length; i++){
    if (productChoice === pIndex[i].name){
      pIndex[i].clicks++;
    }
  }
  tracker --;
  if (tracker === 0 ){
    endChoices();
  }
  imgChoices();
}
//Attach an event listener to the section of the HTML page where the images are going to be displayed.

divElement.addEventListener('click', handleClick);

imgChoices();

