function displayRecipe(response){
  console.log("recipe generated");
  new Typewriter('#recipe', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  }); 
}

function generateRecipe(event) {
    event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "165fb30cc9162832cte4113b00adoc29";
let context = "You are a great healthy Chef expert and love to write quick, easy recipes. Your mission is to generate a 25 line recipe in basic HTML and seperate each line with a <br />. Make sure to follow the user instructions. Sign the recipe with 'Enjoy your meal!' inside a <strong> element at the end of the recipe";
let prompt = `User Instructions: Generate a healthy food recipe of ${instructionsInput.value}`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("generating recipe");
console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);

axios.get(apiUrl).then(displayRecipe);
}



let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);