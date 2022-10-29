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
  var element2_1 = document.querySelectorAll("div.layout div");
  if(bodyElement.style.background === "rgb(33, 33, 41)"){
    bodyElement.style.background = "rgb(223, 223, 223)";
    element1.style.color = "black";
    element2.style.color = "black";
    for(let x of element2_1){
      x.style.borderColor = "black";
    }
  } else {
    bodyElement.style.background = "rgb(33, 33, 41)";
    element1.style.color = "white";
    element2.style.color = "white";
    for(let x of element2_1){
      x.style.borderColor = "white";
    }
  }
}

function encryption(text){
  var element = document.getElementById("encrypt-result");
  if(text != ""){
    element.value = CryptoJS.AES.encrypt(text, "ArX0101");
  } else {
    element.value = "";
  }
}

function encryptReset(){
  document.getElementById("encrypt-text").value = "", document.getElementById("encrypt-result").value = "";
}

function decryption(text){
  var element = document.getElementById("decrypt-result");
  if(text != ""){
    element.value = CryptoJS.AES.decrypt(text, "ArX0101").toString(CryptoJS.enc.Utf8);
  } else {
    element.value = "";
  }
}

function decryptReset(){
  document.getElementById("decrypt-text").value = "", document.getElementById("decrypt-result").value = "";
}
