'use strict';

var randomimg1, randomimg2, randomimg3;
var prodArray = [];
var picturesThatGoOnThePage = [];
var picturesToGoOnThePage = [];
var ranNum1, ranNum2, ranNum3;

var bag = new imgSelection ('Bag', 'img/bag.jpg');
var banana = new imgSelection ('Banana', 'img/banana.jpg');
var bathroom = new imgSelection ('Bathroom', 'img/bathroom.jpg');
var boots = new imgSelection ('Boots', 'img/boots.jpg');
var breakfast = new imgSelection ('Breakfast', 'img/breakfast.jpg');

var bubblegum = new imgSelection ('Bubblegum', 'img/bubblegum.jpg');
var chair = new imgSelection ('Chair', 'img/chair.jpg');
var cthulhu = new imgSelection ('Cthulhu', 'img/cthulhu.jpg');
var dogDuck = new imgSelection ('Dog-duck', 'img/dog-duck.jpg');
var dragon = new imgSelection ('Dragon', 'img/dragon.jpg');

var pen = new imgSelection ('Pen', 'img/pen.jpg');
var petSweep = new imgSelection ('Pet-sweep', 'img/pet-sweep.jpg');
var scissors = new imgSelection ('Scissors', 'img/scissors.jpg');
var shark = new imgSelection ('Shark', 'img/shark.jpg');
var sweep = new imgSelection ('Sweep', 'img/sweep.png');

var tauntaun = new imgSelection ('Tauntaun', 'img/tauntaun.jpg');
var unicorn = new imgSelection ('Unicorn', 'img/unicorn.jpg');
var usb = new imgSelection ('USB', 'img/usb.gif');
var waterCan = new imgSelection ('Water-can', 'img/water-can.jpg');
var wineGlass = new imgSelection ('Wine Glass', 'img/wine-glass.jpg');

function imgSelection(name, source) {
  this.name = name;
  this.source = source;
  this.clicked = 0;
  this.displayed = 0;
  this.percentclicked = 0;
  prodArray.push(this);
}

function randomNumber() {
  return Math.floor(Math.random() * prodArray.length - 0);
}

function randomPicture() {
  var nextPhoto = prodArray.splice(randomNumber(prodArray), 1);
  picturesThatGoOnThePage = picturesThatGoOnThePage.concat(nextPhoto);
  nextPhoto = prodArray.splice(randomNumber(prodArray), 1);
  picturesThatGoOnThePage = picturesThatGoOnThePage.concat(nextPhoto);
  nextPhoto = prodArray.splice(randomNumber(prodArray), 1);
  picturesThatGoOnThePage = picturesThatGoOnThePage.concat(nextPhoto);

  nextPhoto = prodArray.splice(randomNumber(prodArray), 1);
  picturesToGoOnThePage = picturesToGoOnThePage.concat(nextPhoto);
  nextPhoto = prodArray.splice(randomNumber(prodArray), 1);
  picturesToGoOnThePage = picturesToGoOnThePage.concat(nextPhoto);
  nextPhoto = prodArray.splice(randomNumber(prodArray), 1);
  picturesToGoOnThePage = picturesToGoOnThePage.concat(nextPhoto);
  console.log(picturesThatGoOnThePage);
  console.log(picturesToGoOnThePage);
}

function putPictureOnPage() {
  randomPicture();
  // newPictures();
  var product1 = document.getElementById('product1');
  var image = document.createElement('img');
  image.src = picturesThatGoOnThePage[0].source;
  product1.appendChild(image);
  var product2 = document.getElementById('product2');
  image = document.createElement('img');
  image.src = picturesThatGoOnThePage[1].source;
  product2.appendChild(image);
  var product3 = document.getElementById('product3');
  image = document.createElement('img');
  image.src = picturesThatGoOnThePage[2].source;
  product3.appendChild(image);
}
putPictureOnPage();

function handleImgClick(e) {
var imageId = e.target.id;
}
