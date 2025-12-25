let values1 = ['Apple', 1, false];
let values2 = ['frie', 2, true, 'Apple'];
let values3 = ['Mars', 9, 'Apple'];
let result = [];

values1.forEach(item1 => {
    if (values2.includes(item1) && values3.includes(item1)) {
        result.push(item1);
    }
});
console.log(result);
