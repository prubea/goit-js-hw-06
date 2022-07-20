const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.innerText = ingredient;
  ingredientsList.append(ingredientItem);
});
