const emailform = document.getElementById("email").value;


function ValidateEmail() {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailform.match(mailformat)) {
        alert("Valid email address!");
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        document.getElementById("email").focus();
        return false;
    }
}


function validateForm() {
    var email_text = document.forms["email-form"]["email"].value;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email_text.length>1 && email_text.match(mailformat)) {
        document.getElementById('email-form__error').innerHTML = "";
        return true;
    } 
    else {
        document.getElementById('email-form__error').innerHTML = "Please provide a valid email";
        document.getElementById('error-img').style.opacity = 1;
        return false;
    }

    
}