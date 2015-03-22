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
  
   var data = encrypterPass ;
   if (!data)
  throw new Error("Missing hack to find username");
   var a = data.split(""), n = a.length;   a.sort()  ;      //        console.log(a); sorted
   
   var current = null;
    var count = 0;
    var filter ;
    for (var i = 0; i <= a.length; i++) {
        if (a[i] != current) {
            if (count > 0) {
                filter = count/2;
                   for (var j=0 ;j<filter ; j++)    {
                       process.stdout.write(current);   
                                                    }
                           }
                                current = a[i];
                                count = 1;
                         } else {
                                 count++;
                                 }
                                        }
}
