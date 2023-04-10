let userName = prompt ("Welcome to Crampton mini golf!  What is your name?");
let gameLength = prompt (`Hi, ${userName} Would you like to play 3 holes or 6 holes of mini golf?`)

if (gameLength === "3") {
    let a = prompt ("How many putts for Hole 1? (par 3)");
    let b = prompt ("How many putts for Hole 2? (par 3)");
    let c = prompt ("How many putts for Hole 3? (par 3)");
    let score = Math.floor(a) + Math.floor(b) + Math.floor(c); 
    let par = score - 9; 
    if (par > 0) {
        console.log (`Nice try, ${userName}... Your total par was: ${par}.`);
    } else if (par < 0) {
        console.log (`Great job, ${userName}! Your total par was: ${par}.`);
    } else if (par === 0) {
        console.log (`Good game, ${userName}.  Your total par was: 0.`);
    }
} else if (gameLength === "6") {
    let a = prompt ("How many putts for Hole 1? (par 3)");
    let b = prompt ("How many putts for Hole 2? (par 3)");
    let c = prompt ("How many putts for Hole 3? (par 3)");
    let d = prompt ("How many putts for Hole 4? (par 3)");
    let e = prompt ("How many putts for Hole 5? (par 3)");
    let f = prompt ("How many putts for Hole 6? (par 3)");
    let score = Math.floor(a) + Math.floor(b) + Math.floor(c) + Math.floor(d) + Math.floor(e) + Math.floor(f);
    let par = score - 18; 
    if (par > 0) {
        console.log (`Nice try, ${userName}... Your total par was: ${par}.`);
    } else if (par < 0) {
        console.log (`Great job, ${userName}! Your total par was: ${par}.`);
    } else if (par === 0) {
        console.log (`Good game, ${userName}.  Your total par was: 0.`);
    }
} else {
    alert ("Please pick a valid number");
}




/*
let par = score - 18; 
console.log (`Great job, ${userName}! Your total par was: ${par} `)
for (let i = 0; i < gameLength; i++) {
    let hole = i +1;
    let answer = prompt (`How many putts for Hole ${hole}? (par 3)`);
    let score = answer += answer;
}

console.log(score);
*/