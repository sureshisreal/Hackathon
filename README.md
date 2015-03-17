Hack the Login and Find the username.
====================================

We got a list of encrypted password string and we need an algorithm which can find the username from the encrypted password.

you have been given a server authentication simulator code, which leaks the encrypted password for every authentication.

Go through the code to find out the logic of the password encryption technique.

Also we found that for any encrypted password,
the respective username is using the same decrypted password string in a lexicographic order.

Find the username by writing a decryption algorithm that can process the encrypted password leak to give the username.

for example if the password is "youcrackedit" then username is "accdeikortuy".

Complete the function `hackAlgorithmToFindUsername` that accepts encryptedPassword as a parameter
and returns the username from the encryptedPassword.

How to run.
-----------
1. install Nodejs (version above 0.10) and using terminal run `node src/hackuser.js`