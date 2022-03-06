let i = 0;
let x = Math.random() * (4 - 3) + 3;
let z = Math.random() * (25 - 15) + 15;
var w = window.innerWidth;

if (w > 800) {
  // Large menu
  const buttons = document.querySelectorAll(".btn-asu");
  for (let button of buttons) {
    button.addEventListener("mouseover", function (event) {
      const target = event.target;
      if (i <= x) {
        target.style.transform = "translate(" + (Math.random() * 600 - 350) + "px," + (Math.random() * 600 - 350) + "px)";
        i++;
      } else {
        let cat = document.getElementById("hiddenCat");
        cat.style.visibility = "visible";
        target.style.transform = "translate(0px,0px)";

        alert("Thanks for petting me :) please pet the other cat as well!");
      }
    });
  }
} else {
  // Small menu
  const buttons = document.querySelectorAll(".btn-asu");
  for (let button of buttons) {
    button.addEventListener("click", function (event) {
      const target = event.target;
      if (i <= z) {
        target.style.transform = "translate(" + (Math.random() * 220 - 70) + "px," + (Math.random() * 220 - 70) + "px)";
        i++;
      } else {
        let cat = document.getElementById("hiddenCat");
        cat.style.visibility = "visible";
        target.style.transform = "translate(0px,0px)";

        alert("Thanks for petting me :) please pet the other cat as well!");
      }
    });
  }
}
