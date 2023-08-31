const categories = ['한식', '중식'];
let categoryMenus = {};

// 같은 폴더 내 JSON 파일을 이용할 경우
async function getMenuData() {
  try {
    const response = await fetch('js/dataA.json');
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


// Update the URL to point to the external JSON file
// const externalJsonUrl = 'https://gist.githubusercontent.com/dwooong/ea2c673165c2dc54767228bd012b7173/raw/c04e7321ef9955a361593808426ebb86f252e885/menuData.json';

// Function to fetch menu data from JSON file
// async function getMenuData() {
//   try {
//     const response = await fetch(externalJsonUrl); // Use the external URL
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


let selectedLanguage = 'Korean'; // Default language is Korean

// Function to handle language selection
function selectLanguage(language) {
    // 추가 예정
}


// Function to handle category selection
async function selectCategory(category) {
  const foodImagesRoulette = document.querySelector('.secAmenuDisplay > ul');
  foodImagesRoulette.textContent = '';

  const secAdetailImagelist = document.querySelector('.secAdetailImage > ul');
  secAdetailImagelist.textContent = '';

  const secAmainIngredientlist = document.querySelector('.secAmainIngredient > ul');
  secAmainIngredientlist.textContent = '';

  const secAsubIngredientlist = document.querySelector('.secAsubIngredient > ul');
  secAsubIngredientlist.textContent = '';

  const secAseasoninglist = document.querySelector('.secAseasoning > ul');
  secAseasoninglist.textContent = '';



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
    foodImagesRoulette.innerHTML += `<li><button><img class="foodImage" src="${menu.image}" alt="${name}" /><div class="menu-pan-wrapper"><div class="menu-pan">${name}</div></div></button></li>`;
    
    secAdetailImagelist.innerHTML += `<a href="${url}" target="_blank"><img class="menu-pan-logo" src="image/instagram_logo.png" alt="Instagram" class="insta_logo"/></a><li><img class="foodImage" src="${menu.img1}" alt="${name}" /></li>`;
    
    secAmainIngredientlist.innerHTML += `주재료 : <a href="${url}"></a><li>${menu.mainIngredient}</li>`;
    secAsubIngredientlist.innerHTML += `부재료 : <a href="${url}"></a><li>${menu.subIngredient}</li>`;
    secAseasoninglist.innerHTML += `양념 : <a href="${url}"></a><li>${menu.seasoning}</li>`;
  }
}

// 클릭된 메뉴에 대한 상세 이미지와 재료 표시
// function detailMark(){

// }

// Initialize the app when the page is loaded
document.addEventListener('DOMContentLoaded', initApp);

async function initApp() {
  // Show the initial category images for "All" category
  selectCategory('전체');
}