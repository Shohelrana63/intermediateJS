const students= [
   
       {id: 01, name:"mack"} ,
       {id: 02, name:"timber"} ,
       {id: 03, name:"anaiya"} ,

    
]
// const output = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     output.push(element);
    
// }
// console.log(output);

const names = students.map(s => s.name);
const names = students.map(s => s.id);
console.log(names);

const names = students.filter(s => s.id>1);
console.log(names);

const biggerOne = students.find(s => s.id>1);
console.log(biggerOne);