let arr = [1,2,3,4,5];

let newarr = arr.splice(1,4);

newarr[0] = 222;

let sarr = [1,2,3,4];
let tarr = [5,6,7,8];

sarr = [...sarr , ...tarr];
sarr = Array.of("chaddi" , "buddy" , tarr)
console.log(sarr);