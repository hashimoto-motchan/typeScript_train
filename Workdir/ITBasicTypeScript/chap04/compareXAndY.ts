export{}

const X = Math.round(Math.random() * 10);
const Y = Math.round(Math.random()  * 10);
//一個スペースを開けてもできる
console.log(`Xは${X}、Yは${Y}`);
if (X == Y){
    console.log(`同じ！`);
} else {
    console.log(`違う！`);
}