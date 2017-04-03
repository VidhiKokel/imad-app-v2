console.log('Loaded!');

var element = document.getElementById('mytxt');
element.innerHTML = 'Heya';

var img = document.getElementById('dragon');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 100;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight,100)
  img.style.marginLeft = '100px';
};