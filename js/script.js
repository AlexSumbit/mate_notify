$(document).ready(function() {
	

	$("header .header-container").fadeIn(500, function(){
		$("header .hand-container").animate({
			'right': '50px'
		}, 1000);
	});



	$("main .comments-container .faces-container .face").click(function(e){
		var $this = $(e.currentTarget);
		var text =  $this.data('text');

		$("#comment .text").html("“" + text + "”");
		$("#comment .name").html($this.data('name'));
	});
});