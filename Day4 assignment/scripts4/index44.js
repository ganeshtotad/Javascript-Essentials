let num1=Number(prompt("enter first number"))
let num2=Number(prompt("Enter second number"))
let operator=prompt("Enter a oprator")
     
switch(operator){
    case '+':
        ans=num1+num2;
        console.log(`sum of ${num1} and ${num2} is ${ans}`)
        break;
    case '-':
        ans=num1-num2;
        console.log(`substraction  of ${num1} and ${num2} is ${ans}`)
        break;   
    case '*':
        ans=num1*num2;
        console.log(`Multiplication of ${num1} and ${num2} is ${ans}`)
        break;
    case '/':
        ans=num1/num2;
        console.log(`divison of ${num1} and ${num2} is ${ans}`)
        break;
    case '**':
        ans1=(num1)**2
        ans2 =(num2)**2
        console.log(`square  of ${num1} and ${num2} is ${ans1} ans ${ans2}`)
        break;
    case 'persentage':
        ans=num1*num2/100;
        console.log(ans)
        break;
        
    default:
        break;
    }
