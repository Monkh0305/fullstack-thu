const fullName = "Khachonsak Sriubon";
const cleanedName = fullName.trim();
console.log(`Cleaned Name: '${cleanedName}'`);

const nameParts = cleanedName.split(" ");
console.log(`Name Parts:`, nameParts);

const finalParts = nameParts.filter(Boolean);
console.log(`Final Parts:`, finalParts);

const firstname = finalParts[0];
console.log(`สวสัดีครับ คุณ${firstname}`);