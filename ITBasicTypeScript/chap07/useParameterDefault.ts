export{}

function showCricumference(radius: number, pi: number = 3.14) {
    const circumference = 2* pi * radius;
    console.log(`半径${radius}の円周の長さ: ${circumference}`);
}

showCricumference(4, 3.142);
showCricumference(8);