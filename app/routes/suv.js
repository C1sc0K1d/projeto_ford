module.exports = function(application){
  application.post('/suv', function(req, res){
    application.app.controllers.suv.ecosport(application, req, res);
  });

  application.get('/suv', function(req, res){
    application.app.controllers.suv.ecosport(application, req, res);
  });
}
