const mealContainer = document.getElementById("meal-items");
function showProduct(){
    const submitButton = document.getElementById("submit");
    const inputField = document.getElementById("input-field");
    const inputValue = inputField.value;
    submitButton.addEventListener("click", function(){
        if(inputValue == "Beef" || inputValue == "beef" || 
        inputValue == "Chicken" || inputValue == "chicken" ||
        inputValue == "Dessert" || inputValue == "dessert" ||
        inputValue == "Lamb" || inputValue == "lamb" ||
        inputValue == "Miscellaneous" || inputValue == "miscellaneous" ||
        inputValue == "Pasta" || inputValue == "pasta" ||
        inputValue == "Pork" || inputValue == "pork" ||
        inputValue == "Seafood" || inputValue == "seafood" ||
        inputValue == "Side" || inputValue == "side" ||
        inputValue == "Starter" || inputValue == "starter" ||
        inputValue == "Vegan" || inputValue == "vegan" ||
        inputValue == "Vegetarian" || inputValue == "vegetarian" ||
        inputValue == "Breakfast" || inputValue == "breakfast" ||
        inputValue == "Goat" || inputValue == "goat"){
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayMeal(data));}
        else{
            const wrongMsg = document.createElement("p");
            wrongMsg.value = "Please choose a right keyword";
            mealContainer.appendChild(wrongMsg);
            console.log("Please choose a right keyword");
        }
    })
}

const displayMeal = mealList => {
    const mealItems = mealList.meals;
    for (let i = 0; i < mealItems.length; i++) {
        const item = mealItems[i];
        const mealDiv = document.createElement("div");
        mealDiv.className = "meals-categories";
        const mealInfo = `
            <h3 class="meal-header">${item.strCategory + ", " + item.strArea}</h3><br>
            <img class="meal-img" src="${item.strMealThumb}">      
            <button onClick="showDetail('${item.strCategory}')">Show Details</button>
            `
        mealDiv.innerHTML = mealInfo;
        mealContainer.appendChild(mealDiv);
    }
}