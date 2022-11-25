console.log(`Connected`);

let inputNumber = prompt (`Enter a number between 0 - 20`);


 for (inputNumber; inputNumber >= 0; inputNumber--){
    if (inputNumber < 50) {
        console.log(`Currently at number ${inputNumber}. Terminating the loop`);
        break;
    }


    if (inputNumber % 10 === 0) {
        console.log(`The number is divisible by 10. Skipping the number`);
        continue;
    }

    if (inputNumber % 5 === 0){
        console.log(inputNumber);
    }
 }