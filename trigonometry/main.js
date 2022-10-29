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
  var element1 = document.querySelector("h1.header");
  var element2 = document.querySelector("div.layout");
  if(bodyElement.style.background === "rgb(33, 33, 41)"){
    bodyElement.style.background = "rgb(223, 223, 223)";
    element1.style.color = "black";
    element2.style.color = "black";
    element2.style.borderColor = "black";
  } else {
    bodyElement.style.background = "rgb(33, 33, 41)";
    element1.style.color = "white";
    element2.style.color = "white";
    element2.style.borderColor = "white";
  }
}

var roundNumber = function(number, decimals){
  decimals = decimals || 8;
  return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

var toRadians = function(value){
  return value * (Math.PI / 180);
}

function calculate(){
  var input = document.getElementById("input");
  var option = document.querySelector("select.option");
  let sin = document.getElementById("sin");
  let cos = document.getElementById("cos");
  let tan = document.getElementById("tan");
  let csc = document.getElementById("csc");
  let sec = document.getElementById("sec");
  let cot = document.getElementById("cot");
  switch(option.value){
    case "degrees":
      if(input.value != ""){
      sin.value = roundNumber(Math.sin(toRadians(input.value)));
      cos.value = roundNumber(Math.cos(toRadians(input.value)));
      tan.value = roundNumber(Math.tan(toRadians(input.value)));
      csc.value = roundNumber(1 / sin.value);
      sec.value = roundNumber(1 / cos.value);
      cot.value = roundNumber(1 / tan.value);
    } else {
      sin.value = "";
      cos.value = "";
      tan.value = "";
      csc.value = "";
      sec.value = "";
      cot.value = "";
    }
    break;
    case "radians":
      if(input.value != ""){
      sin.value = roundNumber(Math.sin(input.value));
      cos.value = roundNumber(Math.cos(input.value));
      tan.value = roundNumber(Math.tan(input.value));
      csc.value = roundNumber(1 / sin.value);
      sec.value = roundNumber(1 / cos.value);
      cot.value = roundNumber(1 / tan.value);
    } else {
      sin.value = "";
      cos.value = "";
      tan.value = "";
      csc.value = "";
      sec.value = "";
      cot.value = "";
    }
  }
  
}
