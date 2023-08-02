export{}

const year_A = Math.round(Math.random() * 68) + 1950;
console.log(year_A);
const year_B = Math.round(Math.random() * 68) + 1950;
console.log(year_B);

if (year_A >= 1989 && year_B >= 1989 ) {
    console.log(`AさんもBさんも平成生まれ`);
} else if (year_A >= 1989 || year_B >= 1989 ) {
    console.log(`どちらかが平成生まれ`);
} else {
    console.log(`両方とも昭和生まれ`);
}
