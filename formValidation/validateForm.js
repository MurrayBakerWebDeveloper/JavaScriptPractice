$(document).ready(function(){
    var users = {
        'Oliver' : 'password'
    }

    $("#check").change(function() {
        alert("triggered!");
    });

    function validateForm() {
        var name = document.billing.name.value;
        var address = document.billing.address.value;
        var password = document.billing.password.value;
        var phone = document.billing.phone.value;
        var checkbox = document.billing.checkbox.value;
        var password2 = document.billing.password2.value;
        if (password !== password2) {
            alert("Password does not match?  Durrr!");
            return false;
        } else if (users[name] === undefined) {
            alert("WTF! " + name + " is not a valid name!");
            return false;
        } else if (users[name] !== password) {
            alert("Invalid password dummy!");
            return false;
        } else if ($('#check').is(":checked")) {
            console.log("checked");
        }
        return true;
    };
});