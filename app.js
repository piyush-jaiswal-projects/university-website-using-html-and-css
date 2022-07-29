function formValidation(){

    let name = document.getElementById("userName").value;
    let email = document.getElementById("userEmail").value;
    let phone = document.getElementById("userPhone").value;
    let query = document.getElementById("userQuery").value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log("Query Details:" + name + email + phone + query);
    if(name.length === 0){
        alert("Name field can't be empty");
    }
    else if(email.length === 0 || !email.match(validRegex)){
            alert("Invalid email address");
        }
    else if(phone.length != 10){
        alert("Phone number should be of 10 digits");
    }
    else if(query.length === 0){
        alert("Query field can't be empty");
    }
    else{
        alert("Form submitted successfully");
    }
}