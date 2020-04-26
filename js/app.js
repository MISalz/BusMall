'use usestrict';

console.log('its Saturday!');

var productIndex = [];

var choice_one = document.getElementById('first_choice');
var choice_two = document.getElementById('second_choice');
var choice_three = document.getElementById('third_choice');
var divElement = document.getElementById('product-options');

var tracker = 25;

// Create a constructor
function Shelf(opt, src){
  this.opt = opt;
  this.src = src;
  this.clicks = 0;

  productIndex.push(this);
}
// Create an algorithm that will randomly generate three unique product images
function randomizer (max) {
  return Math.floor(Math.random()) * max;
}

function imgChoices() {
  var pic1 = randomizer(productIndex.length);
  var pic2 = randomizer(productIndex.length);
  var pic3 = randomizer(productIndex.length);

  choice_one.src = Shelf[pic1].src;
  choice_one.title = Shelf[pic1].opt;

  choice_two.src = Shelf[pic2].src;
  choice_two.title = Shelf[pic2].opt;

  choice_three.src = Shelf[pic3].src;
  choice_three.title = Shelf[pic3].opt;



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


function endChoices(){
  divElement.removeEventListener('click', handleClick);
  divElement.textContent ='';
  console.log ('Thank you for taking the time to complete the survey.d');
}
//Once the users ‘clicks’ a product, generate three new products for the user to pick from.
function handleClick(event){
  var productChoice = event.target.title;
  for(var i = 0; i < productIndex.length; i++){
    if (productChoice === productIndex[i].name){
      productIndex[i].clicks++;
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

