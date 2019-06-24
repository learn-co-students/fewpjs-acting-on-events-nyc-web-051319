const dodger = document.querySelector('#dodger')
const background = document.querySelector('#game')
// console.log(dodger);

dodger.style.backgroundColor = "#FFDB58"
background.style.background = "#672A9C"

document.addEventListener("keydown", function(e) {
  console.log(e.key)
  if (e.key === "ArrowLeft") {
    moveDodgerLeft(e)
  }
  if (e.key === 'ArrowRight'){
    moveDodgerRight(e)
  }
})

function moveDodgerLeft(e){
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
   dodger.style.left = `${left - 10}px`;
 }
}

function moveDodgerRight(e){
  let leftNumbers = dodger.style.left.replace('px', '')
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
  dodger.style.left = `${left + 10}px`;
  }
}
