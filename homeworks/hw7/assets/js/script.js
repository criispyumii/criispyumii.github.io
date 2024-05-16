function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let average = sum / 3;
    return average;
}

function createSentence(num, noun) {
    let strng = "On average, a Berkeley student has " + num + " " + noun + "s!";
    return strng;
}

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}

/*  Assign the return value of getRandomNum 
when max is equal to 20 to the variable x. Do the same for y when max is 10, and z when max is 13. */
x = getRandomNum(20);
y = getRandomNum(10);
z = getRandomNum(13);

avg = averageThreeNumbers(x, y, z);
sentence = createSentence(avg, "cat");
console.log(sentence);