function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 5,
    cursor: " ",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let recipeElement = document.querySelector("#recipe");
  recipeElement.innerHTML = '<div class="blink"><em>Generating...</em></div>';

  let apiKey = "7296aa90736e3b3bc44c976ff5otbfe9";
  let instructionsInput = document.querySelector("#user-instructions");
  let prompt = `User Instructions: Generate a recipe incorporating ${instructionsInput.value}`;
  let context =
    "You are an AI assistant that has a lot of knowledge about gluten free cooking. You will be given User Instructions that will either be ingredients or a recipe title and you will generate a recipe in basic HTML format including a title, ingredients list and method. Please use metric units. Please only include the HTML in your answer, not ```html. Use h2 for the recipe title and h3 for the ingredients and method headings.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeForm = document.querySelector("#recipe-generator-form");
recipeForm.addEventListener("submit", generateRecipe);
