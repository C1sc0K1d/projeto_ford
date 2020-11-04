module.exports = function(application){
  application.post('/agendarManut', function(req, res){
    application.app.controllers.agManut.abreManutAg(application, req, res);
  });

  application.get('/agendarManut', function(req, res){
    application.app.controllers.agManut.abreManutAg(application, req, res);
  });
}
