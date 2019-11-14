
module.exports = function (app) {
    //Begin user
    app.use(require('./api/user/Login/auth'));
    app.use(require('./api/user/Logout/index'));
    app.use(require('./api/user/SignUp/register'));
    
    //End user
    
    //Begin course
    app.use(require('./api/course/getCourse/getCourse'));
    //End course

    //Begin topic

    //End topic

    //Begin 
    //End
}