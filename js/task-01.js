const categoryCount = document.querySelectorAll("li.item").length;
console.log(`Number of categories: ${categoryCount}`);

const elementName = document.querySelectorAll("li.item").forEach((event) => {
  console.log(`Category: ${event.querySelector("h2").textContent}`);
  console.log(`Elements: ${event.querySelectorAll("li").length}`);
});