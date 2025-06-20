/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
    right();
    left();
    turnRight();
    right();
    turnLeft();
    turnLeft();
    turnRight();
    turnRight();
    left();
    turnRight();
    right();
}
function right(){
   //your code here
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   turnLeft();
   move();
   turnLeft();
}
function left(){
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   turnRight();
   move();
}

