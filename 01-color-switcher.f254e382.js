!function(){var t=null,e={buttonStart:document.querySelector("[data-start]"),buttonStop:document.querySelector("[data-stop]"),body:document.querySelector("body")};function o(){e.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}e.buttonStart.addEventListener("click",(function(){t=setInterval(o,1e3),e.buttonStart.setAttribute("disabled","")})),e.buttonStop.addEventListener("click",(function(){clearInterval(t),e.buttonStart.removeAttribute("disabled","")}))}();
//# sourceMappingURL=01-color-switcher.f254e382.js.map