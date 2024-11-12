const id = new URLSearchParams(window.location.search).get('id');
console.log(id);
const apiKey = "64c7fc482d0e46f2b25030cc4e86d355";
const pagewithrecipe = document.querySelector('.pagewithrecipe');

async function getRecipe() {
    const response = await fetch('https://api.spoonacular.com/recipes/' + id + '/information?includeNutrition=true&apiKey=' + apiKey);
    const recipeDetails = await response.json();
    console.log(recipeDetails);
    const analyzedInstructions = recipeDetails.analyzedInstructions[0].steps;
    const title = document.createElement('h1');
    const img = document.createElement('img');
    img.classList.add('img');
    img.src = recipeDetails.image;
    title.innerHTML = recipeDetails.title;
    pagewithrecipe.appendChild(title);
    pagewithrecipe.appendChild(img);
    
    const timeP = document.createElement('p');
    timeP.innerHTML = 'Preparatiion time: ' + recipeDetails.preparationMinutes + ' minutes';
    pagewithrecipe.appendChild(timeP);
    

    const nutritionDiv = document.createElement('div');
    const caloriesP = document.createElement('p');
    caloriesP.innerHTML = 'Calories: ' + recipeDetails.nutrition.nutrients[0].amount + ' ' + recipeDetails.nutrition.nutrients[0].unit;

    const percentCarbs = document.createElement('p');
    percentCarbs.innerHTML = 'Percent carbs: ' + recipeDetails.nutrition.caloricBreakdown.percentCarbs;

    const percentProtein = document.createElement('p');
    percentProtein.innerHTML = 'Percent protein: ' + recipeDetails.nutrition.caloricBreakdown.percentProtein;

    const percentFat = document.createElement('p');
    percentFat.innerHTML = 'Percent fat: ' + recipeDetails.nutrition.caloricBreakdown.percentFat;

    nutritionDiv.appendChild(percentCarbs);
    nutritionDiv.appendChild(percentProtein);
    nutritionDiv.appendChild(percentFat);

    nutritionDiv.appendChild(caloriesP);
    pagewithrecipe.appendChild(nutritionDiv);

    recipeDetails.extendedIngredients.map((ingredient) => {
        const li = document.createElement('li');
        li.innerHTML = ingredient.name;
        pagewithrecipe.appendChild(li);

    });

    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe');
    pagewithrecipe.appendChild(recipeDiv);

    analyzedInstructions.map((step) => {
        const li = document.createElement('li');
        li.innerHTML = step.step;        
        recipeDiv.appendChild(li);

    });
}

getRecipe();

