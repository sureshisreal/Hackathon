/*
 * Find and break the encryption logic.
 */
var Encrypter = function(password) {
  this._password = password;
}

Encrypter.prototype.shuffle = function(str) {
  var a = str.split(""),
    n = a.length;

  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
}

Encrypter.prototype.merge = function(a, b) {
  var result = this.shuffle(a + b);
  return result;
}

Encrypter.prototype.reverse = function(str) {
  return str.split('').reverse().join('');
}

Encrypter.prototype.encrypt = function() {
  var pass = this._password;
  pass = this.reverse(pass);
  pass = this.merge(pass, this._password);
  return pass;
}

module.exports.authorize = function(username, password) {
  var encrypter = new Encrypter(password);
  var result = username == password.split('').sort().join('');
  return {
    'status': result,
    'encrypted': encrypter.encrypt()
  };
}
