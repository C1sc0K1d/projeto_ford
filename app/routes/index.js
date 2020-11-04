module.exports = function(application){
  application.post('/', function(req, res){
    application.app.controllers.login.voltaLogin(application, req, res);
  });

  application.get('/', function(req, res){
    res.render('Login')
  });
}
