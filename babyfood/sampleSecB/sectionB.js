const sectionBIngredients = document.getElementById('sectionBIngredients');
const selectedIngredient = document.getElementById('selectedIngredient');
const menusCanBeMade = document.getElementById('menusCanBeMade');
const menusWithAdditionalIngredients = document.getElementById('menusWithAdditionalIngredients');

let sectionBFoodData;

// Function to fetch JSON data
async function fetchData() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    sectionBFoodData = data.sectionBFoodData;
    displaySectionBIngredients();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

const ingredientCategories = {
  "Meat": ["Beef", "Pork", "Lamb"],
  "Fish": ["Mackerel", "Tuna"],
  "Vegetables": ["Onion", "Carrot", "Pumpkin"]
};

let selectedIngredients = [];

function displaySectionBIngredients() {
  sectionBIngredients.innerHTML = '';
  for (const category in ingredientCategories) {
    const categoryContainer = document.createElement('div');
    categoryContainer.className = 'ingredient-category';
    categoryContainer.innerHTML = `<h4>${category}</h4>`;
    
    ingredientCategories[category].forEach(ingredient => {
      const ingredientItem = document.createElement('span');
      ingredientItem.textContent = ingredient;
      ingredientItem.className = 'ingredient';
      categoryContainer.appendChild(ingredientItem);
    });

    sectionBIngredients.appendChild(categoryContainer);
  }
}

function displaySectionBMenus(selectedIngredients) {
  menusCanBeMade.innerHTML = '';
  menusWithAdditionalIngredients.innerHTML = '';

  sectionBFoodData.forEach(menu => {
    const missingIngredients = menu['Main Ingredient'].filter(ingredient => !selectedIngredients.includes(ingredient));
    
    const menuItem = document.createElement('li');
    menuItem.innerHTML = `
      <a href="${menu.Link}" target="_blank">${menu.Menu}</a>
    `;

    if (missingIngredients.length === 0) {
      menusCanBeMade.appendChild(menuItem);
    } else {
      const additionalIngredients = missingIngredients.join(', ');
      const additionalMenuItem = document.createElement('li');
      additionalMenuItem.innerHTML = `
        <a href="${menu.Link}" target="_blank">${menu.Menu}</a> (Add: ${additionalIngredients})
      `;
      menusWithAdditionalIngredients.appendChild(additionalMenuItem);
    }
  });
}

sectionBIngredients.addEventListener('click', event => {
  if (event.target.classList.contains('ingredient')) {
    const ingredient = event.target.textContent;
    toggleSelectedIngredient(ingredient);
    updateSelectedIngredientDisplay();
    displaySectionBMenus(selectedIngredients);
  }
});

function toggleSelectedIngredient(ingredient) {
  const index = selectedIngredients.indexOf(ingredient);
  if (index === -1) {
    selectedIngredients.push(ingredient);
  } else {
    selectedIngredients.splice(index, 1);
  }
}

function updateSelectedIngredientDisplay() {
  selectedIngredient.textContent = selectedIngredients.join(', ');
}

// Fetch data and initialize Section B
fetchData();
