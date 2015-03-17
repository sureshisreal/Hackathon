Hack the Login and Find the username.
====================================
 Agent 007 has infiltrated the KGB, he has installed a backdoor into the KGB database. He has written a module which leaks an encrypted password on any authentication attempt. You are also provided intelligence on their encryption algorithm.

Problem Statement
------------------
There is an authentication simulation module which leaks an encrypted password string in `hackuser.js` module for every authentication attempt.
The username is the lexical ordering of the decrypted password.
Return the username from the leaked encrypted password by completing `hackAlgorithmToFindUsername` method


Example
-------
The username for the decrypted password string "youcrackedit" is "accdeikortuy" 

How to run.
-----------
1. install Nodejs (version above 0.10) and using terminal run `node src/hackuser.js`

```
godspeed and long live the queen
```