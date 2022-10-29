function link( url ) {
  document.location.href = url;
}

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
  var element1 = document.querySelector(".header");
  var element2 = document.querySelector(".layout");
  if(bodyElement.style.background === "rgb(33, 33, 41)"){
    bodyElement.style.background = "rgb(223, 223, 223)";
    element1.style.color = "black";
    element2.style.color = "black";
  } else {
    bodyElement.style.background = "rgb(33, 33, 41)";
    element1.style.color = "white";
    element2.style.color = "white";
  }
}

function searchBar(){
  var element = document.getElementById("keyword");
  element.style.display = element.style.display === "block" ? "none" : "block";
}

function searchList(){
  var input, filter, layout, icon, i, span, txtVal;
  input = document.getElementById("keyword");
  filter = input.value.toUpperCase();
  layout = document.getElementById("layout");
  icon = layout.getElementsByTagName("div");
  for(i = 0; i < icon.length; i++){
    span = icon[i].getElementsByTagName("span")[0];
    txtVal = span.textContent || span.innerText;
    if(txtVal.toUpperCase().indexOf(filter) > -1) {
      icon[i].style.display = "";
    } else {
      icon[i].style.display = "none";
    }
  }
}
