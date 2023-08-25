// 선택한 재료들 담는 리스트
let itemList = [];
let ct = 0;

// select 창에서 선택하면 itemList에 항목 추가
let selectItems = document.getElementById('selectItems');
selectItems.addEventListener("change", countSelectedItem);
selectItems.addEventListener("change", () => handleOnChange(selectItems));

function countSelectedItem() {
  ct++;
}

function handleOnChange(el) {
  let itemValue = el.options[el.selectedIndex].value;
  itemList.push(itemValue);

  createItemBtn(itemValue);
  console.log(`itemList is`);
  console.log(itemList);
}

function createItemBtn(el){
  let showEl = document.getElementById('selectedItems');
  let createdBtn = document.createElement('button');
  let createdBtnText = document.createTextNode(el);
  
  let thisElId = 'btnId' + ct;
  createdBtn.setAttribute("id", thisElId);
  createdBtn.appendChild(createdBtnText);
  createdBtn.addEventListener('click', () => deleteDiv(thisElId, el));
  console.log('create New Btn');
  console.log(createdBtn);
  
  showEl.appendChild(createdBtn);
}


function deleteDiv(id, val) {
  let delTarget = document.getElementById(id);
  console.log('Delete Btn');
  console.log(delTarget);
  delTarget.remove();
  
  deleteList(val);
}

function deleteList(el){
  console.log('i want to delete this one');
  console.log(el);

  // 지우려고 하는 항목의 순서 찾고
  let idx = itemList.indexOf(el)
  // list에서 그 순서에 있는 항목 지우기
  if (idx > -1) itemList.splice(idx, 1)
  console.log(`after delete, itemList is`);
  console.log(itemList);
}

// itemList에 담긴 항목들과 data에 포함된 메뉴의 메인재료 비교
// jsonData 메인재료 <= itemList인 Object 표시 (itemList가 메인재료 모두 포함)
function compareItemsAll() {
  let itemListNewSet = new Set(itemList);
  // console.log('=====All Include=====');
  // console.log('  itemListNewSet is  ');
  // console.log(itemListNewSet);

  let result = jsonData.filter((e) => 
    e.메인재료.every((m) => itemListNewSet.has(m))
  )
  // console.log(result);
  // console.log('=====All Include=====');
  // console.log('');
  return result;
}

  // jsonData의 메인재료 >= itemList 인 Object만 표시 (itemList가 메인재료 일부만 포함)
  function compareItemsSome() {
    let itemListNewSet = new Set(itemList);
    // console.log('-----Some Include-----');
    // console.log('  itemListNewSet is  ');
    // console.log(itemListNewSet);
  
    let result = jsonData.filter((e) => 
      e.메인재료.some((m) => itemListNewSet.has(m))
    )

    let resultExclude = jsonData.filter((e) => 
    e.메인재료.every((m) => itemListNewSet.has(m))
    )

    // let newResult = result-resultExclude;
    newResult = result.filter( ( el ) => !resultExclude.includes( el ) );
  
    // console.log('result');
    // console.log(result);
    // console.log('resultExclude');
    // console.log(resultExclude);
    // console.log('newResult (result - resultExclude)');
    // console.log(newResult);
    // console.log('-----Some Include-----');
    // console.log('');
    return newResult;
  }