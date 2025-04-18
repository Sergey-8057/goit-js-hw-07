const itemElem = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemElem.length}`);

itemElem.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryItems = item.querySelectorAll('li');

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems.length}`);
});
