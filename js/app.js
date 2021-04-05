'use strict';



let userName =prompt('What\'s your name?');
alert('Welcome to my website  ' + userName + '  Let\'s play the game ^_^')

alert('The answer should be (yes) or (no) only');

let ques =prompt('Do you know my full name?');
ques = ques.toLowerCase();
 switch(ques){
    case 'yes':  
    case 'no':
        alert('Im Maram Ankir');
      break; 
      default:
 alert('please enter yes or no');
 alert('Im Maram Ankir');
 break;
}

console.log(ques) ;





let ques2 =prompt('Do you know my Age?');
ques2 = ques2.toLowerCase();
 switch(ques2){
    case 'yes':  
    case 'no':
        alert('Im 22 years old');
      break;
}
console.log(ques2) ;



let ques3 =prompt('Do you know my favarite color?');
ques3 = ques3.toLowerCase();
 switch(ques3){
    case 'yes':  
    case 'no':
        alert('I like blue the best');
      break; 
}
console.log(ques3) ;


let ques4 =prompt('Do you know in which university I graduated from ?');
ques4 = ques4.toLowerCase();
 switch(ques4){
    case 'yes':  
    case 'no':
        alert('I graduated from AL-Balqa Applied university');
      break; 
}
console.log(ques4) ;



let ques5 =prompt('Do I like food ?');
ques5 = ques5.toLowerCase();
 switch(ques5){
    case 'yes':  
    case 'no':
        alert('of course I do =P');
      break; 
}
console.log(ques5) ;
console.log ('welcome again');
