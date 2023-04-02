console.log("router loaded");

const routes = {
  home: homeView(),
  browse: browseView(),
  createRecipe: createRecipeView(),
  yourRecipes: yourRecipesView(),
  login: loginView(),
};

function locationHashChanged() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  //set to home if empty string
  if (pageID == "") {
    pageID = "home";
  }

  document.getElementById("app").innerHTML = routes[pageID];

  toggleCurrentPage(hashTag);
}

const toggleCurrentPage = (currentPageHash) => {
  //https://codepen.io/Coding-in-Public/pen/MWroExJ
  //except also need to remove from rest when change page
  //get their hash not href (which is the whole link)

  document.querySelectorAll(".nav-menu .nav-link").forEach((navLink) => {
    //just get the anchor tags
    if (navLink.tagName === "A") {
      //use aria-current for accessibility reasons

      //remove aria-current from everywhere first
      navLink.removeAttribute("aria-current", "page");

      if (navLink.hash === currentPageHash && navLink.hash != "#login") {
        navLink.setAttribute("aria-current", "page");
      }
    }
  });
};

// const changeRoute = () => {
//   let hashTag = window.location.hash;

//   //? maybe it would be better to map the hash in the routes as part of the route object rather than mess with it here
//   let pageID = hashTag.replace("#", "");

//   //set to home if empty string
//   if (pageID == "") {
//     pageID = "home";
//   }

//   //so can set the current page underline when page loads
//   if (hashTag === "") {
//     hashTag = "#home";
//   }
//   //wait and destructure to ensure this has come back yet
//   //can this be moved to before initListeners?
//   const { firstName } = userDoc;

//   console.log("changeRoute > firstName", firstName);

//   document.getElementById("app").innerHTML = routes[pageID];

//   toggleCurrentPage(hashTag);

//   console.log("app.js > changeRoutes > userDoc", userDoc);
// };
