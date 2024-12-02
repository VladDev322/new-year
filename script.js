let animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

let btn = document.querySelector(".bubbly-button");
btn.addEventListener('click', animateButton, false);


test = ["Желаю счастья", "Желаю тото"]
