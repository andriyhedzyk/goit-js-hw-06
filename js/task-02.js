const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let array = document.getElementById('ingredients')
let items = ingredients.map(ingredient => {
    const list = document.createElement('li');
          list.textContent = ingredient;
          list.classList.add("item");
    return list
});
array.append(...items);
console.log(array);

