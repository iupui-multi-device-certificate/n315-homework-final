const loggedInLink = document.getElementById("loginNav");
const loggedOutLink = document.getElementById("logoutNav");

const setupUI = (user) => {
  if (user) {
    //display user info
    const html = `
      `;

    db.collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        //TODO: set up nav views & routing - call these within this .then
        //TODO: get recipes from user collection
        //TODO: mobile nav listeners
        const html = `
      <section class="content section-recipes">
        <h1 class="section-title">Logged in as ${user.email}</h1>
        <p>First name: ${doc.data().firstName}</p>
        <p>Last name: ${doc.data().lastName}</p>
      </section>
        
      `;
        document.getElementById("app").insertAdjacentHTML("afterbegin", html);
      });

    // toggle user UI elements
    loggedInLink.hidden = true;
    loggedOutLink.hidden = false;
  } else {
    //TODO: clear out user info
    // toggle user elements
    loggedInLink.hidden = false;
    loggedOutLink.hidden = true;
  }
};

document.addEventListener("DOMContentLoaded", function () {
  let fbApp = firebase.app();

  console.log("domcontentloaded");
});
