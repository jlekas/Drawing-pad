$(document).ready(function(){
	var n = 80;
	makeGrid(n);
	//resets board
	$('#Reset').click(function(){
		reset(n);
		$('.block').mouseenter(function() {
			$(this).css("background-color", "purple");
		});
	});

	//makes blocks passed through purple
	$('.block').mouseenter(function() {
		$(this).css("background-color", "purple");
	});
	//random color effect
	$('#Random').click(function(){
		$('.block').mouseenter(function() {
			$(this).css("background-color", randomColor());
		});
	});
	//clears board
	$('#Clear').click(function(){
		$('.block').css("background-color", "white");
	});
	//different opacity effect
	$('#Opacity').click(function(){
		$('.block').mouseover(function(){
			var curOpac = $(this).css("opacity");
			if(curOpac != 0)
				$(this).css("opacity", curOpac - .1);
		});
	});
	//trail effect
	$('#Trail').click(function(){
		$('.block').css("background-color", "white");
		$('.block').mouseenter(function() {
			$(this).fadeTo(200, 1);
		});
		$('.block').mouseleave(function(){
			$(this).fadeTo(0, 0);
		});
	});
	$('#Erase').click(function(){
		$('.block').mouseenter(function() {
			$(this).css("background-color", "white");
		});
	})
});

//make grid
var makeGrid = function(n){
	var blockwidth = $('#Grid').width() / n;
	var blockheight = $('#Grid').height() / n;
	$('#Grid').html('');
	for (var row = 0; row < n; row++){
		var $row = $('<div class = "row"></div>');
		$('#Grid').append($row);
		for (var col = 0; col < n; col++){
			var $block = $('<div class="block"></div>');
			$('#Grid').append($block);
		}
	}
	$('.block').height(blockheight);
	$('.block').width(blockwidth);
}

//gets random colors for random color effect
var randomColor = function(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var rgb = red + "," + green + "," + blue;
	return "rgb("  + rgb + ")";
}

//resets the board so all pieces are white
var reset = function(n){
	var n = prompt("How many rows would you like");
	console.log(n);
	if (isNaN(n) || n <= 0 || n > 150)
		n = 70;
	makeGrid(n);
}