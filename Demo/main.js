//document.getElementById('time').innerHTML = new Date().toLocaleDateString();

document.getElementById('time').innerHTML = new Date().toLocaleDateString();

function pink() {
  document.body.style.backgroundColor = 'pink';
}

function yello() {
  document.body.style.backgroundColor = 'yellow';
}

function black() {
  document.body.style.backgroundColor = 'black';
}

function white() {
  document.body.style.backgroundColor = 'white';
}

function reset() {
  document.body.style.backgroundColor = 'white'; //???
}

function showhtml() {
  document.getElementById('fig').src = './img/123.jpg';
  document.getElementById('desc').innerHTML =
    'HTML is the hypertext markup language...';
}

function showcss() {
  document.getElementById('fig').src = './img/123.jpg';
  document.getElementById('desc').innerHTML =
    ' CSS is the cascading style sheet...';
}

function showjs() {
  document.getElementById('fig').src = './img/123.jpg';
  document.getElementById('desc').innerHTML =
    'JAVAscript is the programming language for web...';
}

function hide() {
  document.getElementById('fig').src = '';
  document.getElementById('desc').innerHTML = '';
}
