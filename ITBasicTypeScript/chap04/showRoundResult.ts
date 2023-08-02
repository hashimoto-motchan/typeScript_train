export{}

const score = Math.round(Math.random() * 10);
console.log(`数字は${score}`);
if (score < 5) {
    console.log("四捨五入すると0");
} else {
    console.log("四捨五入すると10");
}