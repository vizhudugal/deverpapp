// app/routes.js

var path = require("path");

module.exports = function(app, passport) {

console.log(" Entering Passport Login router");
	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	// app.get('/', function(req, res) {
	// 	res.render('index.ejs'); // load the index.ejs file
	// });

	// =====================================
	// LOGIN ===============================
	// =====================================
	// show the login form
	// app.get('/login', function(req, res) {
	// 	// render the page and pass in any flash data if it exists
	// 	res.render('login', { message: req.flash('loginMessage') });
	// 	// var message=req.flash('loginMessage');
	// 	// console.log(" Login Message"+message);
	// });

	// // process the login form
	// app.post('/login', passport.authenticate('local-login', {
  //           successRedirect : '/profile', // redirect to the secure profile section
  //           failureRedirect : '/login', // redirect back to the signup page if there is an error
  //           failureFlash : true // allow flash messages
	// 	}),
  //       function(req, res) {
  //           console.log("hello");
  //           if (req.body.remember) {
  //             req.session.cookie.maxAge = 1000 * 60 * 3;
  //           } else {
  //             req.session.cookie.expires = false;
  //           }
  //       res.redirect('/');
  //   });

		// process the login form
		app.post('/login',  function(req, res, next) {
			//console.log(" info "+ info);
		  // generate the authenticate method and pass the req/res
		  passport.authenticate('local-login', function(err, user, info) {
		    if (err) {
					 return next(err);
				 }
		    if (!user) {
					//res.redirect('/');
					res.json({"returnval":"Invalid!"});
				} else if(user){
		    // req / res held in closure
				    req.logIn(user, function(err) {
				      if (err) {
								return next(err); }
				     //res.status(200).json({"returnval":user });
						 res.json({"returnval":user});
						});
         }

		  })(req, res, next);

});
	// // =====================================
	// // SIGNUP ==============================
	// // =====================================
	// // show the signup form
	// app.get('/signup', function(req, res) {
	// 	// render the page and pass in any flash data if it exists
	// 	res.render('signup.ejs', { message: req.flash('signupMessage') });
	// });
	//
	// // process the signup form
	// app.post('/signup', passport.authenticate('local-signup', {
	// 	successRedirect : '/profile', // redirect to the secure profile section
	// 	failureRedirect : '/signup', // redirect back to the signup page if there is an error
	// 	failureFlash : true // allow flash messages
	// }));
	//
	// =====================================
	// PROFILE SECTION =========================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user // get the user out of session and pass to template

		});
		// console.log("./ = %s", path.resolve("./"));
		// console.log("__dirname = %s", path.resolve(__dirname));
		// return res.redirect('../elements/home-page/home-page.html');
	});

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};

// route middleware to make sure
function isLoggedIn(req, res, next) {
	// if user is authenticated in the session, carry on
	if (req.isAuthenticated()){
		return next();
	}
	// if they aren't redirect them to the home page
	res.redirect('/');
}
