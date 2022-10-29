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

function celcius(val){
  var reamur = document.getElementById("reamur");
  var fahrenheit = document.getElementById("fahrenheit");
  var kelvin = document.getElementById("kelvin");
  if(val != ""){
    val = Number(val);
    reamur.value = 0.8 * val;
    fahrenheit.value = (9.0 / 5.0) * val + 32.0;
    kelvin.value = val + 273.0;
  } else {
    reamur.value = "";
    fahrenheit.value = "";
    kelvin.value = "";
  }
}

function reamur(val){
  var celcius = document.getElementById("celcius");
  var fahrenheit = document.getElementById("fahrenheit");
  var kelvin = document.getElementById("kelvin");
  if(val != ""){
    val = Number(val);
    celcius.value = 1.25 * val;
    fahrenheit.value = (9.0 / 4.0) * val + 32.0;
    kelvin.value = 1.25 * val + 273.0;
  } else {
    celcius.value = "";
    fahrenheit.value = "";
    kelvin.value = "";
  }
}

function fahrenheit(val){
  var celcius = document.getElementById("celcius");
  var reamur = document.getElementById("reamur");
  var kelvin = document.getElementById("kelvin");
  if(val != ""){
    val = Number(val);
    celcius.value = (5.0 / 9.0) * (val - 32.0);
    reamur.value = (4.0 / 9.0) * (val - 32.0);
    kelvin.value = Number(celcius.value) + 273.0;
  } else {
    celcius.value = "";
    reamur.value = "";
    kelvin.value = "";
  }
}

function kelvin(val){
  var celcius = document.getElementById("celcius");
  var reamur = document.getElementById("reamur");
  var fahrenheit = document.getElementById("fahrenheit");
  if(val != ""){
    val = Number(val);
    celcius.value = val - 273.0;
    reamur.value = 0.8 * (val - 273.0);
    fahrenheit.value = (9.0 / 5.0) * Number(celcius.value) + 32.0;
  } else {
    celcius.value = "";
    reamur.value = "";
    fahrenheit.value = "";
  }
}
