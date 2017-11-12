jQuery(document).ready(function($){
    		//open/close box
		$('.box-trigger').on('click', function(event){
            event.preventDefault();
            if ($('.box-container').hasClass('open')) {
                $('.box-container').removeClass('open');
            }else{
                $('.box-container').addClass('open');
            }
			
        });

 });
