let input = document.getElementById("input");
let imgbox = document.getElementById("imgbox");
let img = document.getElementById("img");
function generate(){
  
  img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
  
}

 let input1 = document.getElementById("input1");
let file = document.getElementById("file");
function generateText(){
  input1.value= "http(s)://api.qrserver.com/v1/read-qr-code/?fileurl=" + input1.value;
}