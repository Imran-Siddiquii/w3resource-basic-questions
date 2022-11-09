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

let days=new Date().getDate();
let month=new Date().getMonth();
let daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31]
let dayIn=daysInMonth[month]
  let count =0
for (let i = days; i <= dayIn; i++) {
    debugger
    if(days<dayIn){
        days++
    }
    if(days==dayIn){
        days=1
        month++    
    }
    if(month==11 && days==25){
        console.log("hello")
    }
    count++
}
console.log(count)


today=new Date();
var cmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!");