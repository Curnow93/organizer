$(document).ready(function(){
    console.log("ready");
    
    var menuBar = [["Home", "index.html"], ["Calendar", "calendar.html"], ["Music Filter", "musicfilter.html"], ["Facebook Filter", "facebookfilter.html"], ["Stopwatch", "stopwatch.html"], ["Checklist", "checklist.html"], ["Alarm Clock", "alarmclock.html"], ["Email Alerts", "emailalerts.html"], ["Add Ons", "addons.html"]];
    
    var tabName;
    var slideDown = false;
    
    $(".nav-ul li:not(:first-child)").hide();
    
    $(".nav-ul li a").mouseover(function(){
            $(".nav-ul li").slideDown("fast");
            $(".nav-ul").css("height" , "50%");
            $(".nav-ul li").css("padding" , "8px 0");
    });
    
    $(".nav-ul").mouseleave(function(){
            $(".nav-ul li:not(:first-child)").slideUp("fast");
            $(".nav-ul").css("height", "100%");
            $(".nav-ul li").css("padding" , "35px");
    });
    
    $(".nav-ul li").on("click", function(){
        tabName = $(this).text();
        console.log(tabName);
        clickCheck(tabName);
    });
    
    function clickCheck(n){
        alert(n);
        var selected;
        var cell;
        switch(n){
            case "Calendar":
                selected = menuBar[1];
                cell = 1;
                break;
            case "Home":
                selected = menuBar[0];
                cell = 0;
                break;
            case "Music":
                selected = menuBar[2];
                cell = 2;
                break;
            case "Facebook":
                selected = menuBar[3];
                cell = 3;
                break;
            case "Stopwatch":
                selected = menuBar[4];
                cell = 4;
                break;
            case "Checklist":
                selected = menuBar[5];
                cell = 5;
        }
        console.log(menuBar[0] + menuBar[cell]);
        var first = menuBar[0];
        menuBar[0] = selected;
        menuBar[cell] = first;
        console.log(menuBar[0] + menuBar[cell]);
        //newcell = selected;
        //newcell.unshift();
        updateNav(cell, first);
    }
    
    function updateNav(c, f){
        $(".nav-ul li").first().remove();
        $(".nav-ul").prepend("<li><a href='" + menuBar[0][1] + "'>" + menuBar[0][0] + "</a></li>");
        $(".nav-ul li:nth-child(c)").remove();
        $(".nav-ul li:nth-child(c)").append(f);
    }
});