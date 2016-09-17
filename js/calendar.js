$(document).ready(function(){
    var time = +new Date();
    var timeFormat = moment(time).format("LTS");
    console.log(time);
    var month = +new Date().getMonth();
    var monthName;
    var date = +new Date().getDate();
    var year = +new Date().getFullYear();
    var monthDays;
    
    $(".datearea").prepend("<p>" + timeFormat + "</p>");
    
    function monthSet(m){
        console.log("Monthset called!");
        switch(m){
            case 0:
                monthName = "January";
                monthDays = 31;
                break;
            case 1:
                monthName = "February";
                monthDays = 28;
                break;
            case 2:
                monthName ="March";
                monthDays = 31;
                break;
            case 3:
                monthName ="April";
                monthDays = 30;
                break;
            case 4:
                monthName ="May";
                monthDays = 31;
                break;
            case 5:
                monthName ="June";
                monthDays = 30;
                break;
            case 6:
                monthName ="July";
                monthDays = 31;
                break;
            case 7:
                monthName = "August";
                monthDays = 31;
                break;
            case 8:
                monthName = "September";
                monthDays = 30;
                break;
            case 9:
                monthName ="October";
                monthDays = 31;
                break;
            case 10:
                monthName ="November";
                monthDays = 30;
                break;
            case 11:
                monthName ="December";
                monthDays = 31;        
        }
        console.log(monthName);
        
        var i;
        $(".monthtable td").remove();
        
        for(i = 1; i <= monthDays; i++){
            if(i <= 7){
                $(".monthtable .one").append("<td>" + i + "<p></p></td>");
            }
            else if(i <= 14){
                $(".monthtable .two").append("<td>" + i + "<p></p></td>");
            }
            else if(i <= 21){
                $(".monthtable .three").append("<td>" + i + "<p></p></td>");
            }
            else if(i <= 28){
                $(".monthtable .four").append("<td>" + i + "<p></p></td>");
            }
            else{
                $(".monthtable .five").append("<td>" + i + "<p></p></td>");
            }
        }
    }
    monthSet(month);
    
    $(".january").on("click", function(){
        monthSet(0);
    });
    $(".february").on("click", function(){
        monthSet(1);
    });
    $(".march").on("click", function(){
        monthSet(2);
    });
    $(".april").on("click", function(){
        monthSet(3);
    });
    $(".may").on("click", function(){
        monthSet(4);
    });
    $(".june").on("click", function(){
        monthSet(5);
    });
    $(".july").on("click", function(){
        monthSet(6);
    });
    $(".august").on("click", function(){
        monthSet(7);
    });
    $(".september").on("click", function(){
        monthSet(8);
    });
    $(".october").on("click", function(){
        monthSet(9);
    });
    $(".november").on("click", function(){
        monthSet(10);
    });
    $(".december").on("click", function(){
        monthSet(11);
    });

    
    $(".monthtable td").on("click", function(){
        var note = prompt("Add Notes");
        $(this).text(note);
    });
    
});