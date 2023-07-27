
function sumOfPositiveNumber (arr){
    const findPositiveNumber = arr.filter(item => item >= 0)
    const total = findPositiveNumber.reduce((pre, current) => pre + current, 0)
   return total;
}

const givenArray = sumOfPositiveNumber([2, -5, 10, -3, 7])
console.log(givenArray);