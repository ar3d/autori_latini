$(document).ready(function() {

	$(".popup-me_1").click(function(){

		pop_init_1( "Marcus Porcius Cato, chiamato anche Catone il Censore (Cato Censor), Catone il Sapiente (Cato Sapiens), Catone l'Antico (Cato Priscus), Catone il Vecchio (Cato Maior), nacque a Tusculum, nella zona dei Colli Romani, nel 234 a.C. circa e morì a Roma nel 149 a.C. Fu Politico, generale e scrittore romano." );

	});

});

function pop_init_1( my_content ) {

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