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
    mealDivsContainer.innerHTML= "";
    meals.forEach(meal => {

        const mealDiv=document.createElement('div');
        mealDiv.className ="meal-card";
        mealDiv.innerHTML= `
     
        <img onclick="DetailsOFitem(${meal.idMeal})" class="card-img-top"  src="${meal.strMealThumb}">
        <h5 class="card-title text-center">${meal.strMeal}</h5>
`;

mealDivsContainer.appendChild(mealDiv);

    })
}

const DetailsOFitem= Id=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Id}`)
    .then(res=>res.json())
    .then(data =>MakingElements(data.meals))
}

const MakingElements=data=>{
    const mealItemDiv=document.getElementById('mealItemDiv');
    mealItemDiv.innerHTML='';
    for(let i =0 ; i<data.length;i++){
        const itemElement=data[i];
        mealItemDiv.innerHTML=`
        <img src="${itemElement.strMealThumb}">
        
        <h1>Item Ingredient:</h1>
        <ul>
        <li> ${itemElement.strIngredient1}</li>
        <li>${itemElement.strIngredient2}</li>

        <li> ${itemElement.strIngredient3}</li>
        <li> ${itemElement.strIngredient4}</li>
        <li> ${itemElement.strIngredient5}</li>
        <li> ${itemElement.strIngredient6}</li>
        <li> ${itemElement.strIngredient7}</li>
        <li> ${itemElement.strIngredient8}</li>
        <li> ${itemElement.strIngredient9}</li>
        <li>${itemElement.strIngredient10}</li>



        </ul>
<h1>Instruction</h1>
<p>${itemElement.strInstructions}</p>

        `

    }

}