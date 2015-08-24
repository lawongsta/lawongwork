$(document).ready(startApp);

function startApp(){

	$('li#yellowButton').hover(switchYellow);
	$('li#purpleButton').hover(switchPurple);
	$('li#grayButton').click(switchGray);
	$('li#whiteButton').click(switchWhite);

}

function switchYellow(){

	//turn background yellow
	$('body').css('backgroundColor', 'yellow');
	//make text black
	$('body').css('color', 'black');
}

function switchPurple(){
	//turn background purple
	$('body').css('backgroundColor','purple')
	//make text white
	$('body').css('color','white');
}

function switchGray(){
	// turn background gray
	$('body').css('backgroundColor','gray')
	// make text black
	$('body').css('color','black');
}

function switchWhite(){
	// turn background white
	$('body').css('backgroundColor','white')
	// make text black
	$('body').css('color', 'black');
}