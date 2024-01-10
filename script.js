function edureka(){
    const form=document.getElementById("form");
    const Name=document.getElementById("names").value;
    const Email=document.getElementById("email").value;
    const Address=document.getElementById("Address").value;
    const Number=document.getElementById("Number").value;
    const Pincode=document.getElementById("Pincode").value;
    let employee=document.getElementById("Employee").value;
    let student_hidden=document.getElementById("student-hidden");
    let employee_hidden=document.getElementById("employee-hidden");
    localStorage.setItem("firstname",Name)
    localStorage.setItem("email",Email)
    localStorage.setItem("address",Address)
    localStorage.setItem("number",Number)
    localStorage.setItem("pincode",Pincode)
    console.log(Name,Email,Address,Number,Pincode);
    window.location.href="./index2.html"
    
     
};





let students = document.getElementById("person")
let temp = document.getElementById('temp');
let temps=document.getElementById('temps');
let state=document.getElementById('state');
temp.style.display='none';
temps.style.display='none';


students.addEventListener('click', () => {
    console.log(students.value);
    if(students.value == 'Student'){
        temp.style.display = 'block';
        temps.style.display='none';
       
        
    }
     else if(students.value== 'Employee'){
        temps.style.display = 'block';
        temp.style.display='none';
    
    }

});

state.addEventListener("click",function(event){
    const valid=state.value;
    if(valid===" "){
        alert("Enter city");
        return false;
    }
});

(function () {
    "use strict";
    window.addEventListener(
      "load",
      function () {
        // Code
        let forms = document.getElementsByClassName("needs-validation");
        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener(
            "change",
            function (event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              } else if (form.checkValidity() === true) {
                alert("The form was submitted");
              }
              form.classList.add("was-validated");
            },
            false
          );
        });
      },
      false
    );
  })();




