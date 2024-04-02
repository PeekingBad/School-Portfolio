const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;


  let iteration = 0;
  const h1 = document.querySelector("h1");
  const text = h1.innerText;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    h1.innerText = text
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return text[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= text.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);

// ======================== H1 animatie ========================================= //

window.addEventListener("scroll", function() {
  var backToTopButton = document.getElementById("back-to-top-btn");
  if (window.pageYOffset > 100) {
    setTimeout(function() {
      backToTopButton.classList.add("show");
    }, 500); 
  } else {
    backToTopButton.classList.remove("show");
  }
});


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

var backToTopButton = document.getElementById("back-to-top-btn");
backToTopButton.addEventListener("click", scrollToTop);


// =========================== Einde scroll to top ====================================== //

// const appear3 = document.querySelector(".appear3");
// const cb3 = function (entries) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("inview");
//       entry.unobserve(entry.target);
//     }
//   });
// };
// const io3 = new IntersectionObserver(cb3);
// io3.observe(appear3);


