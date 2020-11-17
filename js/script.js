// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************

(function(){
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	var i=0;
	for (i=0; i<names.length; i++){
	  	if (names[i].charAt(0).toLowerCase() =="j" ){	 	
	 		byeSpeaker.speak(names[i]);
		  } else {
		  	helloSpeaker.speak(names[i]);
	  		}
	}
})();




