// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

let DolphinsAvg = (96 + 108 + 89) / 3;
let KoalasAvg = (88 + 91 + 110) / 3;
let TheWinner;
console.log(`avg of Dolphins: ${DolphinsAvg}`);
console.log(`avg of Kolas: ${KoalasAvg}`);
if (DolphinsAvg > KoalasAvg) {
    TheWinner = DolphinsAvg;
    console.log(` The Winner Is Dolphins ${TheWinner}`);

} else if (DolphinsAvg < KoalasAvg) {
    TheWinner = KoalasAvg;
    console.log(` The Winner Is Koalas ${TheWinner}`);

} else {
    console.log(`Draw : Dolphins Score--> ${DolphinsAvg} and Kolas Score-->${KoalasAvg}`);

}

console.log();

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123


DolphinsAvg = (97 + 112 + 101) / 3;
KoalasAvg = (109 + 95 + 123) / 3;
console.log(`avg of Dolphins: ${DolphinsAvg}`);
console.log(`avg of Kolas: ${KoalasAvg}`);
if(DolphinsAvg > KoalasAvg && DolphinsAvg >= 100){
    TheWinner = DolphinsAvg;
    console.log(` The Winner Is Dolphins ${TheWinner}`);

}else if( DolphinsAvg < KoalasAvg && KoalasAvg >= 100){
    TheWinner = KoalasAvg;
    console.log(` The Winner Is Koalas ${TheWinner}`);

}else{
    console.log(`Draw : Dolphins Score--> ${DolphinsAvg} and Kolas Score-->${KoalasAvg}`);

}

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

console.log();
DolphinsAvg = (97 + 112 + 101) / 3;
KoalasAvg = (109 + 95 + 109) / 3;
console.log(`avg of Dolphins: ${DolphinsAvg}`);
console.log(`avg of Kolas: ${KoalasAvg}`);
if(DolphinsAvg > KoalasAvg && DolphinsAvg >= 100){
    TheWinner = DolphinsAvg;
    console.log(` The Winner Is Dolphins ${TheWinner}`);

}else if( DolphinsAvg < KoalasAvg && KoalasAvg >= 100){
    TheWinner = KoalasAvg;
    console.log(` The Winner Is Koalas ${TheWinner}`);

}else if(DolphinsAvg === KoalasAvg && DolphinsAvg >= 100 && KoalasAvg >= 100){
    console.log(`Draw : Dolphins Score--> ${DolphinsAvg} and Kolas Score-->${KoalasAvg}`);

}else{
    console.log("BOOM****** NO one WON The GAME *******")
}