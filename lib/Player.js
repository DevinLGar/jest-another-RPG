const Potion = require('../lib/Potion');

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];
}

/* Returning an object with the player's stats. */
Player.prototype.getStats = function() {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
}

/* Returning the inventory of the player. */
Player.prototype.getInventory = function() {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};

/* Returning the player's health. */
Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
};

/* This is a method that checks if the player is alive. If the player's health is 0, then the player is
dead. */
Player.prototype.isAlive = function() {
    if(this.health === 0) {
        return false;
    }
    return true;
};

/* Reducing the player's health by the amount of health that is passed in. */
Player.prototype.reduceHealth = function(health) {
    this.health -= health;

    if(this.health < 0) {
        this.health = 0;
    }
}

/* This is a method that is used to get the player's attack value. */
Player.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
}

/* Adding a potion to the player's inventory. */
Player.prototype.addPotion = function() {
    this.inventory.push(Potion);
};

/* This is a method that is used to remove a potion from the player's inventory and then increase the
player's stats based on the potion's name. */
Player.prototype.usePotion = function(index) {
    const potion =this.getInventory().splice(index, 1)[0];

    switch (potion.name) {
        case 'agility':
            this.agility += potion.value;
            break;
        case 'health':
            this.health += potion.value;
            break;
        case 'strength':
            this.strength += potion.value;
            break;
    }
};

module.exports = Player;