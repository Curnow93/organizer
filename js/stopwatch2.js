$(document).ready(function(){
    
    var startTime = [];
    var elapsedTime;
    var sessionTime = [];
    var pauseTime = [];
    var finishTime = [];
    var lapTime = [];
    var time = +new Date();
    var startClicked = 0;
    var pauseClicked = 0;
    var finishClicked = 0;
    var started = false;
    var paused = false;
    var stopped = false;
    var timeFormat;
    var result;
    var startAppend = 0;
    var finishAppend = 0;
    
    setInterval(function() {
        time += 1000;
        timeFormat = moment(time).format("LTS");
        console.log(timeFormat);
        $(".clock .lts").remove();
        $(".clock").prepend("<p class='lts'>" + timeFormat + "</p>");
    }, 1000);
    
    $(".start").on("click", function(){
        $(this).parent().children().removeAttr("style");
        $(this).css("background-color", "#001C05");
        startClick();
    });
    
    $(".pause").on("click", function(){
        $(this).parent().children().removeAttr("style");
        $(this).css("background-color", "#474300");
        pauseClick();
    });
    
    $(".stop").on("click", function(){
        $(this).parent().children().removeAttr("style");
        $(this).css("background-color", "#301B1B");
        finishClick();
    });
    
    $(".reset").on("click", function(){
        $(this).parent().children().removeAttr("style");
        $(this).css("background-color", "#000424");
        resetClick();
    });
    
    function startClick(){
        if(started == false){
            started = true, 
            paused = false, 
            stopped = false;
            $(".clock p").remove();
            startClicked++;
            startTime.push(time);
            var arraySlot = startClicked - 1;
            console.log(startClicked + ": Time Started: " + startTime[arraySlot]);
            if(startAppend == finishAppend){
                startAppend++;
                var startTimeFormat = moment(startTime[arraySlot]).format("LTS");
                $(".started").append("<li>" + startTimeFormat + "</li>");
            }
        }
    }
    
    function pauseClick(){
        if(paused == false){
            paused = true, 
            started = false, 
            stopped = false;
            pauseClicked++;
            $(".clock").append("<p style='font-size: 16px;'>Paused at: " + timeFormat + "</p>");
            var arraySlot = pauseClicked - 1;
            pauseTime.push(time);
            if(!elapsedTime){
                console.log("No elapsedTime");
                sessionTime.push(pauseTime[arraySlot] - startTime[arraySlot]);
                elapsedTime = sessionTime[arraySlot];
                console.log(elapsedTime);
            }
            else{
                sessionTime.push(pauseTime[arraySlot] - startTime[arraySlot]);
                console.log("Session " + pauseClicked + " : " + sessionTime[arraySlot]);
                elapsedTime += sessionTime[arraySlot];
            }
            console.log(pauseClicked + ": Timer paused after " + elapsedTime + " seconds at " + pauseTime[arraySlot]);
        }
    }
    
    function finishClick(){
        if(stopped == false){
            stopped = true,
            started = false,
            paused = false;
            $(".clock p").remove();
            var lastStart = startTime.length - 1;
            finishClicked++;
            var arraySlot = finishClicked - 1;
            if(!elapsedTime){
                console.log("No elapsedTime");
                elapsedTime = time - startTime[lastStart];
                console.log(elapsedTime);
            }
            else{
                console.log("elapsedTime Exists!: " + elapsedTime);
                sessionTime += (time - startTime[arraySlot]);
                console.log("Updated elapsedTime :" + elapsedTime);
            }
            lapTime.push(elapsedTime);
            elapsedTime = undefined;
            finishTime.push(time);
            console.log(finishClicked + ": Time Stopped: " + finishTime[arraySlot] + " Lap Time: " + lapTime[arraySlot]);
            finishAppend++;
            var finishTimeFormat = moment(finishTime[arraySlot]).format("LTS");
            $(".finished").append("<li>" + finishTimeFormat + "</li>");
            var lapTimeFormat = (lapTime[arraySlot] / 1000);
            $(".diff").append("<li>" + lapTimeFormat + "</li>");
        }
    }
    
    function resetClick(){
        elapsedTime = undefined;
        started = false;
        $(".recorded li").remove();
        $(".clock p").remove();
    }

    /*function(pauseCheck){
        if(paused == true){
            alert(paused);
            $(".clock").append("<p>Paused</p>");
        }
        else{
            $(".clock p").remove();
        }
    }*/
});

