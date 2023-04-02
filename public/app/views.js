const homeView = () => `  <section class="content hero">
<div class="hero-cta">
  <div class="large-circle">
    <h1 class="hero-title">The Jungle Cook</h1>
    <p class="hero-subtitle">
      The home to various recipes of your choice. Add your own recipe today
      and fill the world with joy!
    </p>
  </div>
  <div class="small-circle">
    <p class="hero-callout">
      Want to be a Jungle Cook? Go ahead and the kitchen is yours!
    </p>
  </div>
</div>
</section>
`;

const browseView =
  () => `      <section class="content section-recipes browse-recipes">
<div class="recipe-content">
  <h1 class="section-title">Recipes: Try some today!</h1>
  <div class="cards">
    <div class="card">
      <div class="card-row">
        <div class="image-holder">
          <img
            src="./images/recipes/thumb/recipe-pizza_thumb.png"
            alt="pizza"
          />
          <div class="btn-overlay">
            <a
              href="view-recipe.html"
              class="btn btn--small btn--naplesYellow"
              id="viewButton"
            >
              View
            </a>
          </div>
        </div>
        <div class="card-body">
          <h1 class="card-title underline">Supreme Pizza</h1>
          <p class="card-text">
            Make pizza night super duper out of this world with homemade
            pizza. This recipe is supreme with vegetables and two types
            of meat. Yum!
          </p>
          <p class="time">
            <img src="./images/recipes/time.png" alt="time" />
            <span>1h 24min</span>
          </p>
          <p class="servings">
            <img src="./images/recipes/servings.png" alt="time" />
            <span>4 servings</span>
          </p>
        </div>
      </div>

      <div class="button-holder">
        <a
          href="edit-recipe.html"
          class="btn btn--small btn--naplesYellow"
          id="editButton"
        >
          Edit
        </a>
        <a
          href="#"
          class="btn btn--small btn--naplesYellow"
          id="deleteButton"
        >
          Delete
        </a>
      </div>
    </div>
    <div class="card">
      <div class="card-row">
        <div class="image-holder">
          <img
            src="./images/recipes/thumb/recipe-burger_thumb.png"
            alt="pizza"
          />
          <div class="btn-overlay">
            <a
              href="view-recipe.html"
              class="btn btn--small btn--naplesYellow"
              id="viewButton"
            >
              View
            </a>
          </div>
        </div>
        <div class="card-body">
          <h1 class="card-title underline">Classic Burger</h1>
          <p class="card-text">
            Sink your teeth into a delicious restaurant-style, hamburger
            recipe made from lean beef. Skip the prepackaged patties and
            take the extra time to craft up your own, and that little
            extra effort will be worth it.
          </p>
          <p class="time">
            <img src="./images/recipes/time.png" alt="time" />
            <span>30 min</span>
          </p>
          <p class="servings">
            <img src="./images/recipes/servings.png" alt="time" />
            <span>4 servings</span>
          </p>
        </div>
      </div>

      <div class="button-holder">
        <a
          href="edit-recipe.html"
          class="btn btn--small btn--naplesYellow"
          id="editButton"
        >
          Edit
        </a>
        <a
          href="#"
          class="btn btn--small btn--naplesYellow"
          id="deleteButton"
        >
          Delete
        </a>
      </div>
    </div>
    <div class="card">
      <div class="card-row">
        <div class="image-holder">
          <img
            src="./images/recipes/thumb/recipe-pilaf_thumb.png"
            alt="pizza"
          />
          <div class="btn-overlay">
            <a
              href="view-recipe.html"
              class="btn btn--small btn--naplesYellow"
              id="viewButton"
            >
              View
            </a>
          </div>
        </div>
        <div class="card-body">
          <h1 class="card-title underline">Chicken Biryani</h1>
          <p class="card-text">
            Chicken Biryani is a bold and flavorful Indian dish with
            crazy tender bites of chicken with bell peppers in a
            deliciously spiced and fragrant rice.
          </p>
          <p class="time">
            <img src="./images/recipes/time.png" alt="time" />
            <span>1h 15min</span>
          </p>
          <p class="servings">
            <img src="./images/recipes/servings.png" alt="time" />
            <span>6 servings</span>
          </p>
        </div>
      </div>

      <div class="button-holder">
        <a
          href="edit-recipe.html"
          class="btn btn--small btn--naplesYellow"
          id="editButton"
        >
          Edit
        </a>
        <a
          href="#"
          class="btn btn--small btn--naplesYellow"
          id="deleteButton"
        >
          Delete
        </a>
      </div>
    </div>
    <div class="card">
      <div class="card-row">
        <div class="image-holder">
          <img
            src="./images/recipes/thumb/recipe-chowmein_thumb.png"
            alt="pizza"
          />

          <div class="btn-overlay">
            <a
              href="view-recipe.html"
              class="btn btn--small btn--naplesYellow"
              id="viewButton"
            >
              View
            </a>
          </div>
        </div>
        <div class="card-body">
          <h1 class="card-title underline">Ch. Chow Mein</h1>
          <p class="card-text">
            A great Chow Mein comes down to the sauce - it takes more
            than just soy sauce and sugar! Jam packed with a surprising
            amount of hidden vegetables, customize this Chicken Chow
            Mein recipe using your protein of choice!
          </p>
          <p class="time">
            <img src="./images/recipes/time.png" alt="time" />
            <span>20 min</span>
          </p>
          <p class="servings">
            <img src="./images/recipes/servings.png" alt="time" />
            <span>4 servings</span>
          </p>
        </div>
      </div>

      <div class="button-holder">
        <a
          href="edit-recipe.html"
          class="btn btn--small btn--naplesYellow"
          id="editButton"
        >
          Edit
        </a>
        <a
          href="#"
          class="btn btn--small btn--naplesYellow"
          id="deleteButton"
        >
          Delete
        </a>
      </div>
    </div>
  </div>
</div>
</section>`;

const createRecipeView = () => `<section class="content section-recipe-form">
<form class="recipe-form" onsubmit="event.preventDefault();">
  <div class="form-title">Hey Michael, create your recipe!</div>
  <fieldset>
    <div class="file-input">
      <!-- extra div to get a custom placeholder since can't replace button text -->
      <div>Add Recipe Image</div>
      <input
        type="file"
        name="recipeImage"
        id="recipeImage"
        aria-label="recipeImage"
        class="form-element"
      />
      <!-- better would be to use an picture/paperclip combo icon with alt/tooltip for screen reader. this would translate across screen sizes better -->
      <label for="recipeImage" class="btn btn--file-selector btn--rose"
        >Attach File</label
      >
    </div>

    <input
      type="text"
      name="recipeName"
      id="recipeName"
      placeholder="Recipe Name"
      aria-label="recipeName"
      class="form-element"
    />

    <input
      type="text"
      name="recipeDescription"
      id="recipeDescription"
      placeholder="Recipe Description"
      aria-label="recipeDescription"
      class="form-element"
    />

    <input
      type="text"
      name="recipeTotalTime"
      id="recipeTotalTime"
      placeholder="Recipe Total Time"
      aria-label="recipeTotalTime"
      class="form-element"
    />

    <input
      type="text"
      name="recipeServingSize"
      id="recipeServingSize"
      placeholder="Recipe Serving Size"
      aria-label="recipeServingSize"
      class="form-element"
    />
  </fieldset>
  <fieldset>
    <legend>Enter Ingredients:</legend>
    <input
      type="text"
      name="ingredient-1"
      id="ingredient-1"
      placeholder="Ingredient #1"
      aria-label="ingredient-1"
      class="form-element"
    />
    <input
      type="text"
      name="ingredient-2"
      id="ingredient-2"
      placeholder="Ingredient #2"
      aria-label="ingredient-2"
      class="form-element"
    />
    <div class="last-row">
      <input
        type="text"
        name="ingredient-3"
        id="ingredient-3"
        placeholder="Ingredient #3"
        aria-label="ingredient-3"
        class="form-element"
      />
      <button class="btn--round btn--rose btn--add" id="addIngredient">
        +
      </a>
    </div>
  </fieldset>
  <fieldset>
    <legend>Enter Instructions:</legend>
    <input
      type="text"
      name="instruction-1"
      id="instruction-1"
      placeholder="Instruction #1"
      aria-label="instruction-1"
      class="form-element"
    />
    <input
      type="text"
      name="instruction-2"
      id="instruction-2"
      placeholder="Instruction #2"
      aria-label="instruction-2"
      class="form-element"
    />
    <div class="last-row">
      <input
        type="text"
        name="instruction-3"
        id="instruction-3"
        placeholder="Instruction #3"
        aria-label="instruction-3"
        class="form-element"
      />
      <button class="btn--round btn--rose btn--add" id="addInstruction">
        +
      </a>
    </div>
  </fieldset>
  <input
    type="submit"
    value="Create Recipe"
    class="btn btn--wide btn--rose"
    name="createRecipe"
    id="createRecipe"
  />
</form>
</section> `;

const yourRecipesView = (
  userFirstName = "Michael",
  isLoggedIn = false
) => `<section class="content section-recipes ${
  isLoggedIn ? `your-recipes` : `browse-recipes`
}">
  <div class="recipe-content">
    <h1 class="section-title">${
      isLoggedIn && userFirstName != ""
        ? `${userFirstName}, here are your recipes!`
        : `Recipes: Try some today!`
    }</h1>
    <div class="cards">
    <div class="card">
    <div class="card-row">
      <div class="image-holder">
        <img
          src="./images/recipes/thumb/recipe-pizza_thumb.png"
          alt="pizza"
        />

        <div class="btn-overlay">
          <a
            href="view-recipe.html"
            class="btn btn--small btn--naplesYellow"
            id="viewButton"
          >
            View
          </a>
        </div>
      </div>
      <div class="card-body">
        <h1 class="card-title underline">Supreme Pizza</h1>
        <p class="card-text">
          Make pizza night super duper out of this world with homemade
          pizza. This recipe is supreme with vegetables and two types
          of meat. Yum!
        </p>
        <p class="time">
          <img src="./images/recipes/time.png" alt="time" />
          <span>1h 24min</span>
        </p>
        <p class="servings">
          <img src="./images/recipes/servings.png" alt="time" />
          <span>4 servings</span>
        </p>
      </div>
    </div>

    <div class="button-holder">
      <a
        href="edit-recipe.html"
        class="btn btn--small btn--naplesYellow"
        id="editButton"
        >Edit
      </a>
      <a
        href="#"
        class="btn btn--small btn--naplesYellow"
        id="deleteButton"
        >Delete
      </a>
    </div>
  </div>
    </div>
  </div>
</section>`;

const loginView = () => `
<section class="content section-login">
<form id="login-form">
  <div class="form-title">Login:</div>
  <input
    type="email"
    name="login-email"
    id="login-email"
    placeholder="Email Address"
    aria-label="login-email"
    class="form-element form-element--small"
  />
  <input
    type="password"
    name="login-password"
    id="login-password"
    placeholder="Password"
    aria-label="login-password"
    class="form-element form-element--small"
  />
  <input
    type="submit"
    value="Login"
    class="btn btn--wide btn--naplesYellow"
    name="loginBtn"
    id="loginBtn"
  />
</form>
<form id="signup-form">
  <div class="form-subtitle">don't have an account?</div>
  <div class="form-title">Sign up:</div>
  <input
    type="text"
    name="first-name"
    id="first-name"
    placeholder="First Name"
    aria-label="first-name"
    class="form-element form-element--small"
  />
  <input
    type="text"
    name="last-name"
    id="last-name"
    placeholder="Last Name"
    aria-label="last-name"
    class="form-element form-element--small"
  />
  <input
    type="email"
    name="signup-email"
    id="signup-email"
    placeholder="Email Address"
    aria-label="signup-email"
    class="form-element form-element--small"
  />
  <input
    type="password"
    name="signup-password"
    id="signup-password"
    placeholder="Password"
    aria-label="signup-password"
    class="form-element form-element--small"
  />
  <input
    type="submit"
    value="Sign Up"
    class="btn btn--wide btn--naplesYellow"
    name="signupBtn"
    id="signupBtn"
  />
</form>
</section>


`;
