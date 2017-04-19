
'use strict';

var prodArray = [];
var picturesThatGoOnThePage = [];
var picturesPrevious = [];
var product1, product2, product3;

function imgSelection(name, source, tag) {
  this.name = name;
  this.source = source;
  this.tag = tag;
  this.clicked = 0;
  this.displayed = 0;
  this.percentclicked = 0;
  prodArray.push(this);
}

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

function randomNumber() {
  return Math.floor(Math.random() * prodArray.length - 0);
}

function putPictureOnPage() {

  picturesThatGoOnThePage = [];
  var nextPhoto = prodArray.splice(randomNumber(prodArray), 1);
  nextPhoto[0].displayed++;
  picturesThatGoOnThePage = picturesThatGoOnThePage.concat(nextPhoto);
  nextPhoto = prodArray.splice(randomNumber(prodArray), 1);
  nextPhoto[0].displayed++;
  picturesThatGoOnThePage = picturesThatGoOnThePage.concat(nextPhoto);
  nextPhoto = prodArray.splice(randomNumber(prodArray), 1);
  nextPhoto[0].displayed++;
  picturesThatGoOnThePage = picturesThatGoOnThePage.concat(nextPhoto);
  prodArray = prodArray.concat(picturesPrevious);


  product1 = document.getElementById('product1');
  var image1 = document.createElement('img');
  image1.src = picturesThatGoOnThePage[0].source;
  product1.appendChild(image1);

  product2 = document.getElementById('product2');
  var image2 = document.createElement('img');
  image2.src = picturesThatGoOnThePage[1].source;
  product2.appendChild(image2);

  product3 = document.getElementById('product3');
  var image3 = document.createElement('img');
  image3.src = picturesThatGoOnThePage[2].source;
  product3.appendChild(image3);

  picturesPrevious = picturesThatGoOnThePage;
  product1.addEventListener('click', handleImgClick);
  product2.addEventListener('click', handleImgClick);
  product3.addEventListener('click', handleImgClick);
}


putPictureOnPage();

function handleImgClick(e) {
  var imageId = e.target;
  console.log(imageId);
  product1.innerHTML = [];
  product3.innerHTML = [];
  product2.innerHTML = [];
  putPictureOnPage();
}
// function renderChart() {
//   app.textConent = '';
//   var canvas = document.createElement('canvas');
//   canvas.width = app.clientWidth;
//   canvas.height = app.clientWidth;
//   app.appendChild(canvas);
//
//   var ctx = canvas.getContext('2d');
//   ctx.fillRect(0,0,50,50);
//   var data = {
//     lables: [],
//     datasets: [
//       {
//         label: 'Click count',
//         dats: []
//       },
//         label: 'display count',
//         data: []
//       },
//     ],
//   }
// }
