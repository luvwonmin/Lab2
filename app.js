var too = 423;
var lastDigit;
lastDigit = too % 10;
console.log(lastDigit);
var lastTwoDigit, secondDigit;
lastTwoDigit=too%100;
secondDigit=lastTwoDigit/10;
console.log(Math.floor(secondDigit));
var too = 27;
//3. 27 --> 2*7=14
var too2 = 27;
var one,two,vrjver;
one = too / 10;
// 27 / 10 = 2.7 --> ?
two = too2 % 10;
// 27 % 10 = ?
vrjver = Math.floor(one) * two;
console.log(vrjver);
// prompt(); --> Garaas utga oruulah (text)
// +prompt("tailbar") --> Garaas toon utga oruulah
var number = +prompt("Too oruulna uu ");
// alert ("tailbar"); --> Sanamj heseg gargah
alert(number);
// 200second --> 3min 20sec
// 1min = 60sec
var number =+prompt("sekund oruulna uu");
var sec,min;
min = number / 60;
// 200 / 60 = 3.333333 --> ?
sec = number % 60;
// 200 % 60 = 20
alert(Math.floor(min)+"min"+sec+"sec");