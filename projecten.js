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


window.addEventListener('scroll', function() {
  var backToTopButton = document.getElementById('back-to-top-btn');
  if (window.pageYOffset > window.innerHeight * 0.5) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
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



// ================ einde back to top ================ //

window.addEventListener('scroll', function() {
  var backToTopLink = document.getElementById('back-to-top-link');
  if (window.pageYOffset > window.innerHeight * 1.25) {
    backToTopLink.classList.add('show');
  } else {
    backToTopLink.classList.remove('show');
  }
});

window.addEventListener('load', function() {
  var backToTopLink = document.getElementById('back-to-top-link');
  var previousPage = document.referrer; // Haal de vorige pagina-URL op

  // Controleer of er een vorige pagina is en pas de link aan
  if (previousPage) {
    backToTopLink.href = previousPage;
    backToTopLink.textContent = '< Terug';
  } else {
    backToTopLink.style.display = 'none'; // Verberg de link als er geen vorige pagina is
  }
});

// ============ einde terug naar vorige pagina knop ============ //


