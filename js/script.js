$(document).ready(function(){

	//append container
	var shuffleContainer = '<span id="shuffle-container">x</span>';
	$('#container').append(shuffleContainer);
	var $container = $("#shuffle-container");
	//set up descriptors array
	var descriptorsArray = ["technologist;","designer;","poor cook;"];
	var descriptorIndex = 0;
	//shuffle the letters
	setInterval(function(){
		//console.log("index is " + descriptorIndex);
		$container.shuffleLetters({"text": descriptorsArray[descriptorIndex]});
		descriptorIndex++;
		if(descriptorIndex == descriptorsArray.length){
			descriptorIndex = 0;
		}

	}, 3000);
	
});