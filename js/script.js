function userScroll() {
  const navbar = document.querySelector(".navbar")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-dark")
    } else {
      navbar.classList.remove("bg-dark")
    }
  })
}

document.addEventListener("DOMContentLoaded", userScroll)

// **********************************

/* =======================================================
  * Template Name: BDM DAYBREAK
  * Template URL: https://byramdigitalmedia.com
  * Updated: Jun 19 2025 with Bootstrap
  * Author: BDM
  * License: MIT
  ======================================================== */

let date = new Date().getFullYear()
document.getElementById("year").innerHTML = date
