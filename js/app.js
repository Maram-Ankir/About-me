'use strict';


let score = 0;
let userName =prompt('What\'s your name?');
alert('Welcome to my website  ' + userName + '  Let\'s play the game ^_^')
alert('The answer should be (yes) or (no) only for the first 5 question ');

function question1(){  
let ques =prompt('Do you know my full name?');
ques = ques.toLowerCase();
 switch(ques){
    case 'yes':  
    case 'y':
    score++;
        alert('correct Im Maram Ankir✅');
      break; 
      case 'no':
      case 'n':
        alert('not correct try again');
      break; 
      default:
      alert('please enter yes or no');
 break;
}
console.log(ques) ;
}
question1();


function question2() {
  let ques2 =prompt('Do you know my Age?');
  ques2 = ques2.toLowerCase();
   switch(ques2){
      case 'yes':  
      case 'y':
        score++;
          alert('correct Im 22 years old ✅');
        break;
        case 'no':
          case 'n':
            alert('not correct try again');
          break; 
          default:
          alert('please enter yes or no');
     break;
  }
  console.log(ques2) ;
}
question2();


function question3() {
let ques3 =prompt('Do you know my favarite color?');
ques3 = ques3.toLowerCase();
 switch(ques3){
    case 'yes':  
    case 'y':
      score++;
        alert('correct I like blue the best✅');
      break;
      case 'no':
        case 'n':
          alert('not correct try again');
        break; 
        default:
        alert('please enter yes or no');
   break; 
}
console.log(ques3) ;
}
question3();

function question4() {
let ques4 =prompt('Do you know in which university I graduated from ?');
ques4 = ques4.toLowerCase();
 switch(ques4){
    case 'yes':  
    case 'y':
      score++;
        alert('correct I graduated from AL-Balqa Applied university✅');
      break; 
      case 'no':
        case 'n':
          alert('not correct try again');
        break; 
        default:
        alert('please enter yes or no');
   break;
}
console.log(ques4) ;

}
question4();


function question5() {
let ques5 =prompt('Do I like food ?');
ques5 = ques5.toLowerCase();
 switch(ques5){
    case 'yes':  
    case 'y':
      score++;
        alert('correct of course I do ✅');
      break; 
      case 'no':
        case 'n':
          alert('not correct try again');
        break; 
        default:
        alert('please enter yes or no');
   break;
}
console.log(ques5) ;
}
question5();

// The sixth question :

function question6() {
for (let i=1 ;i<=4 ;i++){
let guessNum =prompt('Please guess a number and enter it ?');
console.log(typeof guessNum);
guessNum = parseInt(guessNum);
console.log(typeof guessNum);

if(guessNum==5){
  alert ('Correct num ✅');
  score++;
  break;
}
if (guessNum>5){
  alert("Too high");
}else if(guessNum<5){
  alert("Too low");
}else {
  alert('please enter a number')
}
}
 alert('All chances are over ...... The correct number is 5 ')
}

question6();


//the seventh question :

//solve it using a function 
// for (let i=1 ;i<=6 ;i++){
// function check(a) {
//   if (color.indexOf(a) > -1) {
//     alert('Correct color ✅');
//   } else {
//     alert('not Correct color ');
//   }
// }

// let color=["blue" , "red" , "pink" , "green"];
// let guessColor=prompt('Try to quess a color');
// check(guessColor);

// }
// alert('All chances are over ...... The correct colors are (blue , red ,pink and green ) ');

// alert ("Refresh the page to play again");




for (let i=1 ;i<=6 ;i++){
let guessColor=prompt('Try to quess a color');
guessColor=guessColor.toLowerCase();
let color=["blue" , "red" , "pink" , "green"];

if ((guessColor===color[0]) || (guessColor===color[1]) || (guessColor===color[2])||(guessColor===color[3])) {
    alert('Correct color ✅');
    score++;
    break;
  } else {
    alert('not Correct color ');
  }
 }
 alert(' The correct colors are (blue , red ,pink and green ) ');

 alert('Thanks for playing your socre is ' +  score);

 alert ("Refresh the page to play again");
console.log('Thanks for playing your socre is ' +  score);


