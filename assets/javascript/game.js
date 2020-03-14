
var newSetup = "true";
var wins = 0;
var losses = 0;
var word;
var answerArray;
var wrongGuess;
var lives;



document.onkeyup = function newWord(event) {
    var letter = event.key.toLowerCase();    


    if(newSetup == "false"){
        wordCheck(letter);
       }
    else{
        var spideyRogues = ["venom","mysterio","rhino","vulture","morbius","shocker","jackal","kraven"];
        word = spideyRogues[Math.floor(Math.random() * spideyRogues.length)];
    

        lives = 10;
        answerArray = [];
        wrongGuess = [];

        for (var i = 0; i < word.length; i++){
            answerArray[i] = "_";
        }
        var result = answerArray.join(' ');
        
        document.getElementById('wordGuess').innerHTML = result;
        document.getElementById('guessesLeft').innerHTML = lives;
        document.getElementById('lettersGuessed').innerHTML = wrongGuess;
    
        newSetup = "false";

    }
}

function wordCheck(letter){
    
    if (word.includes(letter)) {
        var position = word.indexOf(letter);

        while (position != -1){
            answerArray[position] = letter;
            var result = answerArray.join(' ');
            document.getElementById('wordGuess').innerHTML = result;
            position = word.indexOf(letter, position + 1);
        }

        if (!answerArray.includes("_")){
            winGame();
        }
    }
    else{
        if(!wrongGuess.includes(letter)){
            wrongGuess.push(letter);
            document.getElementById('lettersGuessed').innerHTML = wrongGuess;
            loseLife();
        }
    }
}

function loseLife() {
    lives--;
    document.getElementById('guessesLeft').innerHTML = lives; 
    if (lives == 0) {
        document.getElementById('wordGuess').innerHTML = "YOU LOSE!..PLAY AGAIN?"; 
        losses++;
        document.getElementById("losses").innerHTML = losses;

        newSetup = "true";
    }
}

function winGame() {
    document.getElementById('wordGuess').innerHTML = "YOU WIN!..PLAY AGAIN?";
    wins++;
    document.getElementById('wins').innerHTML = wins;
    newSetup = "true";
    
    if (word == "venom") {
        document.getElementById("image").src = "assets/images/venom.jpg";
        document.getElementById("wordGuess").innerHTML += "<br>" + "VENOM!";
    }
    else if(word == "shocker"){
        document.getElementById("image").src = "assets/images/shocker.jpg";
        document.getElementById("wordGuess").innerHTML += "<br>" + "SHOCKER!";
    }
    else if(word == "kraven"){
        document.getElementById("image").src = "assets/images/kraven.jpg";
        document.getElementById("wordGuess").innerHTML += "<br>" + "KRAVEN!";
    }
    else if(word == "jackal"){
        document.getElementById("image").src = "assets/images/jackal.jpg";
        document.getElementById("wordGuess").innerHTML += "<br>" + "JACKAL!";
    }
    else if(word == "mysterio"){
        document.getElementById("image").src = "assets/images/mysterio.jpg";
        document.getElementById("wordGuess").innerHTML += "<br>" + "MYSTERIO!";
    }
    else if(word == "rhino"){
        document.getElementById("image").src = "assets/images/rhino.jpg";
        document.getElementById("wordGuess").innerHTML += "<br>" + "RHINO!";
    }
    else if(word == "morbius"){
        document.getElementById("image").src = "assets/images/morbius.jpg";
        document.getElementById("wordGuess").innerHTML += "<br>" + "MORBIUS!";
    }
    else if(word == "vulture"){
        document.getElementById("image").src = "assets/images/vulture.jpg";
        document.getElementById("wordGuess").innerHTML += "<br>" + "VULTURE!";
    }
}











 







