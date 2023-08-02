export{}

function sigma2N(n: number): number {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
}

let num = 100;
const sigma100 = sigma2N(num);
num = 150;
const sigma150 = sigma2N(num);
num = 200;
const sigma200 = sigma2N(num); 

const total = sigma100 + sigma150 + sigma200;
console.log(`それぞれの足し算結果: ${total}`);