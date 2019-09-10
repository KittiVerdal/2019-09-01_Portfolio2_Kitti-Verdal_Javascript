var fruit = /** @class */ (function () {
    function fruit(message) {
        this.getFruitName = message;
    }
    fruit.prototype.type = function () {
        return "My favourite fruit is a tasty" + this.getFruitName;
    };
    return fruit;
}());
var friutType = new fruit(" watermelon");
console.log(friutType.type());
// Var variable
// The number change: This is because { does not create a new variable scope.
// The variable exampleOne is the same inside the if block as it is outside the if block.
var exampleOne = 25;
if (true) {
    var exampleOne = 50;
}
console.log(exampleOne + " the vaiable changed"); // 50
//Let variable
//TypeScript (and ES6) introduces the let keyword to allow you to define variables with
//true block scope. That is if you use let instead of var you get a true unique element
//disconnected from what you might have defined outside the scope.
var exampleTwo = 25;
if (true) {
    var exampleTwo_1 = 50;
}
console.log(exampleTwo + " the vaiable did not change"); // 25
//Const variable
//A data item is constant when its value cannot be changed while a program is running.
//So, If a variable has been marked as const, then its value can only be set when the
//variable is defined, and cannot be changed.
var myBirthday = "18-12-1983";
//compile error
//myBirthday = "18-12-1985";
console.log(myBirthday + " I will not be able to change the date later"); // "18-12-1983"
