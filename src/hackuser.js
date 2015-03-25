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
  
   if (!encrypterPass)
          throw new Error("Missing hack to find username");
var a = encrypterPass.split(""), i ;   a.sort()  ;
           for (i= 0; i < a.length; i = i + 2) {
                process.stdout.write(a[i]); 
                     }
}
