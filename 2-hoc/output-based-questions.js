const students = [
  {
    name: "shubham",
    age: 24,
    marks: 80,
  },
  {
    name: "rahul",
    age: 22,
    marks: 40,
  },
  {
    name: "rohit",
    age: 20,
    marks: 56,
  },
  {
    name: "shivansh",
    age: 30,
    marks: 61,
  },
];

// q1. Return only name of students in capital

// M1
// let names = [];
// for (let i = 0; i < students.length; i++) {
//   names.push(students[i].name.toUpperCase());
// }
// console.log(names);

// M2

// const names = students.map((stu) => stu.name.toUpperCase());
// console.log(names);

// Q2. Return only data of those who scored more than 60 marks

// const filteredData = students.filter((stu) => {
//   return stu.marks > 60;
// });

// console.log(filteredData);

// Q3 . Return only data of students who scored less than 60 but age less than 25

// const filteredData = students.filter((stu) => stu.age < 24 && stu.marks < 60);
// console.log(filteredData);

// Q5 . Sum of marks of all students

// const sumMarks = students.reduce((acc, curr) => {
//   return acc + curr.marks;
// }, 0);

// console.log(sumMarks);

// Q6. Return names of only those students who scored more than 60

// const studentsWithMoreThan60Marks = students
//   .filter((stu) => stu.marks > 60)
//   .map((stu) => stu.name);

// console.log(studentsWithMoreThan60Marks);

// Q7. Return total marks of students with marks greator than 60 after 20 marks has been added to those who scored less than 60

// const totalMarks = students
//   .map((stu) => {
//     if (stu.marks < 60) {
//       stu.marks += 20;
//     }
//     return stu;
//   })
//   .filter((stu) => stu.marks > 60)
//   .reduce((acc, curr) => {
//     return acc + curr.marks;
//   }, 0);

// console.log(totalMarks);
