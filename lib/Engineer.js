// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, github)
    this.github = github

}

module.exports = Engineer;


// const Engineer = require("../lib/Engineer");

// test("Can set GitHUb account via constructor", () => {
//   const testValue = "GitHubUser";
//   const e = new Engineer("Foo", 1, "test@test.com", testValue);
//   expect(e.github).toBe(testValue);
// });

// test("getRole() should return \"Engineer\"", () => {
//   const testValue = "Engineer";
//   const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
//   expect(e.getRole()).toBe(testValue);
// });

// test("Can get GitHub username via getGithub()", () => {
//   const testValue = "GitHubUser";
//   const e = new Engineer("Foo", 1, "test@test.com", testValue);
//   expect(e.getGithub()).toBe(testValue);
// });