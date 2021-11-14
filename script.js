let lista = document.querySelectorAll('.skill-list li');

let time = 2800,
    currentLiIndex = 0,
    max = lista.length;

function nextLi(){

  lista[currentLiIndex].classList.remove('active');
  currentLiIndex++;

  if(currentLiIndex >= max){
    currentLiIndex = 0;
  }

  lista[currentLiIndex].classList.add('active');

}




function start(){
  setInterval(() => {
    nextLi()
  },time );

}

window.addEventListener("load", start);
window.addEventListener("load", function(){
  lista[0].classList.add('active');
});




// for (let i = 0; i < lista.length; i++) {
//   (function (i) {
//     setTimeout(function () {
//       lista[i--].classList.remove('active');
//       lista[i].classList.toggle('active');
//     }, 2500*i);
//   })(i);
// };

