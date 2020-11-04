module.exports.iniciaMain = function(application, req, res) {
  let connection = application.config.dbConnection();
  let usuariosModel = new application.app.models.UsuariosDAO(connection);
  let user = req.query;

  usuariosModel.getUser(user, function(error, result) {
    res.render("main", {user: result});
    if (error) {
      console.log(error);
    }
  });
}
