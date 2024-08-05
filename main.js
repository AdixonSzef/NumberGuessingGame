// Number Guessing Game 
// By AdixSzef
// 04.08.2024
window.onload = function(){
    const minNum = 1;
    const maxNum = 100;
    let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

    let attempts = 0;
    let guess;
    let running = true;
    let again;
    let hint = 0;
    let debug = true;


    while(running){
        if(debug){
            console.log(answer);
            hint++
        }
  
            guess = window.prompt(`Guess a number between ${minNum}-${maxNum}`);
    
        if(guess == "exit"){
            break;
        }

        guess = Number(guess);
    

        if(isNaN(guess)){
         window.alert("Please enter a valid number !");
            continue;
     }
        else if(guess < minNum || guess > maxNum){
            window.alert("You can only choose betwen 1-100")
            continue;
        }
        else{
            attempts++
            if(guess < answer){
                window.alert("It's a higher number")
                continue;
            }
            else if(guess > answer){
                window.alert("It's a lower number")
                continue;
            }
            else if(guess == answer){
                window.alert(`You guessed it !, it was ${answer}. It took you ${attempts} attempts.`);
                again = window.prompt(`To play again write 1, to exit write 2.`);
            
                again = String(again);

                if(again == "1"){
                    console.log("Playing again");
                    hint = 0;
                    attempts = 0;
                    answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
                    continue;
                }
                else if(again == "2"){
                    console.log("breaking");
                    break;
                }
           
            }
        }

    }
}

