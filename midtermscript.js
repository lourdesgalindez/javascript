let bottomleft = document.querySelector(".bottom-left");
let originalColor = bottomleft.style.backgroundColor;

bottomleft.addEventListener("mouseover", changeColor);
bottomleft.addEventListener("mouseleave", revertColor)
function changeColor () {
  bottomleft.style.backgroundColor = "#909CC2";
}
function revertColor() {
  bottomleft.style.backgroundColor = originalColor;
}
