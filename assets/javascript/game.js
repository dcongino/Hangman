
var newSetup = "true";
var wins = 0;
var guesses = 0;
var word;
var answerArray;
var wrongGuess;
var lives;



document.onkeyup = function newWord(event) {
    var letter = event.key.toLowerCase();    
    console.log(letter);

    if(newSetup == "false"){
        wordCheck(letter);
       }
    else{
        var spideyRogues = ["Venom","Mysterio","Rhino","Vulture","Morbius","Shocker","Jackal","Kraven"];
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
    
        newSetup = false;

    }
}

function wordCheck(letter){
    
}










 







