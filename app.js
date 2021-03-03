const searchMeals=search=>{
    const inputField=document.getElementById("search-input").value;
    // console.log(inputField);
    const submitResult=document.getElementById("result");
    // submitResult.innerHTML='';
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputField}`
    fetch(url)
    // .then(respon=>respon.json())
    //  .then(data=>console.log(data))

    .then(data=>displaySearch(data.meals))
    .catch(error=>{
        const errordetails=document.getElementById('mealDivs');
        const errorMessage=`<h1 id="errorMessage"> The ${inputField} you search is not found</h1>`
        errorMessage.innerHTML=errorMessage;
        const submitResult=document.getElementById("result");
        // submitResult.innerHTML='';
        // document.getElementById("submitResult").value='';
    })

    const displaySearch=resdatas=>{
        // const resdatasArray= resdatas.resdata
        const submitResult=document.getElementById("result");
        resdatas.ForEach(resdata=>{
            const makeDiv=document.getElementById("div");
            makeDiv.className="CreatedDivMeal";
            const makeDivInfo=`
            <img  src="${resdata.strMealThumb}">
            <a  href=#>${resdata.strMeal}</a>


            `;
            // onclick="displayOneMealDetail(${resdata.idMeal})"
            // onclick="displayOneMealDetail(${resdata.idMeal})"
            makeDiv.innerHTML=makeDivInfo;
            submitResult.appendChild(makeDiv);
            const ErrorMessage=document.getElementById('errorMessage');
            if(ErrorMessage !=null){
                document.getElementById('errorMessage').innerText="";
            }
            document.getElementById('search-input').value="";


            
        });
    }
    
}