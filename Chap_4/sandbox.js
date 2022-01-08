// function avg(a,b) {
//     return (a+b)/2;
// }
let avg = (a,b) => (a+b)/2;

let result = avg(-3,3);
console.log(result);

if (result === NaN) {
    console.log("Invalid inputs");
}
else if (result < 0 && result > -100) {
    console.log("Average is negative, but not large");
}
else if (result < -100) {
    console.log("Average is negative and large");
}
else if (result > 0 && result < 100) {
    console.log("Average is positive, but not large");
}
else if (result > 100) {
    console.log("Average is positive and large");
}
else {
    console.log("Average is 0");
}

let people = ["Aaron", "Abe", "Tim", "Faiyaz", "Yohann"];

const ul = document.querySelector(".people");

people.forEach((person, index) => {
    console.log(`Hey ${person} at index ${index}`);
});

let html = ``;

people.forEach(person => {
    html += `<li style="color: blue">${person}</li>`;
});
console.log(html);

ul.innerHTML = html;