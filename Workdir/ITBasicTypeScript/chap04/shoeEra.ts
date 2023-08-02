export{}

const year = Math.round(Math.random() * 120) + 1901;
console.log(year);

if (year < 1912 ){
    console.log(`${year}年は明治`);
} else if (year < 1926 ){
    console.log(`${year}年は大正`);
} else if (year < 1989 ){
    console.log(`${year}年は昭和`);
} else if (year < 2019 ){
    console.log(`${year}年は平成`);
} else {
    console.log(`${year}年は令和`);
}