let names = ["Aaron", "Aidan", "Areeb", "Sohel", "Bhav"];

for (let i = 0; i < names.length; i++) {
    console.log(`${names[i]} at position ${i}`);
}

i = 0;
while (i<names.length) {
    if (names[i] == "Areeb") {
        console.log(`Areeb is at index ${i}`);
    }
    else if (names[i] == "Sohel") {
        console.log(`Sohel is at index ${i}`);
    }
    else {
        console.log(`Neither Areeb nor Sohel are at index ${i}`);
    }
    i++;
}

let scores = [10, 35, 60, 100, 85, 50];

for (i = 0; i < scores.length; i++) {

    if (scores[i] >= 20 && scores[i] <=40) {
        console.log("Extremely special case");
        continue;
    }

    console.log("Score of ", scores[i]);

    if (scores[i] === 100) {
        console.log("You have found a score of 100!");
        break;
    }
}

const grade = "D";

switch (grade) {
    case "A":
        console.log("Nice work!");
        break;
    case "B":
        console.log("Good effort, but you can do better");
        break;
    default:
        console.log("Damn, you gotta work a lot harder");    
}