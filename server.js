/**
  Loading all dependcies.
**/
var express         =	  require("express");
var session         =	  require('express-session');
var bodyParser      =	  require('body-parser');
var cookieParser    =	  require('cookie-parser');
var path            =	  require("path");
var app             =	  express();
var router          =	  express.Router();

app.use(session({
		secret: 'ssshhhhh',
		saveUninitialized: false,
		resave: false
}));

app.use(cookieParser("secretSign#143_!223"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/**
    --- Router Code begins here.
**/

router.get('/',function(req,res){
	if(req.session.key){
		req.session.key++;
	}else{
		req.session.key = 1;
	}
	var count = req.session.key;
	res.end('Nodejs Session Counter App. You have visited this page ' + count + ' times.');
});





app.use('/',router);

app.listen(3000,function(){
	console.log("I am running at 3000");
});
