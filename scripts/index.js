"use strict";function init(){var e=document.querySelector("._menu"),t=document.querySelector(".header__body"),n=document.getElementById("mountain-logo"),s=document.getElementById("mountain-card");e.addEventListener("click",(function(){e.classList.toggle("_close"),null==t||t.classList.toggle("_open"),document.body.classList.toggle("_hidden")})),new IntersectionObserver((function(e){e.forEach((function(e){n.classList.contains("_slideUp")&&n.classList.remove("_slideUp"),e.isIntersecting&&n.classList.add("_slideUp")}))}),{threshold:.3}).observe(s)}document.addEventListener("DOMContentLoaded",init);