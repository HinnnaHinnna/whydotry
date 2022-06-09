let myFont;
function preload() {
  myFont = loadFont('NotoSansKR-Bold.otf');
}
let isFocused = false;
let str = "";
function setup() {
  createCanvas(1, 1);
  textSize(10);
}

function draw() {
  background(0);

  if (!isFocused) {
    let unicode = '';
    for (var i = 0; i < str.length; i++) {
      let unitmp = str[i].charCodeAt(0).toString(16);
      let uniint = parseInt(unitmp,16) + 1;
      unicode += String.fromCharCode(uniint);
    }
    str = unicode;

    fill(0);
    text(str, 50, 20);
    document.getElementById('article').value = str;
  }
}

function textFocused(val) {
  if (val==true)
  {
    isFocused = true;
    document.getElementById("article").style.backgroundColor = "#ffffff";
  } else {
    document.getElementById("article").style.backgroundColor = "#ffffff";
    let strTmp = document.getElementById('article').value;
    str = strTmp;
    isFocused = false;
    document.getElementById("article").blur();
  }
}
