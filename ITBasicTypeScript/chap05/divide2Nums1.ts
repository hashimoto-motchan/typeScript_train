export{}

for (let i = 0; i < 5 ; i++) {
    const num1 = Math.round(Math.random() * 100);
    if(num1 == 0) {
        console.log(`numが0なのでbreak`)
        break;
    }
    for (let i = 0; i < 5 ; i++) {
        const num2 = Math.round(Math.random() * 100);
        console.log(num2 / num1);
    }
}
