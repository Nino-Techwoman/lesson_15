
const passWord = "SecurePass2024";
const passWordlength = passWord.length;
const passWordlengthsum = passWordlength >= 10 && passWordlength <= 20;
const firstletterUpper = passWord[0] >= "A" && passWord[0] <= "Z";
const firstletterSmall = passWord[1] >= "a" && passWord[1] <= "z";
const firstnumber = passWord[0] >= "0" && passWord[0] <= "9";
const lastnumber = passWord[passWord.length-1] >= "0" && passWord[passWord.length-1] <= "9";

let strengthScore = 0;

if (passWordlengthsum) strengthScore += 20;
if (firstletterUpper) strengthScore += 20;
if (firstletterSmall) strengthScore += 20;
if (firstnumber) strengthScore += 20;
if (lastnumber) strengthScore += 20;

console.log(`Score is: ${strengthScore}/100`);




























