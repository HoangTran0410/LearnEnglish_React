const cors = require('cors');
module.exports = function (app) {
    app.use(cors());
    //Begin user
    app.use(require('./api/user/Login/auth'));
    app.use(require('./api/user/Logout/index'));
    app.use(require('./api/user/SignUp/register'));
    app.use(require('./api/user/Profile/getProfile'));
    app.use(require('./api/user/Profile/editProfile'));    
    //End user
    
    //Begin course
    app.use(require('./api/course/getListCourse'));
    app.use(require('./api/course/getCourseDetail/getCourse'));
    app.use(require('./api/course/getHotCourse'));
    app.use(require('./api/course/joinCourse'));
    //End course

    //Begin lecture
    app.use(require('./api/course/getCourseDetail/getListLecture'));
    //End lecture
    //Begin topic
    app.use(require('./api/course/getLastUpdateTopic'));
    //End topic

    //Begin 
    //End
}