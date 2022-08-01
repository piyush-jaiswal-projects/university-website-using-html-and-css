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

function createCookies(username, year){
    var cookieInfo ="Username="+username+"Year="+year;
    document.cookie = cookieInfo;
    alert("Cookie is created");
}

function createLocalStorage(rollNo){
    localStorage.setItem("Roll No.", rollNo);
    alert("RollNo Stored Locally");
}

function faqDetails(num){

    const ques1 = 'Is there any age limitation to attend your university?';
    const ques2 = 'What is the academic calendar for your university?';
    const ques3 = 'What is the difference between online studies and distance studies?';
    const ques4 = 'What is the transfer application process?';
    const ques5 = 'How are grades determined in your university?';

    const ans1 = 'In general, you must have completed high school and you must be at least 17 years of age.';
    const ans2 = 'The academic year usually runs from August through May with breaks for holidays. And we use semester system.';
    const ans3 = 'Essentially there is no difference.';
    const ans4 = 'You must fulfill the requirements of a freshman applicant, as well as any supplemental information required by the transfer institution.';
    const ans5 = 'Grades are typically determined by quizzes, midterms, final exams, papers, projects, class attendance, and class participation.';

    let targetId, targetAns;
    if(num ===1){
        targetId = "ques1";
        targetAns = ans1;
        document.getElementById("ques2").innerText = ques2;
        document.getElementById("ques2").style.color = "rgb(20, 20, 73)";
        document.getElementById("ques3").innerText = ques3;
        document.getElementById("ques3").style.color = "rgb(20, 20, 73)";
        document.getElementById("ques4").innerText = ques4;
        document.getElementById("ques4").style.color = "rgb(20, 20, 73)";
        document.getElementById("ques5").innerText = ques5;
        document.getElementById("ques5").style.color = "rgb(20, 20, 73)";
    }
    else if(num ===2){
        targetId = "ques2";
        targetAns = ans2;
        document.getElementById("ques1").innerText = ques1;
        document.getElementById("ques1").style.color = "rgb(20, 20, 73)";
        document.getElementById("ques3").innerText = ques3;
        document.getElementById("ques3").style.color = "rgb(20, 20, 73)";
        document.getElementById("ques4").innerText = ques4;
        document.getElementById("ques4").style.color = "rgb(20, 20, 73)";
        document.getElementById("ques5").innerText = ques5;
        document.getElementById("ques5").style.color = "rgb(20, 20, 73)";
    }
    else if(num ===3){
        targetId = "ques3";
        targetAns = ans3;
        document.getElementById("ques2").innerText = ques2;
        document.getElementById("ques2").style.color = "rgb(20, 20, 73)";
        document.getElementById("ques1").innerText = ques1;
        document.getElementById("ques1").style.color = "rgb(20, 20, 73)";
        document.getElementById("ques4").innerText = ques4;
        document.getElementById("ques4").style.color = "rgb(20, 20, 73)";
        document.getElementById("ques5").innerText = ques5;
        document.getElementById("ques5").style.color = "rgb(20, 20, 73)";
    }
    else if(num ===4){
        targetId = "ques4";
        targetAns = ans4;
        document.getElementById("ques2").innerText = ques2;
        document.getElementById("ques2").style.color = "rgb(20, 20, 73)";
        document.getElementById("ques3").innerText = ques3;
        document.getElementById("ques3").style.color = "rgb(20, 20, 73)";
        document.getElementById("ques1").innerText = ques1;
        document.getElementById("ques1").style.color = "rgb(20, 20, 73)";
        document.getElementById("ques5").innerText = ques5;
        document.getElementById("ques5").style.color = "rgb(20, 20, 73)";
    }
    else if(num ===5){
        targetId = "ques5";
        targetAns = ans5;
        document.getElementById("ques2").innerText = ques2;
        document.getElementById("ques2").style.color = "rgb(20, 20, 73)";
        document.getElementById("ques3").innerText = ques3;
        document.getElementById("ques3").style.color = "rgb(20, 20, 73)";
        document.getElementById("ques4").innerText = ques4;
        document.getElementById("ques4").style.color = "rgb(20, 20, 73)";
        document.getElementById("ques1").innerText = ques1;
        document.getElementById("ques1").style.color = "rgb(20, 20, 73)";
    }
    document.getElementById(targetId).style.color = "black";
    document.getElementById(targetId).innerText = targetAns;
}