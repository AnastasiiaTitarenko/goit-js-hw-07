const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${ categories.length }`);

categories.forEach(category => {
    const categoryTitle = category.querySelector("h2").textContent;
    const categoryItems = category.querySelectorAll("li");

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements of items : ${categoryItems.length}`);
});