'use usestrict';

console.log('its Saturday!');

var busMall = [];

// link to html image place holders
var choiceOne = document.getElementById('first_choice');
var choiceTwo = document.getElementById('second_choice');
var choiceThree = document.getElementById('third_choice');
var divElement = document.getElementById('product-options');

//parent element to write to dom
var pElement = document.getElementById('tally');
//track number of clicks
var tracker = 25;

// Create a constructor
function PictChoices(name, src){
  this.name = name;
  this.src = src;
  this.clicks = 0;
  busMall.push(this);
}
// Create an algorithm that will randomly generate three unique product images
function randomizer(max){
  return Math.floor(Math.random() * max);
}

function imgChoices(){
  var pic1 = randomizer(busMall.length);
  console.log(pic1);
  var pic2 = randomizer(busMall.length);
  console.log(pic2);
  var pic3 = randomizer(busMall.length);
  console.log(pic3);

  choiceOne.src = busMall[pic1].src;
  choiceOne.title = busMall[pic1].name;

  choiceTwo.src = busMall[pic2].src;
  choiceTwo.title = busMall[pic2].name;

  choiceThree.src = busMall[pic3].src;
  choiceThree.title = busMall[pic3].name;
}

function endChoices() {
  divElement.removeEventListener('click', handleClick);
  divElement.textContent = '';
  alert ('Thank you for taking the time to complete the survey.');
}

new PictChoices('bag', './images/bag.jpg');
new PictChoices('banana', './images/banana.jpg');
new PictChoices('bathroom', './images/bathroom.jpg');
new PictChoices('boots', './images/boots.jpg');
new PictChoices('breakfast', './images/breakfast.jpg');
new PictChoices('bubblegum', './images/bubblegum.jpg');
new PictChoices('chair', './images/chair.jpg');
new PictChoices('cthulhu', './images/cthulhu.jpg');
new PictChoices('DD', './images/dog-duck.jpg');
new PictChoices('dragon', './images/dragon.jpg');
new PictChoices('pen', './images/pen.jpg');
new PictChoices('sweep', './images/pet-sweep.jpg');
new PictChoices('scissors', './images/scissors.jpg');
new PictChoices('shark', './images/shark.jpg');
new PictChoices('sweep', './images/sweep.png');
new PictChoices('tauntaun', './images/tauntaun.jpg');
new PictChoices('unicorn', './images/unicorn.jpg');
new PictChoices('usb', './images/usb.gif');
new PictChoices('water', './images/water-can.jpg');
new PictChoices('wine', './images/wine-glass.jpg');


//Once the users ‘clicks’ a product, generate three new products for the user to pick from and track # of clicks
function handleClick(event){
  var productChoice = event.target.title;
  console.log(productChoice);
  for(var i = 0; i < busMall.length; i++){
    if (productChoice === busMall[i].name){
      busMall[i].clicks++;
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

//write to nav bar total clicks
for(var i = 0 ; i < busMall.length; i++){
  var imgEl = document.createElement('li');
  imgEl.textContent = busMall[i];
  pElement.appendChild(imgEl);
}
