const categories = ['한식', '중식'];
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


let selectedLanguage = 'Korean'; // Default language is Korean

// Function to handle language selection
function selectLanguage(language) {
    // 추가 예정
}


// Function to handle category selection
async function selectCategory(category) {
  const foodImagesRoulette = document.querySelector('.secAmenuDisplay > ul');
  foodImagesRoulette.textContent = '';

  const buttons = document.querySelectorAll('.category-btn');
  buttons.forEach((button) => {
    if (button.innerText === category) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });


  const menuData = await getMenuData();
  let menus;
  if (category === '전체') {
    menus = categories.reduce((allMenus, cat) => {
      return allMenus.concat(menuData[cat].menus);
    }, []);
  } else {
    menus = menuData[category].menus;
  }


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