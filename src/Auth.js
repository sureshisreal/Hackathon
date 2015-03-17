var authorizer = require('./authorizer.js');

var UserAuth = function(userInfo) {
  this._username = userInfo['username'];
  this._password = userInfo['password'];
}

UserAuth.prototype.authenticate = function() {
  return authorizer.authorize(this._username, this._password);
}

module.exports = UserAuth;
