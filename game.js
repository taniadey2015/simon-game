var buttonColours =["red","blue","green","yellow"];
var userClickedPattern=[];
function nextSequence(){
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    $(`#${randomChosenColour}`).click(function(){
        $(this).fadeOut(100).fadeIn(100);
        playSound(randomChosenColour);
        animatePress( $(this));
    })
    $(`div[type="button"]`).click(function(){
        var userChosenColour=$(this).attr("id");
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress($(this));
    })
}

function playSound(name){
    var audio = new Audio(`./sounds/${name}.mp3`); 
    audio.play();   
}

function animatePress(currentColour){
    currentColour.addClass("pressed");
    setTimeout(function() { 
        currentColour.removeClass("pressed"); 
    }, 100);
}


nextSequence()