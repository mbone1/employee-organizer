// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}
module.exports = Intern;



// test("getRole() should return \"Intern\"", () => {
//   const testValue = "Intern";
//   const e = new Intern("Foo", 1, "test@test.com", "UCLA");
//   expect(e.getRole()).toBe(testValue);
// });

// test("Can get school via getSchool()", () => {
//   const testValue = "UCLA";
//   const e = new Intern("Foo", 1, "test@test.com", testValue);
//   expect(e.getSchool()).toBe(testValue);
// });