module.exports = function(application){
  application.post('/triagem', function(req, res){
    application.app.controllers.triagem.abreTriagem(application, req, res);
  });

  application.get('/triagem', function(req, res){
    application.app.controllers.triagem.abreTriagem(application, req, res);
  });
}
