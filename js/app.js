'use usestrict';

console.log ('its Saturday!');


// Todo: Create a constructor
var products = [];


function Product(opt, optImg) {
  this.opt = opt;
  this.optImg = optImg;
  products.push(this);

}