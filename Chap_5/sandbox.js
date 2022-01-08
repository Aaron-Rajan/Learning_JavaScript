let player = {
    name : "Ace",
    rank : 5,
    email : "aaronmraj@gmail.com",
    kd : 1.5,
    location : "Canada",
    friends : ["Jbj", "mataid", "curly"],
    logFriends() {
        console.log(`${this.name} has ${this.friends.length} friends:`);
        this.friends.forEach( friend => {
            console.log(friend);
        });
    },
    rankUp() {
        this.rank ++;
    },
    gift() {
        const random = Math.round(Math.random() * 100);
        // console.log(random);
        if (random <= 25) {
            this.rank += 1;
        }
        else if (random > 25 && random <= 75) {
            this.rank += 3;
        }
        else {
            this.rank += 5;
        }
        console.log(`Your rank has increased to ${this.rank}`);
    }
}

console.log(`Player is of type ${typeof player}`);
console.log(player);

console.log(`The rank of ${player.name} is ${player.rank}`);

let identifier = "name";
player[identifier] = "Ace1205";
console.log(`${player[identifier]} with a KD of ${player.kd}`);

player.logFriends();
player.rankUp();
console.log(player.rank);

player.gift();