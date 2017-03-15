console.log('Loaded!');

var element = document.getElementById('mytxt');
element.innerHTML = 'Heya';

var img = document.getElementById('dragon');
img.onclick = function() {
  img.style.marginleft = '100px';
};