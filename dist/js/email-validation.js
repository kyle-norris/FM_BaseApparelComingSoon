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