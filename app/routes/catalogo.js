module.exports = function(application){
  application.post('/catalogo', function(req, res){
    application.app.controllers.catalogo.abreCatalogo(application, req, res);
  });

  application.get('/catalogo', function(req, res){
    application.app.controllers.catalogo.abreCatalogo(application, req, res);
  });
}
