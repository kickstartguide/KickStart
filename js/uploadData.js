var getData = function()
{

	var cityTag = document.querySelectorAll(".city");
	var disciplineTag = document.querySelectorAll(".disciplines");
	var branchTag = document.querySelectorAll(".branches");
	var skillTag = document.querySelectorAll(".skill");
	
	var city;
	var disciplines = new Array();
	var branches = new Array();
	var skillLevel;
	for (var i = cityTag.length - 1; i >= 0; i--) 
	{
		if(cityTag[i].selected)
			city=cityTag[i].value;
	}

	for (var i = disciplineTag.length - 1; i >= 0; i--) {
		if(disciplineTag[i].checked)
			disciplines.push(disciplineTag[i].value);
	}

	for (var i = branchTag.length - 1; i >= 0; i--) {
		if(branchTag[i].checked)
			branches.push(branchTag[i].value);
	}

	for (var i = skillTag.length - 1; i >= 0; i--) 
	{
		if(skillTag[i].selected)
			skillLevel=skillTag[i].value;
	}

<<<<<<< HEAD
firebase.auth().onAuthStateChanged(function(user) {
	var user = firebase.auth().currentUser;
  if (user) {
    
    var userId = user.uid;
    var name = user.displayName;
    var email = user.email;

var usersRef = firebase.database().ref("users/");
var prefvalues = firebase.database().ref("users/"+userId+"/");
prefvalues.set ({
     "city":city,
		"disciplines":disciplines,
		"branches":branches,
		"skill level":skillLevel
});

=======
	var usersRef = firebase.database().ref("users/" + userId);
	usersRef.push
	({
		"city":city,
		"disciplines":disciplines,
		"branches":branches,
		"skill level":skillLevel
	});
	window.open("login.html","_self");
>>>>>>> 4edebbf87bd6b8254d2c9e0ba9bbeb418bc473aa
}
});
}
var getDiscipline = function()
{

	$('.section1').addClass('hidden');
	$('.section2').removeClass('hidden');
	var disciplineTag = document.querySelectorAll(".disciplines");
	
	var disciplines = new Array();

	

	for (var i = disciplineTag.length - 1; i >= 0; i--) {
		if(disciplineTag[i].checked)
			disciplines.push(disciplineTag[i].value);
	}

	for(var i=disciplines.length - 1 ; i>=0 ; i--)
	{
		if(disciplines[i]=="Engineering")
		{
			$('.med').addClass('hidden');
		}
		else if(disciplines[i]=="Medical")
		{
			$('.eng').addClass('hidden');
		}
	}
}	

var getDiscipline = function()
{

	$('.section1').addClass('hidden');
	$('.section2').removeClass('hidden');
	var disciplineTag = document.querySelectorAll(".disciplines");
	
	var disciplines = new Array();

	

	for (var i = disciplineTag.length - 1; i >= 0; i--) {
		if(disciplineTag[i].checked)
			disciplines.push(disciplineTag[i].value);
	}

	for(var i=disciplines.length - 1 ; i>=0 ; i--)
	{
		if(disciplines[i]=="Engineering")
		{
			$('.med').addClass('hidden');
		}
		else if(disciplines[i]=="Medical")
		{
			$('.eng').addClass('hidden');
		}
	}
}	

