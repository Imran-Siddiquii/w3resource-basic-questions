// console.log(4 + true)

// . Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
// Click me to see the solution
    
    const date=new Date().toLocaleTimeString();
    const day=new Date().getDay()
    const days =['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
    console.log("current time : " +date.slice(0,2) + " " + date.slice(-2) + " " + date.slice(2,5)+date.slice(5,8));
    console.log("Today is:" +days[day] )
// 2. Write a JavaScript program to print the contents of the current window.  Go to the editor
// Click me to see the solution

    // window.print();

// 3. Write a JavaScript program to get the current date.  Go to the editor
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
var newdata=new Date().toLocaleDateString()
console.log(newdata)
// Click me to see the solution

// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.  Go to the editor
// Click me to see the solution
// Area of triangle = √[s(s – a)(s – b)(s – c)]

let areaOfTriangle=(a,b,c)=>{
    let s=(a+b+c)/2
    var d=(s-a)*(s-b)*(s-c)
    let area=Math.sqrt(d*s)
    console.log(area)
} 
areaOfTriangle(5,6,7)

// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front
const rotate=(str)=>{
let makeArray=str.split('')
let rotateArray=[]
for (let i = makeArray.length-1; i >= 0; i--) {
    rotateArray.push(makeArray[i])
}
console.log(rotateArray.join(''))
}

rotate('w3resource')
