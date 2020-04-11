//Interface Segregation Principle

// Not ISP
// class Animal {
//     constructor(name) {
//         this.name = name
//     }

//     walk() {
//         console.log(`${this.name} can walk`)
//     }

//     swim() {
//         console.log(`${this.name} can swim`)
//     }

//     fly() {
//         console.log(`${this.name} can fly`)
//     }
// }

// class Dog extends Animal {
//     fly() {
//         return null
//     }
// }

// class Eagle extends Animal {
//     swim() {
//         return null
//     }
// }

// class Whale extends Animal {
//     walk() {
//         return null
//     }

//     fly() {
//         return null
//     }
// }

// const dog = new Dog('Bobik')
// dog.walk()
// dog.swim()
// dog.fly()

// const eagle = new Eagle('Eagle')
// eagle.fly()
// eagle.swim()
// eagle.walk()

// const whale = new Whale('Big blue friend')
// whale.walk()
// whale.swim()
// whale.fly()


class Animal {
    constructor(name) {
        this.name = name
    }
}


const walker = {
    walk() {
        console.log(`${this.name} can walk`)
    }
}
const swimmer = {
    swim() {
        console.log(`${this.name} can swim`)
    }
}

const flier = {
    fly() {
        console.log(`${this.name} can fly`)
    }
}


class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, walker, swimmer)
Object.assign(Eagle.prototype, flier, walker)
Object.assign(Whale.prototype, swimmer)


const dog = new Dog('Bobik')
dog.walk()
dog.swim()

const eagle = new Eagle('Eagle')
eagle.fly()
eagle.walk()

const whale = new Whale('Big blue friend')
whale.swim()