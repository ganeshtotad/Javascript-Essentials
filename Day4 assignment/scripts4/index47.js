num= Number(prompt())
if (num<2){
    console.log(`Plese enter number greater than 1`)
}
for (let counter = 2; counter <= num; counter++) {

    let notPrime = false;
    for (let i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}
a