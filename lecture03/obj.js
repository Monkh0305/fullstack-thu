const book = {
    title: "1984",
    author: "George Orwell",
    isAvailable: true,
    
    checkout: function(){
        this.isAvailable = false;
    },

    checkIn: function(){
        this.isAvailable = true;
    },
};

console.log(`Title: ${book.title}`)
console.log(book.isAvailable);
book.checkout();
console.log(book.isAvailable);
book.checkIn();
console.log(book.isAvailable);