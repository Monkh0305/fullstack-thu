function generateTempId() {
    const randomNum = Math.random().toString(36).substring(2, 8);
    return randomNum.toUpperCase();
}
const orderId = generateTempId();
console.log("Generated Order ID: " + orderId);