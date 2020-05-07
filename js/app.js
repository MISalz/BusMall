/* eslint-disable no-unused-vars */
'use usestrict';

var busMall = [];

// link to html image place holders
var choiceOne = document.getElementById('first_choice');
var choiceTwo = document.getElementById('second_choice');
var choiceThree = document.getElementById('third_choice');
var divElement = document.getElementById('product-options');

// //parent element to write to dom
var pElement = document.getElementById('tally');
//track number of clicks
var tracker = 5;

var turnCounter = [];

// Create a constructor
function PictChoices(name, src, clicks =0, turns=0){
  this.name = name;
  this.src = src;
  this.clicks = clicks;
  this.turns = turns;
  busMall.push(this);
}
// Create an algorithm that will randomly generate three unique product images
function randomizer(max){
  return Math.floor(Math.random() * max);
}

function saveLocalStorage(){
  var savedProds = JSON.stringify(busMall);
  localStorage.setItem('busMall', savedProds);
}

function loadLocalStorage(){
  if(localStorage.getItem('busMall')){
    var localStorageBus = JSON.parse(localStorage.getItem('busMall'));
    for(var i = 0; i < localStorageBus.length; i++){
      new PictChoices(localStorageBus[i].name, localStorageBus[i].src, localStorageBus[i].clicks, localStorageBus[i].turns);
    }
  }
  else{
    new PictChoices('Bag', './images/bag.jpg');
    new PictChoices('Banana', './images/banana.jpg');
    new PictChoices('Bathroom', './images/bathroom.jpg');
    new PictChoices('Boots', './images/boots.jpg');
    new PictChoices('Breakfast', './images/breakfast.jpg');
    new PictChoices('Bubblegum', './images/bubblegum.jpg');
    new PictChoices('Chair', './images/chair.jpg');
    new PictChoices('Cthulhu', './images/cthulhu.jpg');
    new PictChoices('DogDuck', './images/dog-duck.jpg');
    new PictChoices('Dragon', './images/dragon.jpg');
    new PictChoices('Pen', './images/pen.jpg');
    new PictChoices('PetSweep', './images/pet-sweep.jpg');
    new PictChoices('Scissors', './images/scissors.jpg');
    new PictChoices('Shark', './images/shark.jpg');
    new PictChoices('Sweep', './images/sweep.png');
    new PictChoices('Tauntaun', './images/tauntaun.jpg');
    new PictChoices('Unicorn', './images/unicorn.jpg');
    new PictChoices('Usb', './images/usb.gif');
    new PictChoices('Water', './images/water-can.jpg');
    new PictChoices('Wine', './images/wine-glass.jpg');
  }
  imgChoices();
}

function imgChoices(){
  do {
    var pic1 = randomizer(busMall.length);
    var pic2 = randomizer(busMall.length);
    var pic3 = randomizer(busMall.length);
  }
  while(turnCounter.includes(pic1) || turnCounter.includes(pic2) || turnCounter.includes(pic3) || pic1 === pic2 === pic3);

  choiceOne.src = busMall[pic1].src;
  choiceOne.title = busMall[pic1].name;

  choiceTwo.src = busMall[pic2].src;
  choiceTwo.title = busMall[pic2].name;

  choiceThree.src = busMall[pic3].src;
  choiceThree.title = busMall[pic3].name;

  turnCounter.pop();
  turnCounter.pop();
  turnCounter.pop();

  turnCounter.push(pic1);
  turnCounter.push(pic2);
  turnCounter.push(pic3);

  busMall[pic1].turns++;
  busMall[pic2].turns++;
  busMall[pic3].turns++;

}

function endChoices() {
  divElement.removeEventListener('click', handleClick);
  divElement.textContent = '';
  console.log('Thank you for taking the time to complete the survey.');
}


function seedChartData(){
  var clicksData = [];
  var labelData = [];
  var viewsData = [];

  for (var i =  0; i < busMall.length; i++){
    clicksData.push (busMall[i].clicks);
    labelData.push (busMall[i].name);
    viewsData.push (busMall[i].turns);
  }
  return [clicksData, labelData, viewsData];
}

function renderChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line no-undef
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line no-undef
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: seedChartData()[1],
      datasets: [{
        label: '# of clicks',
        data: seedChartData()[0],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      },
      {
        label: '# of Views',
        data:  seedChartData()[2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  console.log('here');
}




//Once the users ‘clicks’ a product, generate three new products for the user to pick from and track # of clicks
function handleClick(event){
  var productChoice = event.target.title;
  for(var i = 0; i < busMall.length; i++){
    if (productChoice === busMall[i].name){
      busMall[i].clicks++;
    }
  }
  tracker --;

  if (tracker === 0 ){
    endChoices();
    saveLocalStorage();
    renderChart();
    //write to nav bar total clicks
    for(var j = 0 ; j < busMall.length; j++){
      var imgEl = document.createElement('li');
      imgEl.textContent = busMall[j].name;

      var clEL = document.createElement('li');
      clEL.textContent = busMall[j].clicks;
      pElement.appendChild(imgEl);
      pElement.appendChild(clEL);
    }
  }
  imgChoices();
}
divElement.addEventListener('click', handleClick);

loadLocalStorage();

