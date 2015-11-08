var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var myEmail = 'cbrown1616@hotmail.com'
var gm = "shadoweast@gmail.com"
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: gm,
        pass: 'lurker16'
    }
});

var selected = "color:white;";
var header = "GET IN TOUCH" ;
var displayForm = true;

router.post('/', function (req, res) {
    // handle a post request to this route

    var success = true;
    var errmsg = ""
    var email = "Email";
	var tpitms = [
	    {menuName:"Contact", mStyle:selected, defaultLink:"/contact"}, 
	   	];

	var sbitms = [];

	// validate email form
	var eml = req.body.email;
	var subj = req.body.subject
	var msg = req.body.message
	var atpos = eml.indexOf("@");
	var dotpos = eml.lastIndexOf(".");
	if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=eml.length) {
		errmsg = "Not a valid e-mail address";
		success = false;
	}

	if (success == false) {
		email = eml;
	} else {
		//validation a success, so send the email
		mailObj = {
			from: eml,
		    to: myEmail,
		    subject: "FROM: "+eml+" | "+subj,
		    text: msg
		};

		transporter.sendMail(mailObj, function(err, res){
		    console.log(err, "Message sent: ");
		    transporter.close();
    	});

		header = "THANKS! I'LL BE IN TOUCH :)";
		displayForm = false;
	}

    res.render('contact',{title:'Contact', 
						layout:'layout', 
						contactSelect:selected, 
						topItems: tpitms,
						subItems: sbitms,
						header: header,
						email: email,
						err: errmsg,
						displayForm: displayForm,
					});

});

router.get('/', function(req, res) {
	// handle a get request to this route

	var tpitms = [
	    {menuName:"Contact", mStyle:selected, defaultLink:"/contact"}, 
	   	];

	var sbitms = [];
	var email = "Email";

	res.render('contact',{title:'Contact', 
						layout:'layout', 
						contactSelect:selected, 
						topItems: tpitms,
						subItems: sbitms,
						header: header,
						email: email,
						displayForm: displayForm,
					});

});

module.exports = router;