//TODO: look up how deal with images in Firestore
export const testRecipes = [
  {
    id: "1",
    imgFullURL: "../images/recipes/full/recipe-pizza_full.png",
    imgThumbURL: "../images/recipes/thumb/recipe-pizza_thumb.png",
    name: "supreme pizza",
    description:
      "Make pizza night super duper out of this world with homemade pizza. This recipe is supreme with vegetables and two types of meat. Yum!",
    time: "1h 24min",
    servings: "4 servings",

    ingredients: [
      "1/4 batch pizza dough",
      "2 tablespoons Last-Minute Pizza Sauce",
      "10 slices pepperoni",
      "1 cup cooked and crumbled Italian sausage",
      "2 large mushrooms, sliced",
      "1/4 bell pepper, sliced",
      "1 tablespoon sliced black olives",
      "1 cup shredded mozzarella cheese",
    ],
    instructions: [
      {
        stepNumber: 1,
        text: "Preheat the oven to 475°. Spray pizza pan with nonstick cooking or line a baking sheet with parchment paper.",
      },
      {
        stepNumber: 2,
        text: "Flatten dough into a thin round and place on the pizza pan.",
      },
      { stepNumber: 3, text: "Spread pizza sauce over the dough." },
      {
        stepNumber: 4,
        text: "Layer the toppings over the dough in the order listed.",
      },
      {
        stepNumber: 5,
        text: "Bake for 8 to 10 minutes or until the crust is crisp and the cheese melted and lightly browned.",
      },
    ],
  },
];