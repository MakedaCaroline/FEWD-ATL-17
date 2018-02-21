$(document).ready(function() {

	var userFeed = new Instafeed({
		get:'user',
		userId: '31178815',
		limit: 25,
		resolution: 'standard_resolution',
		accessToken: '31178815.1677ed0.ab46f67f5a014bc08df5297e9ebbdf88',
		sortyBy: 'most-recent',
		template: '<div class="gallery><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
});

	userFeed.run();


});