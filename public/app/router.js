console.log("router loaded");

const routes = {
  home: "<h1>home</h1>",
  browse: "<h1>browse</h1>",
  createRecipe: "createRecipe",
  yourRecipes: "yourRecipes",
  login: "login",
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
