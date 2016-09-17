$(document).ready(function(){
    $(".chklist li").not(":first").on("click", function(){
        var note = prompt("Add note");
        if(note){
            $(this).children("a").remove();
            $(this).append("<a>" + note + "</a>");
        } 
        else{
            alert("Invalid Input");
        }
        
    });
    
    $(".chklist .tick").on("click", function(){
        var remove = confirm("Want to tick this?");
        if (remove == true){
            var target = $(".chklist li a").css("text-decoration" , "line-through");
            console.log(target);
            var destroy = confirm("And remove it?");
            if(destroy == true){
                $(".chklist").children("a").remove();
            }
                $(".chklist").children("a").css("text-decoration" , "line-through");
        }
        else{
            alert("false");
        }
    });
    
    /*$(".text").on("click", function(){
        alert("hello");
        $(this).css("background-color" : "lightgrey");
    });*/
});