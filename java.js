const me = {
    firstName: "Devin",
    lastName: "Conroy",
    hobbies: ["sleeping", "farting", "gaming"],
    lovesGrammy: true,
    timeToWork: function () {
        console.log("Sit down and focus")
    }
}

me.timeToWork()

const rufusTheDog = {
    age: 4,
    species: "Dalmation",
    bark: function () {
        window.alert("WOOF")
    },
    contentsOfStomache: [],
    eat: function (item) {
        // push eaten items into stomache array
        this.contentsOfStomache.push(item)
    },
    puke: function () {
        rufusTheDog.contentsOfStomache.length = 0
    }
}

rufusTheDog.eat("snacks")
rufusTheDog.eat("a stick")

rufusTheDog.puke()

console.log("this is stomache", rufusTheDog.contentsOfStomache)



// Practice pet sounds

const myDog = {
    name: "Ralphy",
    age: 3,
    species: "Aussie Sheperd",
    nickNames: ["Ralphy", "Ralph-man", "Damnit-Ralph"],
    bark: function () {
        window.alert("Woof")
    },
    favoriteToys: [],
    play: function (toy) {
        if (toy === "ball") {
            this.favoriteToys.push(toy)
        }

    }


}

myDog.bark()
myDog.play("ball")

console.log(myDog.favoriteToys)






const restaurant = {
    name: "Bobs Burgers",
    placeOrder: function (meal) {
        this.orders.push(meal)
    },
    orders: []
}

const chickenComboMeal = {
    sandWichType: "Chicken",
    fries: true,
    drinkSize: "Large"

}

restaurant.placeOrder(chickenComboMeal)
console.log(restaurant.orders)




// Query selectors
