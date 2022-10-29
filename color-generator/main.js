var redValue = 0;
var greenValue = 0;
var blueValue = 0;
var firstRedValue = 0, firstGreenValue = 0, firstBlueValue = 0;
var secondRedValue = 255, secondGreenValue = 255, secondBlueValue = 255;

setInterval(function(){
  var element = document.querySelector("h1.logos");
  element.style.color = element.style.color === "yellow" ? "white" : "yellow";
}, 1000);

function sideBar(){
  var element = document.querySelector("div.sidebar");
  element.style.width = element.style.width === "250px" ? "0" : "250px";
}

function closeSideBar(){
  document.querySelector("div.sidebar").style.width = "0";
}

function theme(){
  var bodyElement = document.body;
  var element1 = document.querySelector("div.content");
  var element2 = document.querySelectorAll("div.layout");
  var element3 = document.querySelectorAll("div.layout h3");
  if(bodyElement.style.background === "rgb(33, 33, 41)"){
    bodyElement.style.background = "rgb(223, 223, 223)";
    element1.style.color = "black";
    for(let x of element2){
      x.style.borderColor = "black";
    }
    for(let x of element3){
      x.style.borderColor = "black";
    }
  } else {
    bodyElement.style.background = "rgb(33, 33, 41)";
    element1.style.color = "white";
    for(let x of element2){
      x.style.borderColor = "white";
    }
    for(let x of element3){
      x.style.borderColor = "white";
    }
  }
}

function rangeRed(value){
  var x = document.querySelector("input.input-red");
  x.value = value;
  redValue = value;
}

function firstRangeRed(value){
  var x = document.querySelector("input.first-input-red");
  x.value = value;
  firstRedValue = value;
}

function secondRangeRed(value) {
  var x = document.querySelector("input.second-input-red");
  x.value = value;
  secondRedValue = value;
}

function inputRed(value){
  var x = document.querySelector("input.range-red");
  if(value > 255){
    value = 255;
    document.querySelector("input.input-red").value = 255;
  }
  if(value != ""){
    x.value = value;
    redValue = value;
  } else {
    x.value = 0;
    redValue = 0;
  }
}

function firstInputRed(value){
  var x = document.querySelector("input.first-range-red");
  if (value > 255) {
    value = 255;
    document.querySelector("input.first-input-red").value = 255;
  }
  if(value != ""){
    x.value = value;
    firstRedValue = value;
  } else {
    x.value = 0;
    firstRedValue = 0;
  }
}

function secondInputRed(value) {
  var x = document.querySelector("input.second-range-red");
  if (value > 255) {
    value = 255;
    document.querySelector("input.second-input-red").value = 255;
  }
  if (value != "") {
    x.value = value;
    secondRedValue = value;
  } else {
    x.value = 0;
    secondRedValue = 0;
  }
}

function rangeGreen(value){
  var x = document.querySelector("input.input-green");
  x.value = value;
  greenValue = value;
}

function firstRangeGreen(value){
  var x = document.querySelector("input.first-input-green");
  x.value = value;
  firstGreenValue = value;
}

function secondRangeGreen(value) {
  var x = document.querySelector("input.second-input-green");
  x.value = value;
  secondGreenValue = value;
}

function inputGreen(value){
  var x = document.querySelector("input.range-green");
  if (value > 255) {
    value = 255;
    document.querySelector("input.input-green").value = 255;
  }
  if(value != ""){
    x.value = value;
    greenValue = value;
  } else {
    x.value = 0;
    greenValue = 0;
  }
}

function firstInputGreen(value){
  var x = document.querySelector("input.first-range-green");
  if (value > 255) {
    value = 255;
    document.querySelector("input.first-input-green").value = 255;
  }
  if(value != ""){
    x.value = value;
    firstGreenValue = value;
  } else {
    x.value = 0;
    firstGreenValue = 0;
  }
}

function secondInputGreen(value) {
  var x = document.querySelector("input.second-range-green");
  if (value > 255) {
    value = 255;
    document.querySelector("input.second-input-green").value = 255;
  }
  if (value != "") {
    x.value = value;
    secondGreenValue = value;
  } else {
    x.value = 0;
    secondGreenValue = 0;
  }
}

function rangeBlue(value) {
  var x = document.querySelector("input.input-blue");
  x.value = value;
  blueValue = value;
}

function firstRangeBlue(value) {
  var x = document.querySelector("input.first-input-blue");
  x.value = value;
  firstBlueValue = value;
}

function secondRangeBlue(value) {
  var x = document.querySelector("input.second-input-blue");
  x.value = value;
  secondBlueValue = value;
}

function inputBlue(value) {
  var x = document.querySelector("input.range-blue");
  if(value > 255) {
    value = 255;
    document.querySelector("input.input-blue").value = 255;
  }
  if (value != "") {
    x.value = value;
    blueValue = value;
  } else {
    x.value = 0;
    blueValue = 0;
  }
}

function firstInputBlue(value) {
  var x = document.querySelector("input.first-range-blue");
  if (value > 255) {
    value = 255;
    document.querySelector("input.first-input-blue").value = 255;
  }
  if (value != "") {
    x.value = value;
    firstBlueValue = value;
  } else {
    x.value = 0;
    firstBlueValue = 0;
  }
}

function secondInputBlue(value) {
  var x = document.querySelector("input.second-range-blue");
  if (value > 255) {
    value = 255;
    document.querySelector("input.second-input-blue").value = 255;
  }
  if (value != "") {
    x.value = value;
    secondBlueValue = value;
  } else {
    x.value = 0;
    secondBlueValue = 0;
  }
}

function changeColor(){
  var element = document.querySelector("div.color-box");
  var rgbColor = document.querySelector("h3.rgb-color");
  var hexColor = document.querySelector("h3.hex-color");
  var vec3Color = document.querySelector("h3.vec3-color");
  const bgColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  const zeroFill = n => {
    return ('0' + n).slice(-2);
  }
  element.style.background = bgColor;
  const hexValue = `#${zeroFill(parseInt(redValue).toString(16).toUpperCase())}${zeroFill(parseInt(greenValue).toString(16).toUpperCase())}${zeroFill(parseInt(blueValue).toString(16).toUpperCase())}`;
  const vec3Value = `vec3(${(parseFloat(redValue)/255.0).toPrecision(3)}, ${(parseFloat(greenValue)/255.0).toPrecision(3)}, ${(parseFloat(blueValue)/255.0).toPrecision(3)})`;
  rgbColor.innerHTML = "RGB Color Value: " + bgColor;
  hexColor.innerHTML = "HEX Color Value: " + hexValue;
  vec3Color.innerHTML = "vec3 Color Value: " + vec3Value;
}

function changeGradient() {
  var element = document.querySelector("div.gradient-box");
  var gradientCodeRGB = document.querySelector("h3.gradient-code-rgb");
  var gradientCodeHEX = document.querySelector("h3.gradient-code-hex");
  var direction = document.querySelector("select.option");
  let firstColor = `rgb(${firstRedValue}, ${firstGreenValue}, ${firstBlueValue})`;
  let secondColor = `rgb(${secondRedValue}, ${secondGreenValue}, ${secondBlueValue})`;
  const bgColor = `linear-gradient(${direction.value}, ${firstColor}, ${secondColor})`;
  element.style.background = bgColor;
  gradientCodeRGB.innerHTML = "HTML Code (RGB): " + bgColor;
  const zeroFill = n => {
    return ('0' + n).slice(-2);
  }
  firstColor = `#${zeroFill(parseInt(firstRedValue).toString(16).toUpperCase())}${zeroFill(parseInt(firstGreenValue).toString(16).toUpperCase())}${zeroFill(parseInt(firstBlueValue).toString(16).toUpperCase())}`;
  secondColor = `#${zeroFill(parseInt(secondRedValue).toString(16).toUpperCase())}${zeroFill(parseInt(secondGreenValue).toString(16).toUpperCase())}${zeroFill(parseInt(secondBlueValue).toString(16).toUpperCase())}`;
  const hexColor = `linear-gradient(${direction.value}, ${firstColor}, ${secondColor})`;
  gradientCodeHEX.innerHTML = "HTML Code (HEX): " + hexColor;
}
