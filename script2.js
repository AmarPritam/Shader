let hue = document.getElementById('hue');
const paletteContainer = document.querySelector(".palette-container");

hue.addEventListener('input', updateColor);

paletteContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("copy-btn")) {
    const hexValue = e.target.previousElementSibling.textContent;

    navigator.clipboard
      .writeText(hexValue)
      .then(() => showCopySuccess(e.target))
      .catch((err) => console.log(err));
  } else if (e.target.classList.contains("color")) {
    const hexValue = e.target.nextElementSibling.querySelector(".hex-value").textContent;
    navigator.clipboard
      .writeText(hexValue)
      .then(() => showCopySuccess(e.target.nextElementSibling.querySelector(".copy-btn")))
      .catch((err) => console.log(err));
  }
});

function showCopySuccess(element) {
  element.classList.remove("far", "fa-copy");
  element.classList.add("fas", "fa-check");

  element.style.color = "#48bb78";

  setTimeout(() => {
    element.classList.remove("fas", "fa-check");
    element.classList.add("far", "fa-copy");
    element.style.color = "";
  }, 1500);
}



function updateColor() {
  hueValue = document.getElementById('hue').value;
  let color1 = document.getElementById('color1');
  let color2 = document.getElementById('color2');
  let color3 = document.getElementById('color3');
  let color4 = document.getElementById('color4');
  let color5 = document.getElementById('color5');
  
  let color6 = document.getElementById('color6');
  let color7 = document.getElementById('color7');
  let color8 = document.getElementById('color8');
  let color9 = document.getElementById('color9');
  let color10 = document.getElementById('color10');
  
  color1.style.cssText = `background: hsl(${hueValue}, 100%, 90%)`;
  color2.style.cssText = `background: hsl(${hueValue}, 100%, 80%)`;
  color3.style.cssText = `background: hsl(${hueValue}, 100%, 70%)`;
  color4.style.cssText = `background: hsl(${hueValue}, 100%, 60%)`;
  color5.style.cssText = `background: hsl(${hueValue}, 100%, 50%)`;
  
  color6.style.cssText = `background: hsl(${hueValue}, 100%, 50%)`;
  color7.style.cssText = `background: hsl(${hueValue}, 100%, 40%)`;
  color8.style.cssText = `background: hsl(${hueValue}, 100%, 30%)`;
  color9.style.cssText = `background: hsl(${hueValue}, 100%, 20%)`;
  color10.style.cssText = `background: hsl(${hueValue}, 100%, 10%)`;
  
  
  let hex1 = document.getElementById('hex1');
  let hex2 = document.getElementById('hex2');
  let hex3 = document.getElementById('hex3');
  let hex4 = document.getElementById('hex4');
  let hex5 = document.getElementById('hex5');
  let hex6 = document.getElementById('hex6');
  let hex7 = document.getElementById('hex7');
  let hex8 = document.getElementById('hex8');
  let hex9 = document.getElementById('hex9');
  let hex10 = document.getElementById('hex10');
  
  
  hex1.innerHTML = `hsl(${hueValue}, 100%, 90%)`;
  hex2.innerHTML = `hsl(${hueValue}, 100%, 80%)`;
  hex3.innerHTML = `hsl(${hueValue}, 100%, 70%)`;
  hex4.innerHTML = `hsl(${hueValue}, 100%, 60%)`;
  hex5.innerHTML = `hsl(${hueValue}, 100%, 50%)`;
  hex6.innerHTML = `hsl(${hueValue}, 100%, 50%)`;
  hex7.innerHTML = `hsl(${hueValue}, 100%, 40%)`;
  hex8.innerHTML = `hsl(${hueValue}, 100%, 30%)`;
  hex9.innerHTML = `hsl(${hueValue}, 100%, 20%)`;
  hex10.innerHTML = `hsl(${hueValue}, 100%, 10%)`;
  
  
  const root = document.querySelector(':root');
  root.style.setProperty(`--primary`, `hsl(${hueValue}, 100%, 80%)`);
  root.style.setProperty(`--secondary`, `hsl(${hueValue}, 100%, 20%)`);
  root.style.setProperty(`--text`, `hsl(${hueValue}, 100%, 10%)`)
}

updateColor();