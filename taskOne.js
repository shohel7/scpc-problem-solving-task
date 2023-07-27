
function ReverseString(str){
let reverse = ""
for(let i = str.length - 1; i>= 0; i--){
    reverse = reverse + str[i]
    // console.log(str[i]);
   }
 return reverse;
}

let givenString = ReverseString("hello world")
console.log(givenString);
