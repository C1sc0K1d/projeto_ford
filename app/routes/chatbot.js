module.exports = function(application){
  application.post('/chatbot', function(req, res){
    application.app.controllers.chatbot.initChatbot(application, req, res);
  });

  application.get('/chatbot', function(req, res){
    application.app.controllers.chatbot.initChatbot(application, req, res);
  });
}
