/* Main JS */

$(function() {

	var angle = 0;
	setInterval(function() {
		if (angle < 360) { 
			angle++
		} else {
			angle = 0;
		}
		$('#box1').cssRotate(angle);
	},20);

});