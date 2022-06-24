let rand = Math.floor(Math.random() * 100) + 1;

let input 


    for (let i = 0; input != rand; i++) {
        turn ();
    }

function turn () {

    input = prompt("Please guess a number between 1 and 100.");
        
        if (input < rand) {
            alert("Too Low");
            } else if(input > rand) {
            alert("Too High");
            } else {
            alert("Congratulations!");
            }
}

  