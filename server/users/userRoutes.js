/* 
* @Author: vokoshyv
* @Date:   2015-05-05 09:56:42
* @Last Modified by:   nimi
* @Last Modified time: 2015-08-10 16:05:08
*/
'use strict';
var userController = require('./userController.js');

module.exports = function(app){
  // this app was injected from the middleware line 33

  app.post('/signin', userController.signin);
  app.post('/signup', userController.signup);
  app.get('/signedin', userController.checkAuth);
  app.get('/instagram', userController.instagramSignin);
  app.get('/instagram/callback', userController.instagramCallback);

};
