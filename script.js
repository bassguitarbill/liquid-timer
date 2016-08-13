$(function(){
	var maxWidth = $(".inverseColor")[0].offsetWidth;
	var midWidth = maxWidth / 2;
	var goingUp = true;
		$(".normalColor").text("wha???");
	
	setInterval(function() {
		$(".normalColor").text("huh???");
		let width = Number($(".normalColor").css("width").split("px")[0]);
		if(goingUp && width > maxWidth){
			goingUp = false;
		} else if(!goingUp && width <= 0) {
			goingUp = true;
		}
		$(".normalColor").css("width", (width + (goingUp ? 1 : -1)) + "px");
	}, 10);
});