const auth = firebase.auth();
const db = firebase.firestore();

// listen for auth status changes
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("onAuthStateChanged > user logged in: ", user);
    setupUI(user);
  } else {
    console.log("on AuthStateChanged > user logged out");
    setupUI();
  }
});

//add to document since these are dynamically created
document.addEventListener("submit", (e) => {
  // signup
  const signupForm = e.target.closest("#signup-form");
  if (signupForm) {
    e.preventDefault();

    // get user info
    const email = signupForm["signup-email"].value;
    const password = signupForm["signup-password"].value;

    // sign up the user & add firestore data
    //TODO: add catch
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        return db.collection("users").doc(cred.user.uid).set({
          firstName: signupForm["first-name"].value,
          lastName: signupForm["last-name"].value,
          email: signupForm["signup-email"].value,
          recipes: [],
        });
      })
      .then(() => {
        console.log("account created");
      });
  }

  //login form
  const loginForm = e.target.closest("#login-form");
  if (loginForm) {
    e.preventDefault();

    //get user info
    const email = loginForm["login-email"].value;
    const password = loginForm["login-password"].value;

    //log the user in
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
      loginForm.reset();
    });
  }
});

//this is always in dom so don't need to add to document
const logout = document.querySelector("#logout");

logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut();
});
// });
