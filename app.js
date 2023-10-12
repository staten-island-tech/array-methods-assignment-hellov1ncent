const students = [
    {
        firstName: "Vincent",
        lastname: "Lin",
        graduated: false,
        DOB: 2008,
        siblings: ["Ming","Harvey"],
    },
    {
        firstName: "Hao",
        lastname: "Ming",
        graduated: true,
        DOB: 2000,
        siblings: ["Benson","Max"],
    },
    {
        firstName: "Henry",
        lastname: "idk",
        graduated: false,
        DOB: 2006,
        siblings: ["Bonsy","Danny"],
    },
];
//array stores irems and can access items by their index starting at 0

console.log(students[students.firstName]);
//foreach to run function on every item (for loop)
students.forEach((students)=> console.log(students.firstName, students.lastname))
students.forEach((students)=> console.log(students.graduated))
students.forEach((students)=> console.log(students.DOB))
const siblings = students.forEach((students) => students.siblings.forEach((siblings) =>console.log(siblings)));
const graduated = students.filter((students)=> students.graduated === true);
console.log(graduated)
