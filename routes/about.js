var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	selected = "color:white;";

	var tpitms = [
	    {menuName:"About", mStyle:selected, defaultLink:"/about"}, 
	   	];

	var sbitms = [];

	res.render('about',{title:'About', 
						layout:'layout', 
						aboutSelect:selected, 
						topItems: tpitms,
						subItems: sbitms,
					});
});

module.exports = router;