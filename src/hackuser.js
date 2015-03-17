var UserAuth = require('./Auth.js');

var auth = new UserAuth({
  'username': 'accdeikortuy',
  'password': 'youcrackedit'
});
var result = auth.authenticate();
if (result['status']) {
  console.log('Authentication success');
} else {
  console.log('Authentication failed');
}

hackAlgorithmToFindUsername(result['encrypted']);

function hackAlgorithmToFindUsername(encrypterPass) {
  // complete the hack to find the username for any encrypted password from authorizer.js.
  throw new Error("Missing hack to find username");
}
