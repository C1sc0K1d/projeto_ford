module.exports = function(application){
  application.post('/picape', function(req, res){
    application.app.controllers.picape.ranger(application, req, res);
  });

  application.get('/picape', function(req, res){
    application.app.controllers.picape.ranger(application, req, res);
  });
}
