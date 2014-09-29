var express = require('express');
var router = express.Router();

router.get('/:id1/:id2', function(req, res) {
	id1 = req.params.id1;
	id2 = req.params.id2;
	selected = "color:white;";

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
	    		{menuName:"BEATS", mStyle:"", link:"/work/audible/beats"}, 
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