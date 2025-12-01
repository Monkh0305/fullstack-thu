function createLog(message) {
    const now = new Date();
    const timestamp = now.toISOString('th-TH');

    const everntId = Math.random().toString(16).substring(2, 10).toUpperCase();

    const logMessage = message.toUpperCase();

    return `[${timestamp}] [EVENT ID: ${everntId}] ${logMessage}`;
}
const log = createLog("User login successful");
console.log(log);