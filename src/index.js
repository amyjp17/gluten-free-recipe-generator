function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: ["Hello"],
    autoStart: true,
    cursor: " ",
  });
}

let recipeElement = document.querySelector("#recipe-generator-form");
recipeElement.addEventListener("submit", generateRecipe);
