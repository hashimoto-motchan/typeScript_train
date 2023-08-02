export{}

const year = Math.round(Math.random() * 120) + 1901;
console.log(year);

if (year < 1912 ){
    const ImperialEra = year - 1868 + 1;
    console.log(`${year}年は明治${ImperialEra}年です。`);
} else if (year < 1926 ){
    const ImperialEra = year - 1912 + 1;
    console.log(`${year}年は大正${ImperialEra}年です。`);
} else if (year < 1989 ){
    const ImperialEra = year - 1926 + 1;
    console.log(`${year}年は昭和${ImperialEra}年です。`);
} else if (year < 2019 ){
    const ImperialEra = year - 1989 + 1;
    console.log(`${year}年は平成${ImperialEra}年です。`);
} else {
    const ImperialEra = year - 2019 + 1;
    console.log(`${year}年は令和${ImperialEra}年です。`);
}