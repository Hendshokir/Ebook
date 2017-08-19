$(document).ready(function(){
    
    
    //smooth scroll to section
	$('.navbar-nav li a').click(function(){
		$('html,body').animate({
			scrollTop: $('#'+$(this).data('value')).offset().top-100
		},1000);
	});
    
    $(window).scroll(function(){
        if( $(this).scrollTop() >=100){
            $('.navbar-default').show();
        }
        if( $(this).scrollTop() ==0){
            $('.navbar-default').hide();
        }
    });
    
    // owl Carousel
	$('.owl-carousel').owlCarousel({
		//autoplay : true,
		loop : true,
		margin : 10,
		responsive : {
			0 : {items : 1},
			600 : {items : 2},
			1000 : {items : 2}
		}
	});
});