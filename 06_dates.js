const loginDate = Date().split(' ');
console.log(loginDate);

const loginDateObject = {
    day: loginDate[0],      // e.g., "Mon"
    month: loginDate[1],    // e.g., "Oct"
    date: loginDate[2],     // e.g., "23"
    time: loginDate[4],     // e.g., "14:55:02"
    year: loginDate[3],     // e.g., "2023"
    timezone: loginDate[5]  // e.g., "GMT+0000"
};

console.log(loginDateObject);

const someDate = new Date("2021-01-14"); // Month in js starts with 0;
console.log(someDate.toDateString());
let da = Date.now();

console.log((da/1000)/3600);

const sDate = new Date();
console.log(sDate.getFullYear());

console.log(sDate.toLocaleString('dEFAULT' ,{
    weekday : "long",
}))

