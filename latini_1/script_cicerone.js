$(document).ready(function() {

	$(".popup-me_2").click(function(){

		pop_init_2( "Marco Tullio Cicerone nacque ad Arpino (FR) il 3 gennaio 106 a.C. e morì a Formia (LT) il 7 dicembre 43 a.C. Fu avvocato, politico, scrittore, oratore e filosofo romano." );

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