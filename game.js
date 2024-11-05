var buttonColours =["red","blue","green","yellow"];

function nextSequence(){
    var randomNumber=Math.floor(Math.random()*4);
    console.log(randomNumber);
    var randomChosenColour=buttonColours[randomNumber];
    console.log(randomChosenColour); 
    $(`#${randomChosenColour}`).click(function(){
        $(this).fadeOut(100).fadeIn(100);
        var audio = new Audio(`./sounds/${randomChosenColour}.mp3`); 
        
        audio.play();
    })
}



nextSequence()