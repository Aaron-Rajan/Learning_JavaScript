const para = document.querySelector("p");
console.log(para);

const para2 = document.querySelector(".edit");
console.log(para2);

const paras = document.querySelectorAll("p");
console.log(`The paragraph tags on this document are:`);
paras.forEach(para => {
    console.log(para);
});

paras.forEach(para => {
    if (para.innerText.includes("Lorem")) {
        para.innerText = "Edited text";
        console.log("Paragraph tag has been updated");
    }
});

const content = document.querySelector("div");
const temp = content.innerHTML;
content.innerHTML = `<h2>Paragraph Tags</h2>`;
content.innerHTML += temp;

const link = document.querySelector("a");
console.log(link.getAttribute("href"));

link.setAttribute("style", "color:red; display:block; text-align:center;");

const title = document.querySelector("h1");
title.style.color = "crimson";
title.style.margin = "50px";
title.style.textAlign = "center";

const trials = document.querySelectorAll("body > div.ex > p");

trials.forEach(trial => {
    if (trial.innerText.includes("error")) {
        trial.classList.add("error");
    }
    else if (trial.innerText.includes("success")) {
        trial.classList.add("success");
    }
    else {
        trial.setAttribute("style", "border: black dotted 2px; text-align:center");
    }
});