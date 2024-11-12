const apiKey = "64c7fc482d0e46f2b25030cc4e86d355"

async function getRecipes() {
    const response = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=' + apiKey);
    const recipes = await response.json();
    console.log(recipes);
    const showreceipt = document.querySelector('.showreceipt');
    showreceipt.innerHTML = '';
    
    recipes.results.map((recipe) => {
        const card = document.createElement('div');
        card.classList.add('cardwithreceipt');
        const img = document.createElement('img');
        img.src = recipe.image;
        img.classList.add('img');
        const dishname = document.createElement('div');
        dishname.classList.add('dishname');
        dishname.innerHTML = recipe.title;
        card.appendChild(img);
        card.appendChild(dishname);
        showreceipt.appendChild(card);
        card.onclick = () => {
            window.location.href = 'recipe.html?id=' + recipe.id;
        }

    })
}

getRecipes();

async function searchRecipes() {
    const response = await fetch('https://api.spoonacular.com/recipes/complexSearch?query=' + document.querySelector('input').value + '&apiKey=' + apiKey);
    const recipes2 = await response.json();
    console.log(recipes2);

    const showreceipt = document.querySelector('.showreceipt');
    showreceipt.innerHTML = '';

    recipes2.results.map((recipe) => {   

        const card = document.createElement('div');
        card.classList.add('cardwithreceipt');
        const img = document.createElement('img');
        img.src = recipe.image;
        img.classList.add('img');
        const dishname = document.createElement('div');
        dishname.classList.add('dishname');
        dishname.innerHTML = recipe.title;
        card.appendChild(img);
        card.appendChild(dishname);
        showreceipt.appendChild(card);
        card.onclick = () => {
            window.location.href = 'recipe.html?id=' + recipe.id;
        }
    });
}