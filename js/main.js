$(function (){
		$('#pinBoot').feeds({
			feeds : {
				DWNews : 'https://script.google.com/macros/s/AKfycbxo-QBRj9dHjgOkiKKNMHWIQtXDC8SW01hngyRzIyKPWR-a8zw/exec?668110474882498560',
				DWAfricaNews : 'https://script.google.com/macros/s/AKfycbxgtF8uWZbyS6IPAo5W5Ku2EEig4vlUY3AsCpQuCDvsaYzoyRU/exec?668112689433026560',
				Influencers : 'https://script.google.com/macros/s/AKfycby05Cf6ZR8IgBRqiuuyZilwKBVSox9vV11och8hLaxTuEz8paY/exec?668121264662429697',
				Content : 'http://rss.dw.com/rdf/rss-en-world',
				
			},
			xml: false,
			
			max: 5,
			preprocess : function(feed) {
				// Using moment.js to diplay dates as time ago
				this.publishedDate = moment(this.publishedDate).add(6,'hours').fromNow();
			},
			entryTemplate : 'entryTmpl',
			onComplete : function(entries) {
				$(this).find('a').attr('target', '_blank');
			}
		});
			
});