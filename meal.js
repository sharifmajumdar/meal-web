const mealContainer = document.getElementById("meal-items");

const showProduct = () => {
    mealContainer2.style.display = "none";
    const submitButton = document.getElementById("submit");
    const inputField = document.getElementById("input-field");
    const inputValue = inputField.value.toLowerCase();
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data))
        .catch(function(response){
            mealContainer.innerHTML = "Please choose a right keyword";
        });
}

const displayMeal = mealList => {
    let mealItems = mealList.meals;
    mealItems.forEach(item => {
        const mealDiv = document.createElement("div");
        mealDiv.className = "meals-categories";
        const mealInfo = `
            <h3 class="meal-header">${item.strCategory + ", " + item.strArea}</h3><br>
            <img class="meal-img" src="${item.strMealThumb}">      
            <button onClick="showDetail('${item.idMeal}')">Show Details</button>
            `
        mealDiv.innerHTML = mealInfo;
        mealContainer.appendChild(mealDiv);
    });
}

const showDetail = mealDetail => {
    console.log(mealDetail);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealDetail}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showProductDetail(data));
}

const mealContainer2 = document.getElementById("meal-items2");
const showProductDetail = product => {
    mealContainer2.style.display = "block";
    //const mealContainer = document.getElementById("meal-items");
    const productItem = product.meals;    
    for (let i = 0; i < productItem.length; i++) {
        const mealInd = productItem[i];
        const productDiv = document.createElement("div");
        productDiv.className = "meals-categories2";
        const productInfo = `
            <h3 class="meal-header2">${mealInd.strMeal +", " + mealInd.strArea}</h3><br>
            <img class="meal-img" src="${mealInd.strMealThumb}"><br>
            <p>${mealInd.strInstructions}</p>
            `
        productDiv.innerHTML = productInfo;
        mealContainer2.appendChild(productDiv);
    }
}