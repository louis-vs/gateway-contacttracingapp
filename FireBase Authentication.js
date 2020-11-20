//This part is to initialise FireBase 
<body>
  <script src="/__/firebase/8.0.2/firebase-app.js"></script>
  https://firebase.google.com/docs/web/setup#available-libraries 
<script src="/__/firebase/8.0.2/firebase-analytics.js"></script>
<script src="/__/firebase/init.js"></script>
</body>

//FireBase configuration
var firebaseConfig = 

//Password Authentication:
firebase.auth().createUserWithEmailAndPassword(email, password)
.catch(function(error) {
  // If there is an error
  var errorCode = error.code;
  var errorMessage = error.message;
});
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // If there is an error
  var errorCode = error.code;
  var errorMessage = error.message;
});

firebase.auth().signOut().then(function() {
    // If there is an error
}).catch(function(error) {
  // If an error occurred
});

//Email Authentication:
var actionCodeSettings = {
  url: 'https://www.example.com/finishSignUp?cartId=1234',
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.example.ios'
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12'
  },
  dynamicLinkDomain: 'example.page.link'
};
firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
  .then(function() {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    window.localStorage.setItem('emailForSignIn', email);
  })
  .catch(function(error) {
    // Some error occurred, you can inspect the code: error.code
  });

  //Confirming sign-in on a web page:
// Confirm the link is a sign-in with email link.
if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
  var email = window.localStorage.getItem('emailForSignIn');
  if (!email) {
    // User opened the link on a different device. To prevent session fixation
    // attacks, ask the user to provide the associated email again. For example:
    email = window.prompt('Please provide your email for confirmation');
  }
  // The client SDK will parse the code from the link for you.
  firebase.auth().signInWithEmailLink(email, window.location.href)
    .then(function(result) {
      // Clear email from storage.
      window.localStorage.removeItem('emailForSignIn');
    })
    .catch(function(error) {
      // Some error occurred, you can inspect the code: error.code
      // Common errors could be invalid email and invalid or expired OTPs.
    });
}

//Linking a previous method of re-authentication 
// Construct the email link credential from the current URL.
var credential = firebase.auth.EmailAuthProvider.credentialWithLink(
  email, window.location.href);

// Link the credential to the current user.
firebase.auth().currentUser.linkWithCredential(credential)
.then(function(usercred) {
  // The provider is now successfully linked.
  // The phone user can now sign in with their phone number or email.
})
.catch(function(error) {
  // Some error occurred.
});
//Re-authenticating an email link user:

// Construct the email link credential from the current URL.
var credential = firebase.auth.EmailAuthProvider.credentialWithLink(
  email, window.location.href);

// Re-authenticate the user with this credential.
firebase.auth().currentUser.reauthenticateWithCredential(credential)
.then(function(usercred) {
  // The user is now successfully re-authenticated and can execute sensitive
  // operations.
})
.catch(function(error) {
  // Some error occurred.
});

//Differentiating between email link and password link 
// After asking the user for their email.
var email = window.prompt('Please provide your email');
firebase.auth().fetchSignInMethodsForEmail(email)
  .then(function(signInMethods) {
    // This returns the same array as fetchProvidersForEmail but for email
    // provider identified by 'password' string, signInMethods would contain 2
    // different strings:
    // 'emailLink' if the user previously signed in with an email/link
    // 'password' if the user has a password.
    // A user could have both.
    if (signInMethods.indexOf(
            firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD) != -1) {
      // User can sign in with email/password.
    }
     if (signInMethods.indexOf(
             firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD) != -1) {
       // User can sign in with email/link.
    }
  })
  .catch(function(error) {
    // Some error occurred, you can inspect the code: error.code
  });

  //Signing a user out:
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });

  //Code is taken from the FireBase "Password Authentication" and "Email Authentication" links