const button=document.querySelector("button");
const score=document.querySelector("h2");
button.addEventListener("click",updateDiceRoll);
function updateDiceRoll(){
  let x = Math.floor(Math.random()*6)+1;
   let y = Math.floor(Math.random()*6)+1;
   let z = x+y;
  score.textContent=`Current Value: ${z}`;
   
}
