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
          if (!encrypterPass)
       throw new Error("Missing hack to find username");
   
    var a = encrypterPass.split(""),n = a.length;   a.sort();    
    var current = null,count = 0, filter;
        for (var i = 0; i <= a.length; i++) {
             if (a[i] != current) {
                if (count > 0) {
                    filter = count/2;
                    recurssion (filter);
                        }   current = a[i];
                            count = 1 ;
            } else {
                    count++; }
                                             } 
    function recurssion(filter) {
                 if(filter > 0) {
                    recurssion(filter-1);
                    process.stdout.write(current); }
    return;                }
}
}
