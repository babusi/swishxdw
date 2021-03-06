$( document ).ready(function() {

		window.sr = new scrollReveal();
	
		$('#pinBoot').feeds({
			feeds : {
				DWNews : 'https://script.google.com/macros/s/AKfycbxo-QBRj9dHjgOkiKKNMHWIQtXDC8SW01hngyRzIyKPWR-a8zw/exec?668110474882498560',
				DWAfricaNews : 'https://script.google.com/macros/s/AKfycbxo-QBRj9dHjgOkiKKNMHWIQtXDC8SW01hngyRzIyKPWR-a8zw/exec?668112689433026560',
				Influencers : 'https://script.google.com/macros/s/AKfycbxo-QBRj9dHjgOkiKKNMHWIQtXDC8SW01hngyRzIyKPWR-a8zw/exec?668318940398006272',
				Content : 'http://rss.dw.com/rdf/rss-en-world',
				
			},
			xml: false,
			
			max: 15,
			preprocess : function(feed) {
				// Using moment.js to diplay dates as time ago
				this.publishedDate = moment(this.publishedDate).add(6,'hours').fromNow();
			},
			entryTemplate : 'entryTmpl',
			onComplete : function(entries) {
				$(this).find('a').attr('target', '_blank');
					var postsnum = $('.singlepost').length
				console.log($(".singlepost").length);
				$('.num').html(postsnum);
				
				$('.publish-btn').click(function(){
        		$(this).html('<span class=\"lnr lnr-thumbs-up\"></span> Published').addClass('published').removeClass('publish-btn');
    			});
				
				
						}
					});
		
		
		
		
		
		// Filters
		
		
		
		
		$('.navbar-nav li').click(function () {

        $('.navbar-nav li').removeClass('active');
        $(this).addClass('active');

        var category = $(this).attr('data-category');
        $('.singlepost').css('opacity','1');

        if (category !== 'all') {
            $('.singlepost').each(function () {

                if (!$(this).hasClass(category)) {
                    $(this).css('opacity','.3')
                }

	
				});

            
			}
	
		});


		
			
});


$(window).load(function(){
  $('#preload_wrapper').delay(1500).fadeOut('slow',function(){$(this).remove();});

});