/*Making a Student Template: Create a blueprint for student information, including their name, age, and the classes 
they're taking, and then fill in this blueprint with an example student.*/
//Creating an interface for student information
interface Student{
    name:String;
    age:number;
    classes:string[]
}

// example for 1 student to store data in given blueprint
let student1 :Student={
    name: 'Sehar',
    age:15,
    classes:['Math','English','Physics']

};
// example for 2 student
let student2 : Student={
    name: 'Zahir',
    age:25,
    classes:['Python','CSS','Java']
};
//log both students data
console.log(`Student 1 data:`,student1);
console.log(`Student 2 data:`,student2);
