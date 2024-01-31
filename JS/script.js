// Navbar toggle



$(function(){
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        stepsOrientation: "vertical",
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
        labels: {
            previous : 'Back Step',
            next : 'Next',
            finish : 'Submit',
            current : ''
        },
    })
});



















    //////////// Format the message content/////////////


    
    
    
    
        //////////// Format the message content/////////////
    
   
function Whatsapp() {
   
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var date = document.getElementById('formDate').value;
    var select = document.getElementById('category').value;





//     //////////// Format the message content/////////////

    var formattedMessage = (
        " *Name* : " + name + "\n" +
        " *Location* : " + email + "\n" +
        " *Phone Number* : " + number + "\n" +
        " *Email* : " + date + "\n" +
        " *Category* : " + select);


    // Encode the message for the URL
    var encodedMessage = encodeURIComponent(formattedMessage);

    // Construct the WhatsApp URL

    var url = "https://wa.me/+919994046055?text=" + encodedMessage;


    // Open the WhatsApp URL in a new tab/window
    window.open(url);


}






        

function Watsapp() {
    var name = document.getElementById('names').value;
    var email = document.getElementById('emails').value;
    var number = document.getElementById('numbers').value;
    var location = document.getElementById('places').value;
    var date = document.getElementById('formDates').value;
    





    //////////// Format the message content/////////////

    var formattedMessage = (
        " *Name* : " + name + "\n" +
        " *Event Name* : " + email + "\n" +
        " *Phone Number* : " + number + "\n" +
        " *Location* : " + location + "\n" +
        " *Date* : " + date);


    // Encode the message for the URL
    var encodedMessage = encodeURIComponent(formattedMessage);

    // Construct the WhatsApp URL

    var url = "https://wa.me/+919994046055?text=" + encodedMessage;

   
    // Open the WhatsApp URL in a new tab/window
    window.open(url);



}




