const searchMeals=()=>{
    const InputMeal=document.getElementById('search-input').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${InputMeal}`)
    .then(res =>res.json())
    // .then(data =>{
    //     console.log(data.meals);
    // })
     .then(data =>displaymeals(data.meals))
    // .catch(error =>('no serach result'));
}

const displaymeals =meals=>{
    const mealDivsContainer=document.getElementById('mealDivsContainer');
    mealDivsContainer.innerHTML= '';
    meals.forEach(meal => {

        const mealDiv=document.createElement('div');
        mealDiv.className ="meal-card";
        mealDiv.innerHTML= `
        <img class="card-img-top" src="${meal.strMealThumb}">
        <h5 class="card-title text-center">${meal.strMeal}</h5>
`;

mealDivsContainer.appendChild(mealDiv);

    })
}