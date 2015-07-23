console.log("Hello");
/*
 * Event: button onclick
 */
var count = 60;
var timer;

$('#myButton').click(function () {

    console.log("button is clicked");

    // get
    var inputText = $('#input').val();
    console.log("get text: " + inputText);

    // put
   
    var outputField = $('#output');
        outputField.text("1:00");
    
    
    window.timer = setInterval(function() {
        console.log(count);
        window.count -= 1;
        var outputField = $('#output');
        outputField.html("0:" + count);
        function checkNumber() {
            if (window.count < 10) {
                outputField.html("0:0" + count);
            }
        }
        checkToStop();
        checkNumber();
    }, 1000);
    
    
});

/*
 * Event: listen to key press
 */
$("body").keypress(function(event) {

    var which = event.which;

    console.log("key pressed, which = " + which);

    // if(which == ...){ ... }

});

/*
 * Timer
 */

function checkToStop() {
    if (window.count == 0) {
    clearInterval(window.timer);
    }}
