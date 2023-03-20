document.addEventListener("DOMContentLoaded", function () {
    const projectWidgets = document.querySelectorAll(".project-widget");
  
    projectWidgets.forEach((widget) => {
      widget.addEventListener("mouseover", function () {
        this.querySelector(".widget-front").style.transform = "rotateY(180deg)";
        this.querySelector(".widget-back").style.transform = "rotateY(360deg)";
      });
 
      widget.addEventListener("mouseout", function () {
        this.querySelector(".widget-front").style.transform = "rotateY(0)";
        this.querySelector(".widget-back").style.transform = "rotateY(180deg)";
      });
    });
  });


  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      const headerHeight = document.querySelector("header").offsetHeight;
      const yOffset = -headerHeight;
  
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
  document.getElementById("scrollToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  //Pop-up Window Marketing App -----------------------------------------------------------// 

// Get the modal
var modal = document.getElementById("mySkiModal");

// Get the button that opens the modal
var btn = document.getElementById("moreInfoBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementById("closeBTNM");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
 
};
//Pop-up Window MyTracker App ---------------------------------------------------------------//


// Get the modal
var modal = document.getElementById("myTrackModal");

// Get the button that opens the modal
var btn = document.getElementById("moreInfoBtn4");

// Get the <span> element that closes the modal
var closeBtn = document.getElementById("closeBTNM3");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
};










  

 //Pop-up Window MyNotes App   --------------------------------------------------------------// 

 // Get the modal
var modal2 = document.getElementById("myNotesModal");

// Get the button that opens the modal
var btn2 = document.getElementById("moreInfoBtn2");

// Get the <span> element that closes the modal
var closeBtn = document.getElementById("closeBTNM2");

// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal2.style.display = "none";
};



// Initialize the carousel
var carousel = document.querySelector('.carousel');
var cellCount = 4;
var selectedIndex = 0;

function rotateCarousel() {
  var angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
}

// Previous button
document.querySelector('.prev').addEventListener('click', function() {
  selectedIndex--;
  rotateCarousel();
});

// Next button
document.querySelector('.next').addEventListener('click', function() {
  selectedIndex++;
  rotateCarousel();
});

// Rotate the carousel on load
rotateCarousel();
