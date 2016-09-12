/* Calendar Psuedocode

Retrieve time from internet and store in variable "time"
Create months array
Create years array

IF user clicks on calendar date
    Highlight date cube
    Pop up input box
        IF user clicks "Add to calendar"
            IF "set alarm" is selected & alarm input time is greater than 00:00 and less than 24:00
                Store text to text array
                Store time to time array
                Append array cell text to box
                Append array cell time to box
            ELSE IF message is null
                Alert "Enter Message"
            ELSE IF time is less than 00:00 OR greater than 24:00
                Alert "Enter time"
    
IF user clicks left button on calendar
    Display previous month

IF user click right button on calendar
    Display next month

IF "time" variable is greater than time cell of array
    Run alarm function:
        Run alarm for one minute

*/