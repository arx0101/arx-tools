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

function byte(val){
  var kb = document.getElementById("kilobyte");
  var mb = document.getElementById("megabyte");
  var gb = document.getElementById("gigabyte");
  var tb = document.getElementById("terabyte");
  if(val != ""){
    val = Number(val);
    kb.value = val / Math.pow(1000.0, 1);
    mb.value = val / Math.pow(1000.0, 2);
    gb.value = val / Math.pow(1000.0, 3);
    tb.value = val / Math.pow(1000.0, 4);
  } else {
    kb.value = "";
    mb.value = "";
    gb.value = "";
    tb.value = "";
  }
}

function kilobyte(val){
  var b = document.getElementById("byte");
  var mb = document.getElementById("megabyte");
  var gb = document.getElementById("gigabyte");
  var tb = document.getElementById("terabyte");
  if(val != ""){
    val = Number(val);
    b.value = val * Math.pow(1000.0, 1);
    mb.value = val / Math.pow(1000.0, 1);
    gb.value = val / Math.pow(1000.0, 2);
    tb.value = val / Math.pow(1000.0, 3);
  } else {
    b.value = "";
    mb.value = "";
    gb.value = "";
    tb.value = "";
  }
}

function megabyte(val) {
  var b = document.getElementById("byte");
  var kb = document.getElementById("kilobyte");
  var gb = document.getElementById("gigabyte");
  var tb = document.getElementById("terabyte");
  if (val != "") {
    val = Number(val);
    b.value = val * Math.pow(1000.0, 2);
    kb.value = val * Math.pow(1000.0, 1);
    gb.value = val / Math.pow(1000.0, 1);
    tb.value = val / Math.pow(1000.0, 2);
  } else {
    b.value = "";
    kb.value = "";
    gb.value = "";
    tb.value = "";
  }
}

function gigabyte(val) {
  var b = document.getElementById("byte");
  var kb = document.getElementById("kilobyte");
  var mb = document.getElementById("megabyte");
  var tb = document.getElementById("terabyte");
  if (val != "") {
    val = Number(val);
    b.value = val * Math.pow(1000.0, 3);
    kb.value = val * Math.pow(1000.0, 2);
    mb.value = val * Math.pow(1000.0, 1);
    tb.value = val / Math.pow(1000.0, 1);
  } else {
    b.value = "";
    kb.value = "";
    mb.value = "";
    tb.value = "";
  }
}

function terabyte(val) {
  var b = document.getElementById("byte");
  var kb = document.getElementById("kilobyte");
  var mb = document.getElementById("megabyte");
  var gb = document.getElementById("gigabyte");
  if (val != "") {
    val = Number(val);
    b.value = val * Math.pow(1000.0, 4);
    kb.value = val * Math.pow(1000.0, 3);
    mb.value = val * Math.pow(1000.0, 2);
    gb.value = val * Math.pow(1000.0, 1);
  } else {
    b.value = "";
    kb.value = "";
    mb.value = "";
    gb.value = "";
  }
}
