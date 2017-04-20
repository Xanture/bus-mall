'use strict';

var prodArray = [];
var picturesThatGoOnThePage = [];
var picturesPrevious = [];
var product1, product2, product3;
var clicksRemaining = 25;

function imgSelection(name, src, tag) {
  this.name = name;
  this.src = src;
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
  image1.setAttribute('pictures-that-go-on-the-page', 0);
  image1.src = picturesThatGoOnThePage[0].src;
  product1.appendChild(image1);

  product2 = document.getElementById('product2');
  var image2 = document.createElement('img');
  image2.setAttribute('pictures-that-go-on-the-page', 1);
  image2.src = picturesThatGoOnThePage[1].src;
  product2.appendChild(image2);

  product3 = document.getElementById('product3');
  var image3 = document.createElement('img');
  image3.setAttribute('pictures-that-go-on-the-page', 2);
  image3.src = picturesThatGoOnThePage[2].src;
  product3.appendChild(image3);

  picturesPrevious = picturesThatGoOnThePage;

  product1.addEventListener('click', handleImgClick);
  product2.addEventListener('click', handleImgClick);
  product3.addEventListener('click', handleImgClick);
}

function handleImgClick(e) {
  clicksRemaining--;
  product1.innerHTML = [];
  product3.innerHTML = [];
  product2.innerHTML = [];
  var imageId = e.target;
  var photosOnScreenIndex = imageId.getAttribute('pictures-that-go-on-the-page');
  picturesThatGoOnThePage[photosOnScreenIndex].clicked++;
  if (clicksRemaining > 0){
    putPictureOnPage();
  } else {
    product1.removeEventListener('click', handleImgClick);
    product2.removeEventListener('click', handleImgClick);
    product3.removeEventListener('click', handleImgClick);
    prodArray = prodArray.concat(picturesPrevious);
    localStorage.data = JSON.stringify(prodArray);

    renderChart();
  }
}

try {
  prodArray = JSON.parse(localStorage.data);
  localStorage.clear();
} catch (error) {
  console.log('no data');
}

putPictureOnPage();

function renderChart() {
  var productCounter = document.getElementById('product-counter');
  var canvas = document.createElement('canvas');
  canvas.width = productCounter.clientWidth;
  canvas.height = productCounter.clientWidth;
  productCounter.appendChild(canvas);

  var ctx = canvas.getContext('2d');
  var data = {
    labels: [],
    datasets: [
      {
        label: 'Click count',
        data: [],
        backgroundColor : '#BF0001',
      },
      {
        label: 'display count',
        data: [],
        backgroundColor : '#000FBF',
      },
    ],
  };
  var photo;
  for (var i=0; i<prodArray.length; i++){
    console.log(prodArray[i]);
    photo = prodArray[i];
    data.labels.push(photo.name);
    data.datasets[0].data.push(photo.clicked);
    data.datasets[1].data.push(photo.displayed);
  }
  new Chart(ctx, {
    type: 'bar',
    data: data,
  });
}
