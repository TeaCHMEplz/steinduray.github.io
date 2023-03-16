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