module.exports = function(application){
  application.post('/luxuoso', function(req, res){
    application.app.controllers.luxuoso.mustang(application, req, res);
  });

  application.get('/luxuoso', function(req, res){
    application.app.controllers.luxuoso.mustang(application, req, res);
  });
}
