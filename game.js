var buttonColors = ["red", "blue","green", "yellow"];
var userClickedPattern = [];
var gamePattern=[];
var level = 0;
var keyCount = 0;


function startOver() {
level = 0;
gamePattern=[];
keyCount=0;

}


//Call nextSequence after first keypress

console.log(keyCount);
$(document).keydown(function(event){
  // console.log(event);
  keyCount++;
  // console.log(keyCount);
  if(keyCount === 1 ){
    nextSequence();
  }


});


//Checking Answer
var patternCheck = true;
function checkAnswer(currentLevel) {
  if(userClickedPattern[gamePattern.length]==gamePattern[gamePattern.length]){
    console.log("Success");


console.log(userClickedPattern);
console.log(gamePattern);
for(var i = 0; i < userClickedPattern.length;i++){
   if( gamePattern[i] !== userClickedPattern[i]){
     console.log("GPi: "+ gamePattern[i]);
     console.log("UPi: "+ userClickedPattern[i]);
        patternCheck = false;
   }
}
console.log("pcheck "+patternCheck);
console.log("ucp "+ userClickedPattern);
console.log("gp "+gamePattern);
if(patternCheck===true){
    setTimeout("nextSequence()",1000);
    userClickedPattern=[];


}
    // nextSequence();
  }
  else{
    console.log("Failure");
    playSound("wrong");
    $("h1").html("Game Over Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();

}


}




$(".btn").click(function(event){
  var currentColor = event.target.id;
  console.log("Currentcolor "+ currentColor);
  animatePress();
  function animatePress(currentColor){
    var currentColor = event.target.id;
    $("#"+ currentColor).addClass("pressed");
       setTimeout(function(){
         $("#" + currentColor).removeClass("pressed");
       },100);

  }
  console.log(userClickedPattern);
  // console.log( "last" + userClickedPattern[userClickedPattern.length - 1])

  checkAnswer(userClickedPattern[level]);
});


var randomChosenColor;


function nextSequence() {
  level++;
  var randomNumber = Math.round((Math.random() *3));
  // console.log(randomNumber);
  randomChosenColor = buttonColors[randomNumber];
  // concole.log(randomChosenColor);
  gamePattern.push(randomChosenColor);
  // console.log(randomChosenColor);
  flash(randomChosenColor);
  // flash(randomChosenColor);
  // console.log("working");
  // console.log(gamePattern);
  // console.log("Level "+ level);

  // alert("Level "+ level);
  $("h1").html( "Level " + level);




}



// function() animatePress(currentColor){
//
// }

$(".btn").click(function(event) {
  // nextSequence();
   var userChosenColor = event.target.id;
   // console.log(userChosenColor);
   userClickedPattern.push(userChosenColor);
   // console.log(userClickedPattern);
   // console.log(userClickedPattern[level]);
   flash(userChosenColor);
   // console.log(event.target.id);

});



function playSound(name){
    var sound = new Audio('sounds/'+name+'.mp3');
    sound.play();
}


function flash(userChosenColor){
  if(userChosenColor === "yellow"){
    $("#yellow" ).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(userChosenColor);
    // var yellow_sound = new Audio('sounds/yellow.mp3');
    // yellow_sound.play();
  }
  if(userChosenColor === "blue"){
      $("#blue" ).fadeIn(100).fadeOut(100).fadeIn(100);
      // var blue_sound = new Audio('sounds/blue.mp3');
      // blue_sound.play();
      playSound(userChosenColor);

  }
  if(userChosenColor === "red"){
      $("#red" ).fadeIn(100).fadeOut(100).fadeIn(100);
      // var red_sound = new Audio('sounds/red.mp3');
      // red_sound.play();
      playSound(userChosenColor);

  }
  if(userChosenColor === "green"){
    $("#green" ).fadeIn(100).fadeOut(100).fadeIn(100);
    // var green_sound = new Audio('sounds/green.mp3');
    // green_sound.play();
    playSound(userChosenColor);

  }


}

// for(var i = 0; i < 5; i++){
//     flash();
// }
