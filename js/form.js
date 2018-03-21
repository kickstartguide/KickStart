

document.getElementById("submit").addEventListener("click", function(){
        var user = firebase.auth().currentUser;
        var name=user.displayName;  
        var email=user.email;
        var auth = firebase.auth();
        var database = firebase.database();

        var title = document.getElementById("title").value;
        var ques = document.getElementById("ques").value;

       
       // Get input values from each of the form elements
       
        
         var user = firebase.auth().currentUser;
        
     // Push a new question object to the database using those values
     


       function writeUserData(userId, name, email, title, ques) {
        var question = firebase.database().ref("userQuestions/");
    question.set({
       title: title,
       question: ques,
       user:userId
       });
  }
       
     },false);