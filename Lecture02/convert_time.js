const regisstrationTime = new Date('2025-06-01T08:50:00');
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone : 'Asia/Bangkok',
};
const formattedDate = regisstrationTime.toLocaleDateString('th-TH', options);
console.log(`Registration Date: ${formattedDate}`);