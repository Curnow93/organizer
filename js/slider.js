$(document).ready(function(){
    var image = ["img/calendar.jpg", "img/addon.jpg", "img/mail.jpg", "img/socialmedia.jpg", "img/alarmclock.jpg", "img/wakeup.jpg"];
    var slideNumber = 0;
    
    setInterval(function(){
        //check last slide
        if(slideNumber == (image.length - 1)){
            slideNumber = 0;
        }
        else{
            slideNumber++;
        }
        addImage();
    }, 3000);
    
    function addImage(){
        $(".site-slider-display img").remove();
        $(".site-slider-display").prepend("<img src='" + image[slideNumber] + "' class='.slide'/>");
    };
    
    function next(){
        if(slideNumber == (image.length - 1)){
            slideNumber = 0;
        }
        else{
            slideNumber++;
        }
        addImage();
    }
    
    function previous(){
        if(slideNumber == 0){
            slideNumber = image.length -1;
        }
        else{
            slideNumber--;
        }
        addImage();
    };
    
    $(".next").on("click", function(){
        console.log("next");
        
    });
    $(".previous").on("click", previous());
    
})();

