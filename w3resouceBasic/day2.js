// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  Go to the editor
// Click me to see the solution
const leapYear=year=>year%4===0?console.log("this is a leap year"):year%400==0?console.log("this is a leap year1"):console.log("not a leap year")

leapYear("2001")


// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.  Go to the editor
// Click me to see the solution
const sundayYear=[]
for (let i = 2014; i < 2051; i++) {
    
    var date=new Date('January 1' +i).getDay()
   if(date==0){
    sundayYear.push(i)
   }
}
console.log(sundayYear);

// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".  Go to the editor
// Click me to see the solution

// prompt works in browser
// var number=1;
// let userInput=prompt("enter a number");
// if(number===userInput){
//     alert("good work")
// }else{
//     alert("not match")
// }

// 9. Write a JavaScript program to calculate days left until next Christmas.  Go to the editor
// Click me to see the solution

// today=new Date();
// console.log(today)
// var cmas=new Date(today.getFullYear(), 11, 25);
// console.log(cmas.getTime());
// if (today.getMonth()==11 && today.getDate()>25) 
// {
// cmas.setFullYear(cmas.getFullYear()+1);
// }  
// console.log(today.getTime())
// var one_day=1000*60*60*24;
// console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
// " days left until Christmas!");


var today=new Date();

var idTime=new Date(today.getFullYear(),10,8)
if(today.getMonth()==10 && today.getDate()>8){
    idTime.setFullYear(idTime.getFullYear() + 1)
}
var one_day=1000*24*60*60;

console.log(Math.ceil((idTime.getTime()-today.getTime())/(one_day) ) + "days left")
