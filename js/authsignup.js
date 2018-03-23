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

      
<<<<<<< HEAD
        if (email.value=null) {
=======
      if (email.value=null) {
>>>>>>> 4edebbf87bd6b8254d2c9e0ba9bbeb418bc473aa
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
<<<<<<< HEAD
        window.open('preference.html',"_self");
=======
        // [END_EXCLUDE]
        window.open('preference.html',"_self");
      });

         firebase.auth().onAuthStateChanged(function(user) {
        if(user)
        {
          var emailVerified = user.emailVerified;
          user.updateProfile({
            displayName: document.getElementById('username').value 
        }).then(function () {
            console.log("Updated");
        }, function (error) {
            console.log("Error happened");
>>>>>>> 4edebbf87bd6b8254d2c9e0ba9bbeb418bc473aa
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
<<<<<<< HEAD
      });      
},false);
=======
        // [END_EXCLUDE]
      });
      

      // [END sendemailverification]
      // [END sendemailverification]
    

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref("users/" + userId).set({
    
    
    "city":city,
    "disciplines":disciplines,
    "branches":branches,
    "skill level":skillLevel
  });
}
            },false);
>>>>>>> 4edebbf87bd6b8254d2c9e0ba9bbeb418bc473aa
      


