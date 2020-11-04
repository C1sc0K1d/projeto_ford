module.exports = function(application){
  application.post('/acompManut', function(req, res){
    application.app.controllers.acompManut.abreManutAcomp(application, req, res);
  });

  application.get('/acompManut', function(req, res){
    application.app.controllers.acompManut.abreManutAcomp(application, req, res);
  });
}
