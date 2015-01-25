var express = require('express');
var router = express.Router();
var scwaveform = require('soundcloud-waveform');
var nodeFirebase = require("firebase");

function syncSoundcloudWavedata() {
	/* Get waveform data (as array) from the soundcloud uri using 
		soundcloud waveform api.
	*/
	var client_id = 'cf78dd18275501f9645c0f40f7c2dd31';
	var myFirebaseRef = new nodeFirebase("https://intense-fire-3188.firebaseio.com/");
	var tracksRef = myFirebaseRef.child("tracks");
	tracksRef.on("value", function(snapshot) {
		//this function is called asynchronously!!
		snapshot.forEach(function(childSnapshot) {
	  		var key = childSnapshot.key()
		  	var trackData = childSnapshot.val()
		  	if (trackData && !trackData.hasOwnProperty('wavedata'))  {
				var uri = trackData['uri'];
	  			console.log('Track '+key+' has no wavedata! uri: '+uri);
		  		try {
		  			scwaveform(client_id, uri, function(err, wavedata) {
						if (wavedata){ tracksRef.child(key).update({"wavedata":wavedata});}
					});
			  	} catch(err) {
			  		console.log('Could not fetch wavedata for uri: '+uri);
			  		console.log(err.message);
			  	}
		  	}
		});
	});
}

router.get('/:id1/:id2', function(req, res) {
	id1 = req.params.id1;
	id2 = req.params.id2;
	selected = "color:white;";

	//TODO: clean all this stuff up. Probably can be done better with backbone/express....have to learn backbone first :)
	var fullMenu = [
		{menuName:"TECHNICAL", mStyle:"", defaultLink:"/work/technical/code",
			sb:[
				{menuName:"CODE", mStyle:selected, link:"/work/technical/code", gallery:"code_gallery.xml"}, 
			]
		}, 
	    {menuName:"VISUAL", mStyle:"", defaultLink:"/work/visual/ux_design",
	    	sb:[
				{menuName:"UX DESIGN", mStyle:"", link:"/work/visual/ux_design", gallery:"ux_gallery.xml"}, 
	    		{menuName:"GRAPHIC DESIGN", mStyle:"", link:"/work/visual/graphic_design", gallery:"graphics_gallery.xml"}, 
			]
		},
	    {menuName:"AUDIBLE", mStyle:"", defaultLink:"/work/audible/beats",
	    	sb:[
				{menuName:"SOUNDS", mStyle:"", link:"/work/audible/sounds"}, 
	    		{menuName:"BEATS", mStyle:"", link:"/work/audible/beats"}, 
			]
		}, 
	];

	var tpitms = [
	    {menuName:"TECHNICAL", mStyle:"", defaultLink:"/work/technical/code"}, 
	    {menuName:"VISUAL", mStyle:"", defaultLink:"/work/visual/ux_design"},
	    {menuName:"AUDIBLE", mStyle:"", defaultLink:"/work/audible/beats"}, 
	];

	var sbitms = [];

	for(var i=0; i<tpitms.length; i++) {
		if(tpitms[i].menuName == id1.toUpperCase()) {
			tpitms[i].mStyle = selected;

			if(tpitms[i].menuName == "TECHNICAL") {
			sbitms = [
				{menuName:"CODE", mStyle:selected, link:"/work/technical/code", gallery:"code_gallery.xml"}, 
			];
		} else if(tpitms[i].menuName == "VISUAL") {
			sbitms = [
				{menuName:"UX DESIGN", mStyle:"", link:"/work/visual/ux_design", gallery:"ux_gallery.xml"}, 
	    		{menuName:"GRAPHIC DESIGN", mStyle:"", link:"/work/visual/graphic_design", gallery:"graphics_gallery.xml"}, 
			];
			for(var n=0; n<sbitms.length; n++) {
				if(sbitms[n].menuName == id2.toUpperCase().replace("_"," ")) {
					sbitms[n].mStyle = selected;
				}
			}
		} else if(tpitms[i].menuName == "AUDIBLE") {
			sbitms = [
				{menuName:"SOUNDS", mStyle:"", link:"/work/audible/sounds"}, 
	    		{menuName:"BEATS", mStyle:"", link:"/work/audible/beats", gallery:"soundcloud"}, 
			];
			for(var x=0; x<sbitms.length; x++) {
				if(sbitms[x].menuName == id2.toUpperCase()) {
					sbitms[x].mStyle = selected;
					}
				}
			}
		}
	}

	glly = ""
	for(var z=0; z < sbitms.length; z++) {
		if (sbitms[z].mStyle == selected) {
			glly = sbitms[z].gallery;
		}
	}

	//sync soundcloud wavedata
	syncSoundcloudWavedata();

	console.log('Done processing from server.');
	res.render('work',{title:'Work', 
						layout:'layout', 
						workSelect:selected, 
						topItems: tpitms,
						subItems: sbitms,
						gallery:glly,
						fullMenuConfig:fullMenu,
					});
});

module.exports = router;