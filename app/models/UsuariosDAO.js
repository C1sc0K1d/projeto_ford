function UsuariosDAO(connection) {
  this._connection = connection;
}

//UsuariosDAO.prototype.getNoticias = function(callback) {
  //this._connection.query("select id_noticia, autor, resumo, titulo, DATE_FORMAT(data_noticia,'%d-%m-%Y') as data_noticia from noticias order by id_noticia desc", callback);
//};

UsuariosDAO.prototype.getUser = function(user, callback) {
  this._connection.query('select * from usuario where nome = ' + user.nome + ' AND senha = ' + user.pass, callback);
};

UsuariosDAO.prototype.setName = function(user, callback) {
  this._connection.query('select * from usuario where nome = ' + user.nome, callback);
};

//UsuariosDAO.prototype.salvarNoticia = function(user, callback) {
  //this._connection.query('insert into noticias set ?', noticia, callback)
//};

//UsuariosDAO.prototype.get5UltimasNoticias = function(callback) {
  //this._connection.query("select id_noticia, titulo, autor, resumo, DATE_FORMAT(data_noticia,'%d-%m-%Y') as data_noticia from noticias order by id_noticia desc limit 5", callback);
//}

module.exports = function() {
  return UsuariosDAO;
}
