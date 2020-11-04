module.exports = function(application){
  application.post('/compacto', function(req, res){
    application.app.controllers.compacto.fordka(application, req, res);
  });

  application.get('/compacto', function(req, res){
    application.app.controllers.compacto.fordka(application, req, res);
  });
}
