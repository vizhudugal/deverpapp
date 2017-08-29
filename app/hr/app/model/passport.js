// config/passport.js

// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;

// load up the user model
var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var dbconfig = require('./login_database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);
// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
      if(!user){
        } else
      {
        done(null,user[0].employee_id);
      }
    });

    // used to deserialize the user
    passport.deserializeUser(function(employee_id, done) {
        connection.query("SELECT * FROM md_hr_employee WHERE employee_id = ? ",[employee_id], function(err, rows){
            done(err, rows[0]);
        });
    });

//     // =========================================================================
//     // LOCAL SIGNUP ============================================================
//     // =========================================================================
//     // we are using named strategies since we have one for login and one for signup
//     // by default, if there was no name, it would just be called 'local'
//
//     passport.use(
//         'local-signup',
//         new LocalStrategy({
//             // by default, local strategy uses username and password, we will override with email
//             usernameField : 'username',
//             passwordField : 'password',
//             passReqToCallback : true // allows us to pass back the entire request to the callback
//         },
//         function(req, username, password, done) {
//             // find a user whose email is the same as the forms email
//             // we are checking to see if the user trying to login already exists
//             connection.query("SELECT * FROM users WHERE username = ?",[username], function(err, rows) {
//                 if (err)
//                     return done(err);
//                 if (rows.length) {
//                     return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
//                 } else {
//                     // if there is no user with that username
//                     // create the user
//                     var newUserMysql = {
//                         username: username,
//                         password: bcrypt.hashSync(password, null, null)  // use the generateHash function in our user model
//                     };
//
//                     //var insertQuery = "";
// console.log(" newUserMysql.username"+ newUserMysql.username+ "newUserMysql.password  "+newUserMysql.password);
//                     connection.query('INSERT INTO users ( username, password ) values ("'+newUserMysql.username+'","'+newUserMysql.password+'")',function(err, rows) {
//                         newUserMysql.id = rows.insertId;
//
//                         return done(null, newUserMysql);
//                     });
//                 }
//             });
//         })
//     );

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use(
        'local-login',
        new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'username',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) { // callback with email and password from our form
          connection.query("select t1.*,t2.*,t3.*, t4.* from md_hr_employee as t1 left join md_hr_employee_role_department as t2 on t1.employee_id=t2.employee_id left join md_hr_role_menupage_permission as t3 on t3.role_id = t2.role_id left join md_hr_menu_page as t4 on t4.menu_id = t3.menu_id where t1.username= ?",[username], function(err, rows){
                if (err){
                    return done(err);}
                if (!rows.length) {
                    return done(null, false, "No user found."); // req.flash is the way to set flashdata using connect-flash
                }

                // if the user is found but the password is wrong
                if (!bcrypt.compareSync(password, rows[0].password)){
                    return done(null,false, "Oops! Wrong password."); // create the loginMessage and save it to session as flashdata
                  }
                // all is well, return successful user
                return done(null, rows);
            });
        })
    );
};
