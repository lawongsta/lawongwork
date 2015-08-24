document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('yellowButton').onclick = switchYellow;

function switchGray() {
  document.body.style.backgroundColor = 'gray';
 document.body.style.color = 'black';
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'gray';
}

function switchYellow() {
  document.body.style.backgroundColor = 'yellow';
  document.body.style.color = 'pink';
}
