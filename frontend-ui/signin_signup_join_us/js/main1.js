var config = {
    apiKey: "AIzaSyCSEiwHD5jBfH3zo5eb91tZSnY3ngdRXnk",
    authDomain: "party-493df.firebaseapp.com",
    databaseURL: "https://party-493df.firebaseio.com",
    projectId: "party-493df",
    storageBucket: "party-493df.appspot.com",
    messagingSenderId: "792926467414",
    appId: "1:792926467414:web:f173aa76e6843ab78c92f7",
    measurementId: "G-E20LGG6G94"
 
  };
     firebase.initializeApp(config);
    console.log(firebase);
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(e){
        e.preventDefault();
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);

document.querySelector('#btn-signup').onclick = function(){
			 var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
       var confirmPassword = document.querySelector("#cpass").value;
    const auth=firebase.auth();

       console.log(email);
    console.log(password);
            //alert("Sign in successful")
    if (password != confirm_password){
					alert("Both Passwords didn't match try again");
					return false
				}
				else if(password == confirm_password){
					firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
                            console.log(errorMessage);
                            console.log(errorCode);
});
					return true
				}
                        
            
            
        
}

firebase.auth().onAuthStateChanged(function(user) {
 
 
   if(user){
       console.log(user);
   } 
    else{
        console.log("no")
    }
});