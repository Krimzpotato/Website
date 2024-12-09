document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        document.querySelector('.face').style.opacity = '0';
    }, 2500); // 1000 milliseconds = 1 sec
});
const textElement1 = document.getElementById("link1");
const textElement2 = document.getElementById("link2");
const textElement3 = document.getElementById("link3");
const textElement4 = document.getElementById("link4");
const textElement5 = document.getElementById("link5");
  textElement1.addEventListener("click", () => {
    window.location.href = "https://www.youtube.com";
  });
  textElement2.addEventListener("click", () => {
    window.location.href = "https://www.google.com";
  });
  textElement3.addEventListener("click", () => {
    window.location.href = "https://www.facebook.com";
  });
  textElement4.addEventListener("click", () => {
    window.location.href = "project.html" ;
  });

  textElement.style.cursor = "pointer";
  textElement.style.textDecoration = "none"; 

