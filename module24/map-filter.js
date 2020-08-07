const numbers = [2, 4, 5, 7, 8];
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
    
}
console.log(output);

//MAP
function square(element){
    return element * element;
}
const result = numbers.map(square);
console.log(result);

numbers.map(function(element,index, array){
    console.log(element,index, array);
})

const result = numbers.map(x=> x* x);
console.log(result);

// FILTER
const bigger = numbers.filter(x=> x>5);
const bigger = numbers.filter(x=> x<5);
console.log(bigger);

// FIND
const isThere = numbers.find(x => x>5);
console.log(isThere);