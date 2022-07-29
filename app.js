function formValidation(){
    var form = document.getElementById("query-form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

    let name = document.getElementById("userName").value;
    let email = document.getElementById("userEmail").value;
    let phone = document.getElementById("userPhone").value;
    let query = document.getElementById("userQuery").value;
    console.log("Query Details:" + name + email + phone + query);
    if(name.length === 0){
        alert("Name field can't be empty");
    }
    else if(email.length === 0){
        alert("Email field can't be empty");
    }
    // else if(){
    //     // check email
    // }
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