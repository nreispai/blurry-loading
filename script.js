const body = document.querySelector("body");
const h1 = document.querySelector("h1");

async function init() {
  for (var i = 1; i <= 100; i++) {
    (function (ind) {
      setTimeout(function () {
        h1.textContent = `${ind}%`;
        body.style.backdropFilter = `blur(${(-12 / 100) * ind + 12}px)`;
        h1.style.opacity = `${1 - (1 / 100) * ind}`;
      }, 30 * ind);
    })(i);
  }
}

init();
