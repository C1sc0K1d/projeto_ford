module.exports = function(application){
  application.post('/sedan', function(req, res){
    application.app.controllers.sedan.kasedan(application, req, res);
  });

  application.get('/sedan', function(req, res){
    application.app.controllers.sedan.kasedan(application, req, res);
  });
}
