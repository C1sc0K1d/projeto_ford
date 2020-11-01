module.exports = function(application){
  application.post('/comunidade', function(req, res){
    application.app.controllers.comunidade.abreComunidade(application, req, res);
  });

  application.get('/comunidade', function(req, res){
    application.app.controllers.comunidade.abreComunidade(application, req, res);
  });
}
