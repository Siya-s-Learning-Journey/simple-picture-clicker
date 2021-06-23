var catNameElement1 = document.getElementById('cat-name');
var catNameElement2 = document.getElementById('cat-name2');

catNameElement1.innerHTML = "Cat 1";
catNameElement2.innerHTML = "Cat 2";

var catElement = document.getElementById('cat-image');
var catElement2 = document.getElementById('cat-image2');
var counterElement = document.getElementById('no-clicked');
var counter2Element = document.getElementById('no-clicked2');
var counter = 1;
catElement.addEventListener('click', function () {
    counterElement.innerHTML = counter++;
    console.log("Cat clicked")
}, false);

catElement2.addEventListener('click', function () {
    counter2Element.innerHTML = counter++;
    console.log("Cat 2 clicked")
}, false);
