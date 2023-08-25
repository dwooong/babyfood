const sectionAButton = document.getElementById('sectionAButton');
const sectionBButton = document.getElementById('sectionBButton');
const sectionA = document.getElementById('sectionA');
const sectionB = document.getElementById('sectionB');
const sectionACategories = document.getElementById('sectionACategories');
const sectionAFoodList = document.getElementById('sectionAFoodList');

sectionAButton.addEventListener('click', () => {
  sectionA.style.display = 'block';
  sectionB.style.display = 'none';
});

sectionBButton.addEventListener('click', () => {
  sectionA.style.display = 'none';
  sectionB.style.display = 'block';
});

sectionACategories.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    const category = event.target.id.replace('Btn', '');
    displaySectionAFood(category);
  }
});

// Function to display foods in Section A based on category
function displaySectionAFood(category) {
  sectionAFoodList.innerHTML = '';
  const filteredData = category === 'All' ? sectionAFoodData : sectionAFoodData.filter(item => item.Category === category);

  filteredData.forEach(item => {
    const foodItem = document.createElement('div');
    foodItem.className = 'food-item';
    foodItem.innerHTML = `
      <img src="${item.Image}" alt="${item.Name}" class="food-image">
      <p class="food-name">${item.Name}</p>
      <a href="${item.InstagramLink}" target="_blank"><img src="instagram-logo.png" alt="Instagram" class="instagram-logo"></a>
    `;
    sectionAFoodList.appendChild(foodItem);
  });
}