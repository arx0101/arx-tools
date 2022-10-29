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
  var element3 = document.querySelectorAll("div.layout a");
  if(bodyElement.style.background === "rgb(33, 33, 41)"){
    bodyElement.style.background = "rgb(223, 223, 223)";
    element1.style.color = "black";
    element2.style.borderColor = "black";
    for(let elem of element3){
      elem.style.color = "black";
      elem.style.borderColor = "black";
    }
  } else {
    bodyElement.style.background = "rgb(33, 33, 41)";
    element1.style.color = "white";
    element2.style.borderColor = "white";
    for(let elem of element3){
      elem.style.color = "white";
      elem.style.borderColor = "white";
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
  txt = layout.getElementsByTagName("a");
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
