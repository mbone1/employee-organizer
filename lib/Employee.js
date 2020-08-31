class Employee {
    constructor(name, id, email) {
        if (typeof name === "object") throw new Error("bingo bango bongo");
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return ("Employee");
    }
}

module.exports = Employee;



// test("getRole() should return \"Employee\"", () => {
//     const testValue = "Employee";
//     const e = new Employee("Alice", 1, "test@test.com");
//     expect(e.getRole()).toBe(testValue);
// });



//tucker recommends
//create github repo first
//move the code to the repo
//run the install
//inquirer and jest needed
//start with the employee class
//all the other classes EXTEND the employee class
//get tests working
//classes to make sure tests pass
//then move to inquirer portion
//then inquirer portion
//then creation of html file
//
//html renderer ----