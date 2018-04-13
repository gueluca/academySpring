const AbstractController = require('.');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


class AuthController extends AbstractController {

    initRouter(){

        passport.use(new LocalStrategy((username,password,done) => {
            User.findOne({
                where: {
                    email,
                    
                },
            });
        })
            .then((user) => {
                if(user.validatePassword(password)) {
                    return done(null,user.toJSON());
                }

                return done(new Error('Invaid password'));
            })
           .then(user => done(null,user))
           .catch(error => done(error))
    ));   

    this.router.post('/login',passport.authenticate('local'),this.handleLogin);




          /*  if(username === 'top' && password === 'top') {

               return done(null, {id: 5});
            }

            return done('Invalid user');
        )};*/


        

    }

    handleLogin(request,rensponse){

        response.json(request.user);
    }
}

module.exports= AuthController;