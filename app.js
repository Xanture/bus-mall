'use strict';

var randomimg1, randomimg2, randomimg3;
var prodArray = [];
var picturesThatGoOnThePage = [];
var picturesToGoOnThePage = [];
var ranNum1, ranNum2, ranNum3;
var picturesPrevious = [];
var product1 = document.getElementById('product1')
var product2 = document.getElementById('product2')
var product3 = document.getElementById('product3')

var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = 'img/bag.jpg';
imgArray[1] = new Image();
imgArray[1].src = 'img/banana.jpg';
imgArray[2] = new Image();
imgArray[2].src = 'img/bathroom.jpg';
imgArray[3] = new Image();
imgArray[3].src = 'img/boots.jpg';
imgArray[4] = new Image();
imgArray[4].src = 'img/breakfast.jpg';
imgArray[5] = new Image();
imgArray[5].src = 'img/bubblegum.jpg';
imgArray[6] = new Image();
imgArray[6].src = 'img/chair.jpg';
imgArray[7] = new Image();
imgArray[7].src = 'img/cthulhu.jpg';
imgArray[8] = new Image();
imgArray[8].src = 'img/dog-duck.jpg';
imgArray[9] = new Image();
imgArray[9].src = 'img/dragon.jpg';
imgArray[10] = new Image();
imgArray[10].src = 'img/pen.jpg';
imgArray[11] = new Image();
imgArray[11].src = 'img/pet-sweep.jpg';
imgArray[12] = new Image();
imgArray[12].src = 'img/scissors.jpg';
imgArray[13] = new Image();
imgArray[13].src = 'img/shark.jpg';
imgArray[14] = new Image();
imgArray[14].src = 'img/sweep.png';
imgArray[15] = new Image();
imgArray[15].src = 'img/tauntaun.jpg';
imgArray[16] = new Image();
imgArray[16].src = 'img/unicorn.jpg';
imgArray[17] = new Image();
imgArray[17].src = 'img/usb.gif';
imgArray[18] = new Image();
imgArray[18].src = 'img/water-can.jpg';
imgArray[19] = new Image();
imgArray[19].src = 'img/wine-glass.jpg';

var bag = new imgSelection ('Bag', 'img/bag.jpg', imgArray[0]);
var banana = new imgSelection ('Banana', 'img/banana.jpg', imgArray[1]);
var bathroom = new imgSelection ('Bathroom', 'img/bathroom.jpg', imgArray[2]);
var boots = new imgSelection ('Boots', 'img/boots.jpg', imgArray[3]);
var breakfast = new imgSelection ('Breakfast', 'img/breakfast.jpg', imgArray[4]);
var bubblegum = new imgSelection ('Bubblegum', 'img/bubblegum.jpg', imgArray[5]);
var chair = new imgSelection ('Chair', 'img/chair.jpg', imgArray[6]);
var cthulhu = new imgSelection ('Cthulhu', 'img/cthulhu.jpg', imgArray[7]);
var dogDuck = new imgSelection ('Dog-duck', 'img/dog-duck.jpg', imgArray[8]);
var dragon = new imgSelection ('Dragon', 'img/dragon.jpg', imgArray[9]);
var pen = new imgSelection ('Pen', 'img/pen.jpg', imgArray[10]);
var petSweep = new imgSelection ('Pet-sweep', 'img/pet-sweep.jpg', imgArray[11]);
var scissors = new imgSelection ('Scissors', 'img/scissors.jpg', imgArray[12]);
var shark = new imgSelection ('Shark', 'img/shark.jpg', imgArray[13]);
var sweep = new imgSelection ('Sweep', 'img/sweep.png', imgArray[14]);
var tauntaun = new imgSelection ('Tauntaun', 'img/tauntaun.jpg', imgArray[15]);
var unicorn = new imgSelection ('Unicorn', 'img/unicorn.jpg', imgArray[16]);
var usb = new imgSelection ('USB', 'img/usb.gif', imgArray[17]);
var waterCan = new imgSelection ('Water-can', 'img/water-can.jpg', imgArray[18]);
var wineGlass = new imgSelection ('Wine Glass', 'img/wine-glass.jpg', imgArray[19]);

function imgSelection(name, source, tag) {
  this.name = name;
  this.source = source;
  this.tag = tag;
  this.clicked = 0;
  this.displayed = 0;
  this.percentclicked = 0;
  prodArray.push(this);
}

function randomNumber() {
  return Math.floor(Math.random() * prodArray.length - 0);
}

function putPictureOnPage() {

  picturesThatGoOnThePage = []

  var nextPhoto = prodArray.splice(randomNumber(prodArray), 1);
  nextPhoto[0].displayed++
  picturesThatGoOnThePage = picturesThatGoOnThePage.concat(nextPhoto);
  nextPhoto = prodArray.splice(randomNumber(prodArray), 1);
    nextPhoto[0].displayed++
  picturesThatGoOnThePage = picturesThatGoOnThePage.concat(nextPhoto);
  nextPhoto = prodArray.splice(randomNumber(prodArray), 1);
    nextPhoto[0].displayed++
  picturesThatGoOnThePage = picturesThatGoOnThePage.concat(nextPhoto);
  prodArray = prodArray.concat(picturesPrevious)


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

  picturesPrevious = picturesThatGoOnThePage;
}

product1.addEventListener('click', handleImgClick);
product2.addEventListener('click', handleImgClick);
product3.addEventListener('click', handleImgClick);

putPictureOnPage();

function handleImgClick(e) {
  var imageId = e.target;
  console.log(typeof tauntaun.tag);
  if (imageId == imgArray[15]) {
    console.log('woot');
  } else {
    putPictureOnPage()
  }
console.log(typeof imageId);
}
