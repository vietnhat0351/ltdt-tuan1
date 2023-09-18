// Coding Challenge #1
console.log(`Coding Challenge #1`);
markMass = 78;
johnMass = 92;
markHeight = 1.69;
johnHeight = 1.95;
markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);
var markHigherBMI = markBMI > johnBMI;
console.log(markBMI);
console.log(johnBMI);
console.log(markHigherBMI);

// Coding Challenge #2
console.log(`Coding Challenge #2`);
if (markHigherBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}
if (markHigherBMI) {
    console.log(`Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI})!`);
} else {
    console.log(`Mark's BMI(${markBMI}) is lower than John's BMI(${johnBMI})!`);
}

// Coding Challenge #3
console.log(`Coding Challenge #3`);
var dolphinsScore = [96, 108, 89];
var koalasScore = [88, 91, 110];
var sumDolphinsScore = 0;
var sumKoalasScore = 0;
for (let i = 0; i < dolphinsScore.length; i++) {
    sumDolphinsScore += dolphinsScore[i];
}
var dolphinsScoreAverage = sumDolphinsScore / dolphinsScore.length;
for (let i = 0; i < koalasScore.length; i++) {
    sumKoalasScore += koalasScore[i];
}
var koalasScoreAverage = sumKoalasScore / koalasScore.length;

console.log(`Average Dolphin score = ${dolphinsScoreAverage}`);
console.log(`Average Koala score = ${koalasScoreAverage}`)

if (dolphinsScoreAverage > koalasScoreAverage) {
    console.log(`Dolphins win`);
} else if (dolphinsScoreAverage < koalasScoreAverage) {
    console.log(`Koala win`)
} else {
    console.log(`draw`)
}

// Coding Challenge #4
console.log(`Coding Challenge #4`);
function tip(billValue) {
    return billValue > 50 && billValue < 300 ? billValue * 0.15 : billValue * 0.2;
}
console.log(tip(500));

function bill(billValue) {
    return `he bill was ${billValue} the tip was ${tip(billValue)}, and the total value ${billValue + tip(billValue)}`;
}
console.log(bill(275));

// Coding Challenge #5
console.log(`Coding Challenge #5`);
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// 2. Use the function to calculate the average for both teams
dolphinsScoreAverage = calcAverage(44, 23, 71);
koalasScoreAverage = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
}

checkWinner(dolphinsScoreAverage, koalasScoreAverage);

// Coding Challenge #6
console.log(`Coding Challenge #6`);
function calcTip(billValue) {
    return billValue > 50 && billValue < 300 ? billValue * 0.15 : billValue * 0.2;
}

let bills = [125, 555, 44];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + calcTip(bills[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);

// Coding Challenge #7
console.log(`Coding Challenge #7`);
class Person {
    constructor(fullName, mass, height) {
        this.fullName = fullName;
        this.mass = mass;
        this.height = height;
    }

    calcBMI() {
        let BMI = this.mass / this.height**2;
        this.BMI = BMI;
        return this.BMI;
    }
}

const mark = new Person("Mark", 78, 1.69);
const john = new Person("John", 92, 1.95);

if(mark.calcBMI() > john.calcBMI()) {
    console.log(`Mark's BMI(${mark.BMI}) is higher than John's BMI(${john.BMI})`);
} else {
    console.log(`John's BMI(${john.BMI}) is higher than Mark's BMI(${mark.BMI})`);
}
// Coding Challenge #8
console.log(`Coding Challenge #8`);
bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86 ,52]

for(let i = 0; i < 10; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + calcTip(bills[i]);
}

console.log(`${bills}`)
console.log(`${tips}`)
console.log(`${totals}`)

// 4. Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array.

function calcAverage1(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]; 
    }
    return sum / arr.length;
}

console.log(calcAverage1(totals));

// Coding Challenge #9
console.log(`Coding Challenge #9`);
function printForecast(arr) {
    let s = ``;
    for(let i = 0; i < arr.length; i++) {
        s+=`...${arr[i]}oC in ${i+1} days`;
    }
    console.log(s);
}

let temperatures1 = [17, 21, 23];
let temperatures2 = [12, 5, -5, 0, 4];
printForecast(temperatures1);
printForecast(temperatures2);