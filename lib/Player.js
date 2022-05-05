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

module.exports = Player;