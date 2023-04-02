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

  //toggle recipe-hero on html since this was only way I could get it full page at this time
  document
    .querySelector("html")
    .classList.toggle(
      "recipe-hero",
      pageID === "browse" || pageID === "yourRecipes"
    );

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
