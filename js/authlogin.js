document.getElementById("login").addEventListener("click", function(){
  
        var email=document.getElementById('email').value;
        var password=document.getElementById('password').value;
        var auth = firebase.auth();
        var st=document.getElementsByClassName("login");
        for(var i=0;i<st.length;i++)
        {
        st[i].style.opacity=1;
        }

        if (email.value=null) {
          alert("Please Enter email");
        }
        else if (password.value=null) {
          alert("Please Enter password");
        }
        else if (email.length < 4) {
          alert('Please enter correct email address.');
          return;
        }
        else if (password.length < 4) {
          alert('Please enter correct password.');
          return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          // [END_EXCLUDE]

        });
        firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
        var emailVerified = firebaseUser.emailVerified;
          if(!emailVerified)
           {
           alert("Please Verify your Email");
           }
          else if(emailVerified)
            {
           window.location="Home.html";
           }
       }
});

        // [END authwithemail]
      },false);

document.getElementById("forgot").addEventListener("click", function(){

      var email = document.getElementById('email').value;
      // [START sendpasswordemail]
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        alert('Password Reset Email Sent!');
        // [END_EXCLUDE]
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
          alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END sendpasswordemail];
    },false);
