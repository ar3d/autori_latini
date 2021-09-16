$(document).ready(function() {

	$(".popup-me_2").click(function(){

		pop_init_2( "Gaius Plinius Secundus, conosciuto anche come Plinio il Vecchio, nacque a Como il 23 d.C. e morì a Stabia il 25 agosto o il 25 ottobre del 79 d.C. durante l'eruzione del Vesuvio. Fu scrittore, naturalista, comandante militare e governatore provinciale romano." );

	});

});

function pop_init_2( my_content ) {

	var pop_height = 'auto';
        var pop_html = '<div class="pop-bg"></div><div class="pop-wrap"><p class="pop-x">X</p><div class="pop-content"></div></div>';

	$("model-viewer").prepend( pop_html );

	$(".pop-wrap").animate({ "height" : pop_height }, 250).click(function(event){
		event.stopPropagation();
	});

	$(".pop-bg, .pop-x").bind("click", function(event) {
		pop_close();
	});

	$(".pop-content").text(my_content);

}

function pop_close() {
	$(".pop-bg, .pop-wrap").remove();
	$("model-viewer").unbind("click");
}