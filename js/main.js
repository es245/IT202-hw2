
var patients = {"Bob Nuget": 12345678, "Sarah Conner": 11223344, "Walter White": 00001111, "John Locke": 09876543};

function verify(name, id, email){
    
    console.log("verifying");

    if(id == patients[name]){
        document.getElementById('patient-form').innerHTML = '';
        var node = document.createElement("H1");                 // Create a <li> node
        var textnode = document.createTextNode("Welcome " + name + " , you have succesfully logged in!");         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("patient-form").appendChild(node);     // Append <li> to <ul> with id="myList"
    }

    else{
        document.getElementById('name_error').innerHTML = "Name and ID do not match, please try again.";
    }
}


function validate(){



    var idNumber = document.forms["patient-form"]["id"].value;
    var name = document.forms["patient-form"]["patient_name"].value;
    var dropdown = document.forms["patient-form"]["dropdown"].value;
    var email = document.forms["patient-form"]["email"].value;
    var idNumber_v;
    var name_v;
    var dropdown_v;
    var email_v;

    if(!name){
        document.getElementById('name_error').innerHTML = 'Please enter your name';
    }

    else{
        document.getElementById('name_error').innerHTML = '';
        name_v = true;
    }


    if(isNaN(idNumber) || idNumber.length !== 8){
        document.getElementById('id_error').innerHTML = 'Your ID must be numeric and 8 digits long.';
    }

    else{
        document.getElementById('id_error').innerHTML = '';
        idNumber_v = true;
    }

    if(document.getElementById('email_check').checked = true){
        if(!email){
            document.getElementById('email_error').innerHTML = 'Please enter your email address';
        }

        else{
        
            if (email.toLowerCase().indexOf(".") == -1 || email.toLowerCase().indexOf("@") == -1){
                document.getElementById("email_error").innerHTML = "Please enter a valid email address."
            }

            else{
                document.getElementById("email_error").innerHTML = ""
                email_v = true;
            }
        }
    }

    if (name_v + idNumber_v + email_v == 3 || name_v + idNumber_v == 2){
        console.log("success");
        verify(name, idNumber, email);
    }

    else{
        console.log("failure");
    }



}


/*  var form = getElementById('patient-form');
    var id = getElementById('idNumber');
    var success = document.createTextNode('ID number is valid.');
    var failure = document.createTextNode('ID number is invalid.');
    var message = document.createElement("SPAN");
    
    if(idNumber == "1"){
        message.appendChild(success);
        document.form.appendChild(message);
    }*/