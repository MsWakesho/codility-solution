/* 
List of transaction = empty array[amount + date of execution]
if amount === 0, this is a card payment and considered an incoming transfer, amount ===0

Fee for having a card is 5/= every month,this is deducted from the balance every month.

However if 3 payments are  made by the card = 100/=

Output = get final balance at the end of the year = within 12 months.

Input = A = [100,100,100,-10] D= ["2020-12-31","2020-12-03","2020-12-29"]

Output = 230 (100+100+100-10=290, and the fee was paid every month so 290-(5*12) =230)

Pseudocode:
Start 
 Take Amount and  Date get the length and see if there is an array 
 Once we have the array we will notify the sytem that we have the date format which is new Date() and the declare the amount as a 
 After that we will find the total amount that will be accumalted after 12 months then we can deduct the card payemnt after it has been accumalated for 12 months.
 End
*/


function solution(){


let a = [""]
let d = new Date("")
let accountBalance= a[0]
let cardPayment = 5*12

 for (let i =1; i < a.length;i++){
    if(a.length && d.length === 0 ){
        return 0    
 } 
    else if( accountBalance[i] < a){
        accountBalance - cardPayment
    }else{
        return "not enough funds"
    }
 }



console.log (solution)

