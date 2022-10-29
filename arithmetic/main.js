setInterval(function(){
  var x = document.querySelector("h1.logos");
  x.style.color = x.style.color === "yellow" ? "white" : "yellow";
}, 1000);

function sideBar(){
  var element = document.querySelector("div.sidebar");
  element.style.width = element.style.width === "250px" ? "0" : "250px";
}

function closeSideBar(){
  var x = document.querySelector("div.sidebar");
  x.style.width = "0";
}

function theme(){
  var bodyElement = document.body;
  var element1 = document.querySelector("h1.header");
  var element2 = document.querySelector("div.layout");
  var element2_1 = document.querySelectorAll("div.layout h2:first-child");
  var element3 = document.querySelectorAll("div.layout div");
  if(bodyElement.style.background === "rgb(33, 33, 41)"){
    bodyElement.style.background = "rgb(223, 223, 223)";
    element1.style.color = "black";
    element2.style.color = "black";
    for(let x of element2_1){
      x.style.borderColor = "black";
    }
    for(let x of element3){
      x.style.borderColor = "black";
    }
  } else {
    bodyElement.style.background = "rgb(33, 33, 41)";
    element1.style.color = "white";
    element2.style.color = "white";
    for(let x of element2_1){
      x.style.borderColor = "white";
    }
    for(let x of element3){
      x.style.borderColor = "white";
    }
  }
}

function searchBar(){
  var element = document.getElementById("keyword");
  element.style.display = element.style.display === "block" ? "none" : "block";
}

function searchList(){
  var input, filter, layout, txt, i, thistxt, txtVal;
  input = document.getElementById("keyword");
  filter = input.value.toUpperCase();
  layout = document.getElementById("layout");
  txt = layout.getElementsByTagName("div");
  for(i = 0; i < txt.length; i++){
    thistxt = txt[i];
    txtVal = thistxt.textContent || thistxt.innerText;
    if(txtVal.toUpperCase().indexOf(filter) > -1) {
      txt[i].style.display = "";
    } else {
      txt[i].style.display = "none";
    }
  }
}

function addition(){
  let first = document.querySelector("div.addition input.first-num");
  let second = document.querySelector("div.addition input.second-num");
  let result = document.querySelector("div.addition input.result-num");
  if(first.value != "" && second.value != ""){
    result.value = Number(first.value) + Number(second.value);
  } else {
    result.value = "";
  }
}

function substraction(){
  let first = document.querySelector("div.substraction input.first-num");
  let second = document.querySelector("div.substraction input.second-num");
  let result = document.querySelector("div.substraction input.result-num");
  if(first.value != "" && second.value != ""){
    result.value = Number(first.value) - Number(second.value);
  } else {
    result.value = "";
  }
}

function multiplication(){
  let first = document.querySelector("div.multiplication input.first-num");
  let second = document.querySelector("div.multiplication input.second-num");
  let result = document.querySelector("div.multiplication input.result-num");
  if(first.value != "" && second.value != ""){
    result.value = Number(first.value) * Number(second.value);
  } else {
    result.value = "";
  }
}

function division(){
  let first = document.querySelector("div.division input.first-num");
  let second = document.querySelector("div.division input.second-num");
  let result = document.querySelector("div.division input.result-num");
  if(first.value != "" && second.value != ""){
    result.value = Number(first.value) / Number(second.value);
  } else {
    result.value = "";
  }
}

function modulus(){
  let first = document.querySelector("div.modulus input.first-num");
  let second = document.querySelector("div.modulus input.second-num");
  let result = document.querySelector("div.modulus input.result-num");
  if(first.value != "" && second.value != ""){
    result.value = Number(first.value) % Number(second.value);
  } else {
    result.value = "";
  }
}
