const url = "http://localhost:8088/food/";

fetch(url)
  .then(foods => foods.json()) // This line of code accepts the response from your request, parses the body of the response as JSON and returns it to any subsequent then() method.
  .then(parsedFoods => {
    // This line of code accepts the parsed JSON as the argument to a function, and then uses console.table() to display the results.
    console.table(parsedFoods);
  });

  const printFoodItems = (food) => {
    food.forEach(item => {
      console.log(item);
    });
  }


  //Create a DOM element in your index.html with a class of foodList.
  //Create a function which returns a string template. The template is the HTML representation for a food item.
  //Create a function that inserts an HTML representation of a food into the DOM


const foodFactory = (food) => {
  return `
    <section class="food_container">
    <h1>${food.name}</h1>
    <h5>${food.ethnicity}</h5>
    <h5>${food.category}</h5>
    </section>
  `
};

const addFoodToDom = (foodAsHTML) => {
  const foodList = document.querySelector(".foodList");
  foodList.innerHTML += foodAsHTML;
};

fetch(url)
  .then(foods => foods.json())
  .then(parsedFoods => {
    parsedFoods.forEach(food => {
      const foodAsHTML = foodFactory(food);
      addFoodToDom(foodAsHTML);
    })
});
