//Warna
const pink = "#fe878d";
const purple = "#6b1f6a";
const cyan = "#017b64";
const grey = "#ababab";

// Styling body (background, font, warna font)
document.body.style.backgroundImage = "url('dark-background.png')";
document.body.style.fontFamily = "'Open Sans', 'Helvetica Neue', sans-serif";
document.body.style.color = grey;

// Styling warna font untuk tag h1, h2, h4
document.querySelector("h1").style.color = pink;
document.querySelector("h2").style.color = "white";
document.querySelectorAll("h4").forEach(e => e.style.color = "white");

// Atur styling #main
const main = document.getElementsByTagName("main")[0];
main.style.width = "75%";
main.style.margin = "50px auto";
main.style.backgroundColor = "#282828";

// Gradient pada #main sebagai hiasan
const gradien = document.querySelector("#gradient");
gradien.style.height = "10px";
gradien.style.backgroundImage = `linear-gradient(to right, ${pink}, ${purple}, ${cyan})`;

// Atur padding #content di dalam #main
document.getElementById("content").style.padding = "20px";



// Styling tag input
const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const iframe = document.querySelector("#iframe");
iframe.style.cssText = `
        width: 100vw;
        height: 100vh;
    `;
window

input.style.width = "300px";
input.style.padding = "5px";

// Styling tag container input
const inputContainer = document.querySelector("#input-container");
inputContainer.style.padding = "20px 0";

// Styling tag container output
const outputContainer = document.querySelector("#output-container");
outputContainer.style.cssText = `
        padding: 5px;
        border: 2px solid ${purple};
        overflow: auto;
    `;

function createHistoryCard(value){
  const e = document.createElement('div');
  e.className = "output-box";
  e.style.cssText = `
      margin: 5px 0;
      padding: 10px;
      background-color: ${cyan};
      border-radius: 5px;
  `;
  e.innerHTML = `<p style='color: white;'><b></b>${value}</p>`;
  outputContainer.appendChild(e);
  input.value = "";
}

submit.addEventListener("click", () => {
    iframe.src = `https://www.youtube.com/embed/${input.value}?controls=controls=2&enablejsapi=1&fs=1&iv_load_policy=3&modestbranding=1&rel=0&playsInline=0&start=0`;
    console.log(document.querySelector(".ytp-title-link").innerText)
    createHistoryCard(`${document.querySelector(".ytp-title-link").innerText} : ${input.value}`);
});
