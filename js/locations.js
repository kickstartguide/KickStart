var map;
var GTU  = {lat: 23.106167, lng: 72.593713};
var mapInitializer = {center: GTU,zoom: 15};
var mapOnDoc = document.getElementById('map');
var places= ["chandkheda","maninagar"];

function initMap() 
{
  firebase.auth().onAuthStateChanged(function(user) {
  var user = firebase.auth().currentUser;
  if (user) {
    
    var userId = user.uid;

var ref = firebase.database().ref("users/"+userId+"/");
ref.on("value", function(snapshot) {
    var i=snapshot.val().city;
    console.log(i);
},  function (error) {
    alert("Error: " + error.code);
});
}});
  

  map = new google.maps.Map(mapOnDoc, mapInitializer);
  for (var i = places.length - 1; i >= 0; i--) 
  {
    if(places[i]=="chandkheda")
    {
      console.log( "hi chandkheda");
      IANT={lat:23.109284,lng: 72.584291};
      CADD={lat:23.109174,lng: 72.590597};
      TEKSUN={lat:23.104338,lng:72.593939};
      ITS={lat:23.054430,lng:72.553570};
      ALPHA={lat:23.117866,lng:72.600426};
      JAMSAB={lat:23.066010,lng:72.561974};
      ARENA={lat:23.074854,lng:72.568840};
      TOPS={lat:23.079276,lng:72.535881};
      INFOBIT={lat:23.048320,lng:72.593216};
      addMarker(IANT);
      addMarker(CADD);
      addMarker(TEKSUN);
      addMarker(ITS);
      addMarker(ALPHA);
      addMarker(JAMSAB);
      addMarker(ARENA);
      addMarker(TOPS);
      addMarker(INFOBIT);
      map.setCenter({lat: 22.995107,lng: 72.603119});
    }  

    if (places[i]=="maninagar") 
    {
      console.log( "hi maninagar");
      var NIITMAN={lat:22.997670, lng: 72.605415};
      var TOPSMAN={lat:22.997335, lng: 72.608989};
      var PRAKSHALIT={lat:22.995673, lng:72.612484};
      addMarker(NIITMAN);
      addMarker(TOPSMAN);
      addMarker(PRAKSHALIT);
      map.setCenter({lat: 23.108123,lng: 72.594643});
    }
    
  }
  

      

        

}

var addMarker = function(positionToAdd)
{
  var marker= new google.maps.Marker(
                                      {
                                        position: positionToAdd,
                                        map: map,
                                        title: 'GTU building'
                                      }
                                    );
}