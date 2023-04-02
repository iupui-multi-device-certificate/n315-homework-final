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

// signup
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
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
});

// logout
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut();
});

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    loginForm.reset();
  });
});
