console.log("Window loaded");

// Objects

const hero = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    isAlive: true,
    attack(target) {
        let ranNum = Math.random();
        console.log("Accuracy threshold is ${ranNum}");
        if (ranNum < this.accuracy) {
            console.log("It's a direct hit! Well done Capitan!");
            target.hull = target.hull - this.firepower;
            console.log("Alien has ${target.hull} hull points left.");
            if (target.hull <= 0) {
                target.isAlive = false;
                console.log("Alien ship is destroyed!");

            }
        } else {
            console.log("You missed!");
        }
    }
}
const alien = {
    hull: Math.round((Math.random() * (6 - 3)) + 3),
    firepower: Math.round((Math.random() * (4 - 2)) + 2),
    accuracy: (Math.random() * (.8 - .6)) + .6, //for later figure out a way to make it to the hundredth?
    isAlive: true,
    attack(target) {
        let ranNum = Math.random();
        console.log("Accuracy threshold is ${ranNum}");
        if (ranNum < this.accuracy) {
            console.log("You've been hit!");
            target.hull = target.hull - this.firepower;
            console.log("Hero has ${target.hull} hull points left.");
            if (target.hull <= 0) {
                target.isAlive = false;
                console.log("You have been destroyed!");

            }
        } else {
            console.log("You dodged the attack!");
        }
    }
}
const battle = (player, computer) => {
    while (player.isAlive && computer.isAlive) {
        player.attack(computer);
        if (computer.isAlive) {
            computer.attack(player);
        }
    }
}


