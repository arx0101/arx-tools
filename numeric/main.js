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

function decFunc(val){
  val = Number(val);
  var bin = document.getElementById("bin");
  var oct = document.getElementById("oct");
  var hex = document.getElementById("hex");
  if(val != ""){
    bin.value = val.toString(2);
    oct.value = val.toString(8);
    hex.value = val.toString(16).toUpperCase();
  } else {
    bin.value = "";
    oct.value = "";
    hex.value = "";
  }
}

function binFunc(val){
  var dec = document.getElementById("dec");
  var oct = document.getElementById("oct");
  var hex = document.getElementById("hex");
  if(val != "" && !isNaN(parseInt(val, 2))){
    val = parseInt(val, 2);
    dec.value = val.toString(10);
    oct.value = val.toString(8);
    hex.value = val.toString(16).toUpperCase();
  } else {
    dec.value = "";
    oct.value = "";
    hex.value = "";
  }
}

function octFunc(val){
  var dec = document.getElementById("dec");
  var bin = document.getElementById("bin");
  var hex = document.getElementById("hex");
  if(val != "" && !isNaN(parseInt(val, 8))){
    val = parseInt(val, 8);
    dec.value = val.toString(10);
    bin.value = val.toString(2);
    hex.value = val.toString(16).toUpperCase();
  } else {
    dec.value = "";
    bin.value = "";
    hex.value = "";
  }
}

function hexFunc(val){
  val = val.toLowerCase();
  var dec = document.getElementById("dec");
  var bin = document.getElementById("bin");
  var oct = document.getElementById("oct");
  if(val != "" && !isNaN(parseInt(val, 16))){
    val = parseInt(val, 16);
    dec.value = val.toString(10);
    bin.value = val.toString(2);
    oct.value = val.toString(8);
  } else {
    dec.value = "";
    bin.value = "";
    oct.value = "";
  }
}
