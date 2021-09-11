function doubleIt(num){
    return num * 2;
}

const result = doubleIt(5);
// console.log(result);


const doubleIt = num => num * 2;

const result = doubleIt(5);
// console.log(result);

const add = (x, y) => x + y;

const result = add(5, 6);
// console.log(result);


const add = () => 5;

const result = add();
// console.log(result);




const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const total = doMath(10, 7);
// console.log(total);

