//Scrollspy
jQuery('.nav a').on( 'click', function(event) {
	var target 	= jQuery( this );
    var element = target.attr('href');

    jQuery('.nav a').removeClass('active')
    target.addClass('active');

    jQuery("body, html").animate({ 
      scrollTop: jQuery( element ).offset().top - 90	
    }, 800);

});
//For event one

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('e1');
img.onclick = function(){
    $("#detailsModal").modal();
}

//For event two
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('e2');
img.onclick = function(){
    $("#detailsModal2").modal();
}




