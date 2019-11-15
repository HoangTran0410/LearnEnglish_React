
module.exports = function (app) {
    //Begin user
    app.use(require('./api/user/Login/auth'));
    app.use(require('./api/user/Logout/index'));
    app.use(require('./api/user/SignUp/register'));
    
    //End user
    
    //Begin course
    app.use(require('./api/course/getListCourse'));
    app.use(require('./api/course/getCourseDetail/getCourse'));
    //End course

    //Begin lecture
    app.use(require('./api/course/getCourseDetail/getListLecture'));
    //End lecture
    //Begin topic

    //End topic

    //Begin 
    //End
}