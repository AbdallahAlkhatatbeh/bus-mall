'use strict'

var names =["bag","banana","bathroom","boots","breakfast","bubblegum","chair","cthulhu","dog-duck","dragon","pen","pet-sweep","scissors","shark","sweep","tauntaun","unicorn","usb","water-can","wine-glass"];







var leftImage = document.querySelector('#leftImage');
var middleImage = document.querySelector('#middleImage');
console.log(middleIMG)
var rightImage = document.querySelector('#rightImage');
var imageSection = document.querySelector('#imagesSection')


leftImage.src = `img/${names[0]}.jpg`;
leftImage.alt = names[0];
leftImage.title = names[0];

middleImage.setAttribute('src',`img/${names[1]}.jpg`);
middleImage.setAttribute('alt',names[1]);
middleImage.setAttribute('title',names[1]);


rightImage.setAttribute('src',`img/${names[2]}.jpg`);
rightImage.setAttribute('alt',names[2]);
rightImage.setAttribute('title',names[2]);

function Images(name) {
    this.name = name;
    this.clicks = 0;
    this.views = 0;
    this.imagePath = `img/${this.name}.jpg`;
    Images.all.push(this);
  }
  Images.all =[];

  for(var i =0; i<names.length; i++) {
    new Images(names[i]);
  }

  var leftIMG, middleIMG, rightIMG;
function render () {
   leftIMG = Images.all[randomNumber(0,Images.all.length-1)];
  console.log(leftIMG);
  middleIMG = Images.all[randomNumber(0,Images.all.length-1)];
  console.log(middleIMG);
  rightIMG =Images.all[randomNumber(0,Images.all.length-1)];
  console.log(rightIMG);

console.log('left',leftIMG)
  leftImage.setAttribute('src',leftIMG.imagePath);
  leftImage.setAttribute('alt',leftIMG.name);
  leftImage.setAttribute('title',leftIMG.name);

  console.log('hello',middleIMG);
  middleImage.setAttribute('src',middleIMG.imagePath);
  middleImage.setAttribute('alt',middleIMG.name);
  middleImage.setAttribute('title',middleIMG.name);



  rightImage.setAttribute('src',rightIMG.imagePath);
  rightImage.setAttribute('alt',rightIMG.name);
  rightImage.setAttribute('title',rightIMG.name);
}
render();


imageSection.addEventListener('click',handleClickOnIMG);
var totalClicks =0;
function handleClickOnIMG(event) {
  if(totalClicks <25 ) {

     
    if(event.target.id !== 'imagesSection') {
      if(event.target.id === 'leftImage') {
       leftIMG.clicks++;
      } else if(event.target.id === 'middleImage') {
        middleIMG.clicks++;
      } else if(event.target.id === 'rightImage') {
        rightIMG.clicks++;
      }
      totalClicks++;
      leftIMG.views++;
      middleIMG.views++;
      rightIMG.views++;
      render();
    }
  }  else {
    console.log('more than 25 clicks');
    imageSection.removeEventListener('click',handleClickOnIMG);
    render2();
  }
}


function render2() {
    var ulE1 = document.getElementById('summary');
    for (var i =0; i<Images.all.length ; i++) {
      var liE1 = document.createElement('li');
      liE1.textContent = `${Images.all[i].name} has ${Images.all[i].clicks} clicks and ${Images.all[i].views} views`;
      ulE1.appendChild(liE1);
    }
  }

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  

