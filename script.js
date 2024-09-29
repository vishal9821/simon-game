
var gamepattern = [];
var userclickedpattern = [];
var buttoncolor = ['red','blue','green','yellow'];
var level = -1;

function nextSequence() {
    
    userclickedpattern = [];
    var num = Math.random();
    num = (Math.floor(num*4));
    var randomchosencolor = buttoncolor[num];
    gamepattern.push(randomchosencolor);
    
    $("#"+randomchosencolor).fadeOut(100).fadeIn(100);
    
    var audio = new Audio("sounds/"+randomchosencolor+".mp3");
    audio.play();

    level++;
    $('h1').text("Level: "+level);

}

$('.btn').click(function(e){
    var userchoosencolor = e.target.id;
    userclickedpattern.push(userchoosencolor);
    var audio = new Audio("sounds/"+userchoosencolor+".mp3");
    audio.play();
    animepress(userchoosencolor);
    checkanswer(userclickedpattern.length-1);
    
});

function animepress(currentcolor){
    $('.'+currentcolor).addClass("pressed");
    setTimeout(function(){
            $('.'+currentcolor).removeClass('pressed');
    },200);
}

$('button').click(function(){
    $('h1').text("Level: "+level);
    nextSequence();
    $('button').css("visibility","hidden");
});

function checkanswer(currentanswer){
   if(userclickedpattern[currentanswer]===gamepattern[currentanswer]){
          
      if(gamepattern.length===userclickedpattern.length){
        setTimeout(function(){
            nextSequence();},1000);
        }
      
   }else{
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $('h1').text("Game Over Play Again!");
        $('body').addClass("game-over");
        setTimeout(function(){
            $('body').removeClass("game-over")
        },200);
        startover();
   }

   function startover(){
    level = 0;
    gamepattern = [];
    $('button').css("visibility","visible");
   }
   
   
}

