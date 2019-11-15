//user interface or front end

(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

function han() 
{

var image = document.getElementById("upload").files[0];

    var reader = new FileReader();

    reader.onload = function(e) {
      var pic = document.getElementById("uploadImage").src = e.target.result;
      document.getElementById("uploadImage").src = e.target.result;
      var pic = document.getElementById("pic").src = e.target.result;
    }

    reader.readAsDataURL(image);
}

//function for capturing user data and generating the student id
$(document).ready(
function(){
 $("#create").click(
     function(e){
         var fName = $("#first-name").val();
         var lName= $("#second-name").val();
         var admNo= $("#adm-no").val();
         var idNo = $("#id-no").val();
         var course = $("#course").val();
         var gender = $("#gender input:checked").val();
         // alert(fName);
         // alert(lName)
         // alert(admNo)
         // alert(idNo)
         // alert(course)
         // alert(gender)


         $("#names").text(fName+"       "+lName);
         $("#admno").text(admNo);
         $("#idno").text(idNo);
         $("#course1").text(course);
         $("#gender1").text(gender);
         $('#idimg').prepend().attr('img', e.target.result)

        
         e.preventDefault();

     }
 )
 
}

)