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
        graduated: false,
        DOB: 2008,
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