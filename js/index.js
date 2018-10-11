function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {color += letters[Math.floor(Math.random() * 16)];}

  document.querySelector("body").style.backgroundColor = color;
  document.querySelector("p").innerHTML = color;
}

var btn = document.querySelector("button");
btn.onclick = getRandomColor;
