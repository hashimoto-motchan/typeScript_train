export{}

const num = Math.round(Math.random() * 100);
console.log(`点数は${num}点です。`);
const rem = num % 2;
const cond = (rem == 0);

if(cond) {
    console.log("偶数");
} else {
    console.log("奇数");
}
console.log("処理終了");

