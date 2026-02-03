const User = require("../models/user");

// Render signUp page
module.exports.renderSignUpPage = (req, res)=>{
    res.render("users/signup.ejs");
};

// sign up
module.exports.signUp = async(req, res) => {
    try {
       let {username, email, password} = req.body;
      const newUser = new User({email, username});
      const registeredUser = await User.register(newUser, password);
      req.login(registeredUser, (err) =>{
        if(err) {
            return next(err);
        } 
        req.flash("success", "User register successfully");
        res.redirect("/listings");
      } );
    } catch(e){
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

// render login page
module.exports.renderLoginPage =  (req, res) =>{
    res.render("users/login.ejs");
};

// login
module.exports.login = (req, res) => {
       req.flash("success", "Welcome back to wanderlust!");
       let redirectUrl = res.locals.redirectUrl || "/listings";
       res.redirect("/listings");
};

// logout 
module.exports.logOut = (req, res) =>{
    req.logout((err) => {
        if(err) {
          return  next(err);
        }
        req.flash("success", "you are logged out!");
        res.redirect("/listings");
    });
};