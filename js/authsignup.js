document.getElementById("signup").addEventListener("click", function(){
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      var password1 = document.getElementById('password1').value;
      var auth = firebase.auth();
      var user = firebase.auth().currentUser;
      var name = document.getElementById('username').value;

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
        else if(name.value=null)
        {
          alert("Please Enter Your Name");
        }
        else if (email.length < 8) {
          alert('Please enter correct email address.');
          return;
        }
        else if (password.length < 8) {
          alert('Please enter correct password. Min 8 Character required.');
          return;
        }
        else if (password != password1)
        {
          alert('Please Enter Same password');
          return;
        }

       firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
        var name = document.getElementById('username').value;
        var user = firebase.auth().currentUser;
        
        firebase.auth().currentUser.sendEmailVerification().then(function() {
        alert('Email Verification Sent!');
        window.open('preference.html',"_self");
        });
          
          var emailVerified = user.emailVerified;
          
          //var name=document.getElementById('username').value;
          
          firebase.auth().currentUser.updateProfile({
            displayName : name

            }).then(function () {
              
            }).catch(function(error) {
            
            });
        
        if (!emailVerified) {
          alert("Please Verify your email.");
        }
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });      
},false);
      


