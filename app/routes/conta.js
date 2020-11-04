module.exports = function(application){
  application.post('/conta', function(req, res){
    application.app.controllers.conta.abreConta(application, req, res);
  });

  application.get('/conta', function(req, res){
    application.app.controllers.conta.abreConta(application, req, res);
  });
}
