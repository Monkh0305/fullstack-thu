const err_status = 200;

if (err_status === 200){
    console.log("OK!")
}else if (err_status === 400){
    console.log("Eror!")
}else{
    console.log("Unknown status")
}

switch (err_status) {
    case 200:
        console.log("OK!")
       break;
    case 400:
        console.log("Eror!")
       break;
    default:
        console.log("Unknown status")
}

const message = (err_status === 200) ?
    'OK!' : 'Eror!';
console.log(message);




