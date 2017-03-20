

$(document).ready(function(){ 

	var $circle = $("svg circle.brown-circle");
	var $progressText = $(".progress-container p");
	var perim = $circle.attr('r')*2*Math.PI;
	
	var tween = new TweenMax(
		$circle,
		3,
		{
			"stroke-dashoffset":0,
			paused:true,
			ease: Power2.easeInOut,
			onUpdate: function(){
				var prog = Math.floor( this.progress()*100 );
				console.log(prog);
				$progressText.html(prog+"%");
			},
			onComplete: function(){
				$progressText.html("");
			},
			onReverseComplete: function(){
				$progressText.html("");	
			}
		}
	);

	$circle.attr("stroke-dasharray",perim);
	$circle.attr("stroke-dashoffset",perim);




	$(".circle-container svg").mousedown(function(){
		tween.play();
	});
	
	$(".circle-container svg").mouseup(function(){
		tween.reverse();
	});

});	
