function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequiree9dd;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequiree9dd=r);var l=r("1GAPJ");function u(t,o){const n=Math.random()>.3;setTimeout((()=>{n?e(l).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`):e(l).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)}),o)}({delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),form:document.querySelector(".form")}).form.addEventListener("submit",(function(e){e.preventDefault();let t=Number(e.target.elements.delay.value),o=1;const n=Number(e.target.elements.step.value),r=Number(e.target.elements.amount.value);for(let e=0;e<r;e++)u(o,t),t+=n,o+=1;console.log(`delay: ${t}, step: ${n}, amount: ${r}, position: ${o}`)}));
//# sourceMappingURL=03-promises.18a5730d.js.map
