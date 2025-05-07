//1
function greetUser(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greetUser("Alice")); 
console.log(greetUser()); 

//2
user1 ={
    name: "John",
    sayHi: function() {
        return `Hello, ${this.name}!`; //dynamic context of this
    },
}
console.log(user1.sayHi());

user2 ={
    name: "Bob",
    sayHi: () => {
        return `Hello, ${this.name}!`; //static context of this
    },
}
console.log(user2.sayHi());

//3
for (var i = 0; i < 3; i++) {}
console.log("After var loop, i =", i); //var is function scoped

for (let j = 0; j < 3; j++) {}
console.log("After let loop, j =", j);  //let is block scoped
