export{}

const num = Math.round(Math.random() * 70) + 1950;
// console.log(num);
const year_remainder = num % 4;

if (year_remainder == 0){
    console.log(`${num}年は閏年です。`);
} else {
    console.log(`${num}年は閏年ではありません。`);
}