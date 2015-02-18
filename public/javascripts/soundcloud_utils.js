var scGalleryEnum = Object.freeze({ON: 'on', OFF: 'off', SPEED: 500});

function buildSCIframe() {
	/* Build iframes for sound cloud widgets
	*/
	var iframe = document.createElement("IFRAME");
	iframe.setAttribute("width", "75%");
	iframe.setAttribute("height", "166");
	iframe.setAttribute("scrolling", "no");
	iframe.setAttribute("frameborder", "no");
	iframe.style.margin = "0 auto 2em auto";
	iframe.setAttribute("src", "https://w.soundcloud.com/player/?url=[urltext]&show_artwork=true");
	return iframe
}

function toggleElems(state) {
	/* Toggle vairous element visibllities on playback
		state 	: on or off state for elems bound to hype document listener 
	*/
	$('#pressPlay').toggle(scGalleryEnum.SPEED);
	$('#smile').toggle(scGalleryEnum.SPEED);
	window.opacityToggle = state;
	window.opacityToggleBig = state;
	var gear = $('#mainLogoGear');
	var logo = $('#mainLogo');
	if (gear.hasClass("spinner")) {
		gear.removeClass('spinner');
		logo.css({'background-image':'url("/../images/logo_top_layer_gray.png")'});
	} else {
		gear.addClass("spinner");
		logo.css({'background-image':'url("/../images/logo_top_layer_purple.png")'});
	}
}

function setOnScroll() {
	window.onscroll = function (event) {
	  // called when the window is scrolled.
	  // dynamic repositioning of sc central lights
	  var isVisible = $( "#soundcloudvizlights_hype_container" ).is( ":visible" );
	  if (isVisible) {
		  var sc = document.getElementById('soundcloudvizlights_hype_container');
		  var scBottom = $('#footer').offset().top - $('#whiteContainer').offset().top - 134;
		  sc.style.bottom = scBottom+"px";
	  }
	}
}

function createSoundcloudGallery(container) {
	/*SET UP SOUNDCLOUD GALLERY 
		container 	: div to contain soundcloud widgets
	*/

	setOnScroll();
	//get firebase db ref
	var myFirebaseRef = new Firebase("https://intense-fire-3188.firebaseio.com/");
	var snapCache = null;

	// init soundcloud api
	var client_id = 'cf78dd18275501f9645c0f40f7c2dd31';
	SC.initialize({
	  client_id: client_id
	});

	var tracksRef = myFirebaseRef.child("tracks");
	var snapCache = null;
	$('#'+container).addClass('scrollY').append($('#soundcloudvizlightsbig_hype_container').show());
	//cache the db data so it can be synchronously updated as per the for loop below...
	tracksRef.once ("value", function(snapshot) {
		snapCache = snapshot.val();
		// console.log("snapCache data - "+JSON.stringify(snapCache));
		if (snapCache) {
			SC.get('/users/metakritalgenus/tracks', function(tracks) {
				console.log("Processing snap data");
		        for (var i = 0; i < tracks.length; i++) {
		          console.log(tracks[i].title);
			      console.log(tracks[i].uri);
			      var last = false;	
			      if (i == tracks.length-1) {last = true;}
					
				  //create iframe for widget
		          var iframe = buildSCIframe();
		          var widget       = SC.Widget(iframe);
			      var newSoundUrl = tracks[i].uri;
			      var permalink = tracks[i].permalink;

			      //update the uri
				  tracksRef.child(permalink).update({'uri':newSoundUrl});

				  // Bind widget events
				  widget.bind(SC.Widget.Events.PLAY, function(sound) {
				  	toggleElems(scGalleryEnum.ON);
				  });

				  widget.bind(SC.Widget.Events.PAUSE, function(sound) {
				  	toggleElems(scGalleryEnum.OFF);
				  });

				  widget.bind(SC.Widget.Events.FINISH, function(sound) {
				  	//completion states separated for consistency
				  	window.opacityToggle = scGalleryEnum.OFF;
				  	window.opacityToggleBig = scGalleryEnum.OFF;
				  	$('#pressPlay').show(scGalleryEnum.SPEED);
					$('#smile').hide(scGalleryEnum.SPEED);
					$('#mainLogoGear').removeClassClass('spinner');
				  });

				  var dampen = 0.1; // make the effect more apparent on downshifts
				  var prev = 0.0;
				  var position;
				  widget.bind(SC.Widget.Events.PLAY_PROGRESS, function(sound) {
				  	// get information about currently playing sound and animate visuals
				    var wavedata = snapCache[permalink]['wavedata'].replace('[','').replace(']','').split(",");
				    position = Math.floor(sound.relativePosition*wavedata.length)-1;
				    position = (position < 0) ? 0:position;
				    var cur = parseFloat(wavedata[position]);
				    if (cur<prev) {
					   	window.timelineTime = (cur-dampen < 0) ? 0:cur-dampen;
				    } else {
					   	window.timelineTime = cur;
				    }
				    prev = window.timelineTime;
				  });

				  if (last) {
				  	widget.bind(SC.Widget.Events.READY, function(){
				  		$('#scTitle').show(scGalleryEnum.SPEED);
				  	});
				  }

				  // load new widget
				  widget.load(newSoundUrl+"&color=8428BF", {
				  	show_artwork: true,
				  });
					
				  //add widget to UI container
				  $('#'+container).append(iframe);

		    	}
		    });
		}
	});
}