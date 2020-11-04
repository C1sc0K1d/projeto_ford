module.exports = function(application){
  application.post('/config', function(req, res){
    application.app.controllers.config.abreConfig(application, req, res);
  });

  application.get('/config', function(req, res){
    application.app.controllers.config.abreConfig(application, req, res);
  });
}
