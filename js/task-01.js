const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

const categoriesArray = [...totalCategories].map((categorie) =>
      `Category: ${categorie.firstElementChild.textContent}
       Elements: ${categorie.children[1].children.length}`)
       .join("\n");
console.log(categoriesArray);