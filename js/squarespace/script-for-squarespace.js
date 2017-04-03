$(document).ready(function(){
	//append containers; works both for wide and mobile screens
	var shuffleContainer = '<span class="shuffle-container">x</span>';
	var $shuffle = $(shuffleContainer);
	//shuffle container
	var $container = $(".shuffle-container");
	//clone to ensure jquery targets both DOM containers
	$shuffle.clone().appendTo('.site-title');
	$shuffle.clone().appendTo('.mobile-site-title');
	//descriptors
	var descriptorsArray = ["technologist;","designer;","good music;","poor cooking;"];
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