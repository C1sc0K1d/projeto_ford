module.exports = function(application){
  application.post('/main', function(req, res){
    application.app.controllers.main.iniciaMain(application, req, res);
  });

  application.get('/main', function(req, res){
    application.app.controllers.main.iniciaMain(application, req, res);
  });
}
