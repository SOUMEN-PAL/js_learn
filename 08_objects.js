let a = {
    n : 1
}

// const ob = new Object();
// ob = {
//     id: 123,
//     p_name : "xyz",
//     pass : 15392414
// }
// console.log(ob);

//or

let ob = {
    1 : 'a',
    2 : 'b'
}

let oa = {
    3 : 'c',
    4 : 'd'
}

let oc = {...oa , ...ob};
console.log(oc.hasOwnProperty('1dsad'));
