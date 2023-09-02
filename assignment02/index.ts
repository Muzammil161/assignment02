,10 +3,9 @@ document.body.style.backgroundColor = 'pink';
/*Question 1st*/
//programm to add first n even numbers
let sum = 0;
let even = 2;
const sumEvens = (n) => {
    for (let index = 1; index <= n; index++) {
        sum = sum + (even * index);
        sum = sum + (2 * index);
    }
    return sum;
};
  3 changes: 1 addition & 2 deletions3  
index.ts
@@ -4,10 +4,9 @@ document.body.style.backgroundColor = 'pink'
/*Question 1st*/
//programm to add first n even numbers
let sum = 0
let even = 2
const sumEvens = (n: number): number => {
   for (let index = 1; index <= n; index++) {
       sum = sum+(even*index)
       sum = sum+(2*index)
   }
   return sum
}

