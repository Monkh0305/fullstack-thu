const names = ['Justin','Sarah','Chistipher'];

for (let i = 0; i < names.length; i++){
    console.log(names[i])
}

names.forEach(names => {
    console.log(names)
});

names.forEach(myFuntion);

function myFuntion(name){
    console.log(name);
}

for (let name of names){
    console.log(names);
}