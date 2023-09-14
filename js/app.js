var num = 0;

while(num>=50){
    console.log("num is " + num);
    num ++;
}
num = 0;
while(num>=-50){
    console.log("num is " + num);
    num --;
}
num = 0;
while(num<=100){
    if(num % 2 == 0){
        console.log("even number " + num);
    }
    num ++;
}

var baseBallPlayersNames = ["sammy", "babe", "alphonse"];
var isInjured = [true, false, false]
var counter = 0;
var points = [30, 33, 44];
while(counter < baseBallPlayersNames.length){
    if(isInjured[counter] == false){
        console.log("player " +baseBallPlayersNames[counter] + " has " + points +" points and it is injured " + isInjured[counter]);
    }else{}
 counter++;
}