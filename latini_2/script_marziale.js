$(document).ready(function() {

	$(".popup-me_3").click(function(){

		pop_init_3( "Marco Valerio Marziale nacque ad Augusta Bilbilis, l'odierna Calatayud, in Spagna, il 1º marzo 38 o 41 d.C. dove morì nel 104 d.C. Fu poeta romano ed è ritenuto il più importante epigrammista in lingua latina." );

	});

});

function pop_init_3( my_content ) {

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