sales= Number(prompt("Enter sales ammount"))
if (sales>0 && sales<=5000) {
    console.log(sales*0.02);
}
else if (sales >= 5001 && sales<= 10000){
    console.log(5000*0.02 + (sales-5000)*0.05);
}
else if (sales>=10001 && sales<=20000){
    console.log(5000*0.02 + 5000*0.05 + (sales-10000)*0.07);
}
else if(sales>20000)
    console.log(5000*0.02 + 5000*0.05 +10000*0.07+ (sales-20000)*0.1);




     
    
