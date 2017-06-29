       //countersAndVariables!
    var wins = 0;
    var losses = 0;
    var guessesRemaining = 5;
    var words = ["sonic", "mario"];
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var alreadyGuessed = false;
    var guessesAlreadyMade = [];


    function checkIfArrayIsUnique(arr) {
    var map = {}, i, size;

    for (i = 0, size = arr.length; i < size; i++){
        if (map[arr[i]]){
            return false;
        }

        map[arr[i]] = true;
    }

    return true;
}


    
    var computerGuess = words[Math.floor(Math.random() * words.length)];

    
    //document.querySelector("#underscores").innerHTML = "_ ".repeat(computerGuess.length);

    //document.querySelector("#word").innerHTML = computerGuess;
    //var x = document.querySelector("#word").innerHTML;
    //document.querySelector("#word").style.visibility= "hidden";
    //document.querySelector("#word").style.replaceAt(0, "s");







    // OBJECTS FOR WORDS *************************************************************************************************


    //SONIC
    var sonic = {


        getMusic: function() {


          var audio = document.getElementById("audiotag");
          audio.innerHTML = "";
          var song = document.createElement("source");
          
          song.setAttribute('src', 'assets/audio/sonic.mp3');
          song.setAttribute('type', 'audio/ogg');
          song.setAttribute('type', 'audio/mpeg');
          audio.appendChild(song);
          audio.load();
          audio.play();
        
      },

        getImage: function() {
          document.getElementById("mysteryCharacter").src = "assets/images/sonic.png";

        }



    };
    //END SONIC
    

    //MARIO
    var mario = {


        getMusic: function() {

          var audio = document.getElementById("audiotag");
          audio.innerHTML = "";
          var song = document.createElement("source");
          
          song.setAttribute('src', 'assets/audio/mario.mp3');
          song.setAttribute('type', 'audio/ogg');
          song.setAttribute('type', 'audio/mpeg');
          audio.appendChild(song);
          console.log("MARIO WORKED");
          audio.load();
          audio.play();
             },


          getImage: function() {
          document.getElementById("mysteryCharacter").src = "assets/images/mario.png";

        }



    };
     //END MARIO



     //donkeykong
    var donkeykong = {


        getMusic: function() {

          var audio = document.getElementById("audiotag");
          var song = document.createElement("source");
          
          song.setAttribute('src', 'assets/audio/donkeykong.mp3');
          audio.appendChild(song);
        
      },

        getImage: function() {
          document.getElementById("mysteryCharacter").src = "assets/images/donkeykong.png";

        }





    };
    //END DONKEY KONG

    
    //FOX
    var fox = {


        getMusic: function() {

          var audio = document.getElementById("audiotag");
          var song = document.createElement("source");
          
          song.setAttribute('src', 'assets/audio/fox.mp3');
          audio.appendChild(song);
        
      },

        getImage: function() {
          document.getElementById("mysteryCharacter").src = "assets/images/fox.jpg";

        }





    };
    //END FOX



    //KIRBY
    var kirby = {


        getMusic: function() {

          var audio = document.getElementById("audiotag");
          var song = document.createElement("source");
          song.setAttribute('src', 'assets/audio/kirby.mp3');
          audio.appendChild(song);
        
      },

        getImage: function() {
          document.getElementById("mysteryCharacter").src = "assets/images/kirby.png";

        }





    };
    //END KIRBY


    //LINK
    var link = {


        getMusic: function() {

          var audio = document.getElementById("audiotag");
          var song = document.createElement("source");
          
          song.setAttribute('src', 'assets/audio/link.mp3');
          audio.appendChild(song);
        
      },

        getImage: function() {
          document.getElementById("mysteryCharacter").src = "assets/images/link.png";

        }





    };
    //END link


    //MEGA MAN 
    var megaman = {


        getMusic: function() {

          var audio = document.getElementById("audiotag");
          var song = document.createElement("source");
          
          song.setAttribute('src', 'assets/audio/megaman.mp3');
          audio.appendChild(song);
        
      },

        getImage: function() {
          document.getElementById("mysteryCharacter").src = "assets/images/megaman.png";

        }





    };
    //END MEGA MAN


    //pacman
    var pacman = {


        getMusic: function() {

          var audio = document.getElementById("audiotag");
          var song = document.createElement("source");
          
          song.setAttribute('src', 'assets/audio/pacman.mp3');
          audio.appendChild(song);
        
      },

        getImage: function() {
          document.getElementById("mysteryCharacter").src = "assets/images/pacman.png";

        }





    };
    //END PACMAN


    //PIKACHU
    var pikachu = {


        getMusic: function() {

          var audio = document.getElementById("audiotag");
          var song = document.createElement("source");
          
          song.setAttribute('src', 'assets/audio/pikachu.mp3');
          audio.appendChild(song);
        
      },

        getImage: function() {
          document.getElementById("mysteryCharacter").src = "assets/images/pikachu.png";

        }





    };
    //END PIKACHU


    //SPYRO
    var spyro = {


        getMusic: function() {

          var audio = document.getElementById("audiotag");
          var song = document.createElement("source");
          
          song.setAttribute('src', 'assets/audio/spryo.mp3');
          audio.appendChild(song);
        
      },

        getImage: function() {
          document.getElementById("mysteryCharacter").src = "assets/images/spryo.png";

        }





    };
    //END SPYRO



    



    //END WORD OBJECTS ***************************************************************************************************
    eval(computerGuess).getMusic();
    // diplays _ for all letters in word and gives them id by index
    function displayWord() {

    //correct = document.createElement('ul');

    for (var i = 0; i < computerGuess.length; i++) {

      var ul = document.getElementById("word");
      var li = document.createElement("li");
      li.appendChild(document.createTextNode("_"));
      li.setAttribute("id", ("letter"+i));
      ul.appendChild(li);

      }
    }
    //END DISPLAY WORD FUNCTION -----------------------------------------------------------

    //displays new word
    function newWord() {

    document.getElementById("word").innerHTML = "";




// OLD FOR LOOP 
//  for (var i=0; i < computerGuess.length; i++) {
      //document.getElementById("letter" + i).innerHTML = "_";



//      var oldLi = document.getElementById("letter" + i);
//      var oldUl = document.getElementById("word");
 //     oldUl.parentNode.removeChild(oldLi);
     //  var ul = document.getElementById("word");
      // var li = document.createElement("li");
     //  li.appendChild(document.createTextNode("_"));
     //  li.setAttribute("id", ("letter"+i))
     //  ul.appendChild(li);
  // *********************************************************************************************
//    }

      //computerGuess = words[Math.floor(Math.random() * words.length)];
      displayWord();
      document.getElementById("listedLetters").innerHTML = "<li id='guess'> </li>";




    }

    displayWord();



    //END DISPLAY NEW WORD --------------------------------
    


    function startGame() {


    document.onkeyup = function(event) {



      // Determines which key was pressed.
      var userGuess = event.key;

      //guessesAlreadyMade.push(userGuess);
      

 

 // ADDS KEY PRESSED TO LIST AND DISPLAYS TO GUESSED LETTERS ****************---------------------------------------------------------------------------------
      function typedLetters() {
      var liList = document.getElementById("listedLetters").getElementsByTagName("li");

      var count = liList.length
      var countLoops = 0;


      for (i=0; i<count; i++) {
          countLoops ++;
          if (document.getElementById("guessedLetter"+i)!== null) {
                      var getItem = document.getElementById("guessedLetter"+i).innerHTML;
                      if (getItem===userGuess){
                      countLoops --;
                      }

          }

          else if (countLoops===count) {

                    var ul = document.getElementById("listedLetters");
                    var li = document.createElement("li");
                    li.appendChild(document.createTextNode(userGuess));
                    li.setAttribute("id", ("guessedLetter"+i))
                    ul.appendChild(li);
                        
                  }
              }
    }
//************************************* END FOR LOOP ******************************************REGEX ABOVE



    //USING REGEX TO MAKE SURE THAT typedLetters() DOESN'T LOG NONE REGULAR AND LOWERCASE LETTERS
    var pat = /^[a-z]+$/;
      if(pat.test(userGuess)){

        typedLetters();


      } 






      //Function that takes a string parameter and sees if userGuess is in that string
      function checkList(word) {

      //var ul = document.getElementById("word");
      //var items = ul.getElementsByTagName("li");
        var wrongCounter = 0;
        //FOR LOOP TO ITERATE THROUGH WORD AND CHECK IF LETTER IS THE LETTER THAT THE USER TYPED ----------------------
        for(i=0; i<word.length; i++) {

              if (word[i] === userGuess) {

                  //Changes _ to correct letter(s) guessed
                  for (i=0; i<word.length; i++) {
                    if(word[i] === userGuess) {
                    var li = document.getElementById(("letter"+i)).innerHTML=word[i];       
                    }

                  }
     
    


                  //CHECK IF PLAYER WON STARTS HERE-------------------------------------------------------------
                    var saveWord = "";

        



                  //for loop to check player's progress on word
                  for (var i = 0; i < computerGuess.length; ++i) {
                    var letter = document.getElementById(("letter"+i)).innerHTML;
                    var saveWord = saveWord.concat(letter);
                  }






                  //check's if player already won ------------------------
                  if (saveWord===word){
                    var youWin = "YOU WON THIS GAME! Press Enter to play again!"
                    document.querySelector("#game").innerHTML = youWin;
                    wins ++;
                  //UPDATES WIN AND LOSS COUNTER -----------------------------
                  guessesRemaining = 5; 
                  var winCounter = "Wins: " + wins + "<br />" + 
                                    "Losses: " + losses + "<br />" +
                                    "Guesses Remaining: " + guessesRemaining;           
                    document.querySelector("#winsAndLosses").innerHTML = winCounter;
                    //****************************************************************  
                    var gameover = "YOU WON THE GAME! PRESS ENTER TO PLAY AGAIN!";
                    document.querySelector("#game").innerHTML = gameover;
                    eval(computerGuess).getImage();

                   // guessesAlreadyMade = [];
                    //IF USER PRESS ENTER AFTER WINNING ----------------------------------------------------------

                        document.onkeyup = function(event) {
                           if(event.which == 13 || event.keyCode == 13) { 

                                document.getElementById("mysteryCharacter").src = "assets/images/mystery.jpg";

                                restartGame();
                                startGame();



                        }



                      }


                      }
            //CHECK IF PLAYER WON ENDS HERE ------------------------------------------------------
              
                 }
            else {
              wrongCounter ++;
            }
            if (wrongCounter===word.length) { 

              




              //FOR LOOP TEST TO CHECK ARRAY FOR ALREADY GUESSED 

              


              //DECREMENTING GUESSES REMAING COUNTER IF GUESS IS WRONG
              var pat = /^[a-z]+$/;
              if(pat.test(userGuess)){



                      if(guessesAlreadyMade.indexOf(userGuess)=== -1) {

                        guessesRemaining --;
                        guessesAlreadyMade.push(userGuess);

                      }

              
                      



                      }
                guessesRemaing = false; 
                  

            

              //UPDATES WIN AND LOSS COUNTER -----------------------------
              var guessCounter = "Wins: " + wins + "<br />" + 
                                "Losses: " + losses + "<br />" +
                                "Guesses Remaining: " + guessesRemaining;           
              document.querySelector("#winsAndLosses").innerHTML = guessCounter;
              //****************************************************************  
              var gameWrong = "You Guessed Wrong! You have " + guessesRemaining + " guesses remaing!";
              document.querySelector("#game").innerHTML = gameWrong;
              if (guessesRemaining===0) {
                  var gameover = "Game Over! Try Again. Press Enter to play again!";
                  document.querySelector("#game").innerHTML = gameover;
                  losses ++;
                  //UPDATES WIN AND LOSS COUNTER -----------------------------
                  guessesRemaining = 5; 
                  var lossCounter = "Wins: " + wins + "<br />" + 
                                    "Losses: " + losses + "<br />" +
                                    "Guesses Remaining: " + guessesRemaining;
                  document.querySelector("#winsAndLosses").innerHTML = lossCounter;
                  //****************************************************************

                   //PLAYER CAN PRESS ENTER TO PLAY AGAIN! ---------------------
                   //guessesAlreadyMade = [];
                  document.onkeyup = function(event) {
                           if(event.which == 13 || event.keyCode == 13) { 



                                document.getElementById("mysteryCharacter").src = "assets/images/mystery.jpg";
                                restartGame();
                                startGame();


                              }
                            }



                  //*************************************************************

                }
            }
          }


      //else {
      //guessesRemaining--;
      //var guess = "You guessed wrong! Number of guesses remaining: " + guessesRemaining; 
      //document.querySelector("#game").innerHTML = guess;
      //return null;
      //  }   
    }



     
     
     checkList(computerGuess);

    //Function to restart the game! 
    function restartGame() {
      computerGuess = words[Math.floor(Math.random() * words.length)];
      eval(computerGuess).getMusic();
      guessesRemaining = 5;
      newWord();
      document.getElementById("listedLetters").innerHTML = "<li id='guess'> </li>";
      var gameStart = "Type any letter to make a guess!";
      document.querySelector("#game").innerHTML = gameStart;


    }







 //END OF DOCUMENT ON KEY UP EVENT
  }




}

startGame();

