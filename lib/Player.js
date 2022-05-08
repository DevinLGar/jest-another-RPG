const Potion = require('../lib/Potion');
const Character = require('./Character');

class Player extends Character {
    constructor(name = '') {
        super(name);


        this.inventory = [new Potion('health'), new Potion()];
    }

    /* Returning an object with the player's stats. */
    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    }

    /* Returning the inventory of the player. */
    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    }

    /* Adding a potion to the player's inventory. */
    addPotion(potion) {
        this.inventory.push(Potion);
    }

    /* This is a method that is used to remove a potion from the player's inventory and then increase the
    player's stats based on the potion's name. */
    usePotion(index) {
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
    }
}

module.exports = Player;