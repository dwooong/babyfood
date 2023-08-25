const categories = ['한식', '중식', '일식', '양식', '후식', '야식', '다이어트' ];
let categoryMenus = {};

// 같은 폴더 내 JSON 파일을 이용할 경우
// Function to fetch menu data from JSON file
// async function getMenuData() {
//   try {
//     const response = await fetch('menuData.json');
//     if (!response.ok) {
//       throw new Error(`Failed to fetch menu data (HTTP status: ${response.status}).`);
//     }
//     return await response.json();
//   } catch (error) {
//     alert('Error fetching menu data.');
//     console.error(error);
//     return {};
//   }
// }


// Update the URL to point to the external JSON file
const externalJsonUrl = 'https://gist.githubusercontent.com/dwooong/ea2c673165c2dc54767228bd012b7173/raw/c04e7321ef9955a361593808426ebb86f252e885/menuData.json';

// Function to fetch menu data from JSON file
async function getMenuData() {
  try {
    const response = await fetch(externalJsonUrl); // Use the external URL
    if (!response.ok) {
      throw new Error(`Failed to fetch menu data (HTTP status: ${response.status}).`);
    }
    return await response.json();
  } catch (error) {
    alert('Error fetching menu data.');
    console.error(error);
    return {};
  }
}


// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


let selectedLanguage = 'Korean'; // Default language is Korean

// Function to handle language selection
function selectLanguage(language) {
  selectedLanguage = language;
  
  const selectedCategory = document.querySelector('.category-btn.active');

  if (!selectedCategory) {
    alert('메뉴 카테고리를 먼저 선택해 주세요');
    return;
  }
  selectCategory(selectedCategory.innerText);
}


// Function to handle category selection
async function selectCategory(category) {
  const foodImagesRoulette = document.querySelector('.scopeHidden > ul');
  foodImagesRoulette.textContent = '';

  const buttons = document.querySelectorAll('.category-btn');
  buttons.forEach((button) => {
    if (button.innerText === category) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });

  const foodImages = document.querySelectorAll('.food-images-category');

  const menuData = await getMenuData();
  let menus;
  if (category === '전체') {
    menus = categories.reduce((allMenus, cat) => {
      return allMenus.concat(menuData[cat].menus);
    }, []);
  } else {
    menus = menuData[category].menus;
  }

  menus = shuffleArray(menus); // Shuffle the menus array randomly

  // Ensure we have at least 25 menus, if not, duplicate the menus to fill the roulette
  while (menus.length < 25) {
    menus = menus.concat(menus);
  }

  // Take the first 25 menus to display in the roulette
  menus = menus.slice(0, 25);

  for (const menu of menus) {
    // Display the menu names based on the selected language
    const name = selectedLanguage === 'Korean' ? menu.nameKorean : menu.nameEnglish;
    const url = menu.url; // Get the URL from the menu data
    foodImagesRoulette.innerHTML += `<li><a href="${url}" target="_blank"><img src="${menu.image}" alt="${name}" /><div><img src="instagram_logo.png" alt="Instagram" class="insta_logo"/><div class="menu-pan">${name}</div></div></a></li>`;
  }
}

// Initialize the app when the page is loaded
document.addEventListener('DOMContentLoaded', initApp);

async function initApp() {
  // Show the initial category images for "All" category
  selectCategory('전체');
}

// Function to randomly rearrange the menus in the roulette
function rearrangeRouletteMenus() {
  const foodImagesRoulette = document.querySelector('.scopeHidden > ul');
  const menus = Array.from(foodImagesRoulette.querySelectorAll('li'));
  shuffleArray(menus);

  // Remove existing <li> elements
  foodImagesRoulette.textContent = '';

  // Append shuffled <li> elements back to the roulette
  for (const menu of menus) {
    foodImagesRoulette.appendChild(menu);
  }
}

// Event listener for the "click" button click to run the roulette
document.querySelector('.start-btn').addEventListener('click', async () => {
  const foodImagesRoulette = document.querySelector('.scopeHidden > ul');

  // Randomly rearrange the menus in the roulette first
  rearrangeRouletteMenus();

  const move = -150 * 7;
  // const move = -150 * 15; <-- 원래 값


  // Reset the roulette wheel position to the starting point
  foodImagesRoulette.style.transition = '0s'; // Disable transition
  foodImagesRoulette.style.left = '0px';

  // Allow some time for the browser to apply the position change before enabling transition
  await new Promise((resolve) => setTimeout(resolve, 10));

  foodImagesRoulette.style.transition = '1.2s ease';
  foodImagesRoulette.style.left = `${move}px`;

  // Allow some time for the animation to finish before recommending the menu
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Get the selected category button
  const selectedCategory = document.querySelector('.category-btn.active');
  if (!selectedCategory) {
    alert('Please select a category first.');
    return;
  }

  const menuData = await getMenuData();
  const category = selectedCategory.innerText;

  if (category === '전체') {
    // Combine all the menus from all categories into a single array
    const allMenus = categories.reduce((allMenus, cat) => {
      return allMenus.concat(menuData[cat].menus);
    }, []);
  } else {
    const categoryMenus = menuData[category].menus;
  }
});
