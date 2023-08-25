// 레시피 찾는 버튼 클릭
let findBtn = document.getElementById('findBtn');
findBtn.addEventListener("click", compareItemsAll);
findBtn.addEventListener("click", compareItemsSome);

// 기존 카드 지우기
findBtn.addEventListener("click", () => cardDelete('possibleCard'));
findBtn.addEventListener("click", () => cardDelete('impossibleCard'));

// 지금 가능한 카드 등록
findBtn.addEventListener("click", createForAll);
// 지금 불가능한 카드 등록
findBtn.addEventListener("click", createForSome);


// createDivAll를 가능한 List 갯수만큼 반복하여 실행
function createForAll() {
  let posibleMenuListLength = compareItemsAll().length
  for (let i=0; i<posibleMenuListLength; i++) {
    createDivAll(i)
  }
}
// createDivSome을 불가능한 List 갯수만큼 반복하여 실행
function createForSome() {
  let posibleMenuListLength = compareItemsSome().length
  for (let i=0; i<posibleMenuListLength; i++) {
    createDivSome(i)
  }
}

// compareItemsAll 에 맞는 카드 생성
function createDivAll(i) {
  // <div> 카드 만들기
  let newDiv = document.createElement('div');
  newDiv.className = "card"
  
  // <div>안에 들어갈 항목 만들기
  // title
  let titleDiv = document.createElement('div');
  let titleText = document.createTextNode(compareItemsAll()[i].메뉴);
  titleDiv.className = "card-header"
  titleDiv.appendChild(titleText);

  // image
  let imageDiv = document.createElement('img');
  imageDiv.src = "./image/card.png";

  // card body
  let cardBodyDiv = document.createElement('div');
  cardBodyDiv.className = "cardBody"

  let cardBodyDivH1 = document.createElement('h5');
  let cardBodyDivH2 = document.createElement('h5');
  let cardBodyDivH3 = document.createElement('h5');
  cardBodyDivH1.className = "card-text-h"
  cardBodyDivH2.className = "card-text-h"
  cardBodyDivH3.className = "card-text-h"
  let cardBodyDivH1Text = document.createTextNode('메인재료');
  let cardBodyDivH2Text = document.createTextNode('부재료');
  let cardBodyDivH3Text = document.createTextNode('양념');
  cardBodyDivH1.appendChild(cardBodyDivH1Text);
  cardBodyDivH2.appendChild(cardBodyDivH2Text);
  cardBodyDivH3.appendChild(cardBodyDivH3Text);

  let cardBodyDivH1Div = document.createElement('div');
  let cardBodyDivH2Div = document.createElement('div');
  let cardBodyDivH3Div = document.createElement('div');
  cardBodyDivH1Div.className = "card-text"
  cardBodyDivH2Div.className = "card-text"
  cardBodyDivH3Div.className = "card-text"
  let cardBodyDivH1DivText = document.createTextNode(compareItemsAll()[i].메인재료);
  let cardBodyDivH2DivText = document.createTextNode(compareItemsAll()[i].부재료);
  let cardBodyDivH3DivText = document.createTextNode(compareItemsAll()[i].양념);
  cardBodyDivH1Div.appendChild(cardBodyDivH1DivText);
  cardBodyDivH2Div.appendChild(cardBodyDivH2DivText);
  cardBodyDivH3Div.appendChild(cardBodyDivH3DivText);

  cardBodyDiv.appendChild(cardBodyDivH1);
  cardBodyDiv.appendChild(cardBodyDivH1Div);
  cardBodyDiv.appendChild(cardBodyDivH2);
  cardBodyDiv.appendChild(cardBodyDivH2Div);
  cardBodyDiv.appendChild(cardBodyDivH3);
  cardBodyDiv.appendChild(cardBodyDivH3Div);


  // a tag
  let aTagDiv = document.createElement('a');
  let aTagText = document.createTextNode('만드는 방법');
  let aTagLink = compareItemsAll()[i].링크;
  aTagDiv.setAttribute('href', aTagLink);
  aTagDiv.appendChild(aTagText);
  aTagDiv.className = "makeBtnATag"

  
  // <div>에 항목들 붙이기
  newDiv.appendChild(titleDiv);
  newDiv.appendChild(imageDiv);
  newDiv.appendChild(cardBodyDiv);
  newDiv.appendChild(aTagDiv);
  
  //html에 <div> 붙이기
  let targetId = document.getElementById('possibleCard');
  targetId.appendChild(newDiv);
}

// compareItemsSome 에 맞는 카드 생성
function createDivSome(i) {
  // <div> 카드 만들기
  let newDiv = document.createElement('div');
  newDiv.className = "card"
  
  // <div>안에 들어갈 항목 만들기
  // title
  let titleDiv = document.createElement('div');
  let titleText = document.createTextNode(compareItemsSome()[i].메뉴);
  titleDiv.className = "card-header"
  titleDiv.appendChild(titleText);

  // image
  let imageDiv = document.createElement('img');
  imageDiv.src = "./image/card.png";

  // card body
  let cardBodyDiv = document.createElement('div');
  cardBodyDiv.className = "cardBody"

  let cardBodyDivH1 = document.createElement('h5');
  let cardBodyDivH2 = document.createElement('h5');
  let cardBodyDivH3 = document.createElement('h5');
  cardBodyDivH1.className = "card-text-h"
  cardBodyDivH2.className = "card-text-h"
  cardBodyDivH3.className = "card-text-h"
  let cardBodyDivH1Text = document.createTextNode('메인재료');
  let cardBodyDivH2Text = document.createTextNode('부재료');
  let cardBodyDivH3Text = document.createTextNode('양념');
  cardBodyDivH1.appendChild(cardBodyDivH1Text);
  cardBodyDivH2.appendChild(cardBodyDivH2Text);
  cardBodyDivH3.appendChild(cardBodyDivH3Text);

  let cardBodyDivH1Div = document.createElement('div');
  let cardBodyDivH2Div = document.createElement('div');
  let cardBodyDivH3Div = document.createElement('div');
  cardBodyDivH1Div.className = "card-text"
  cardBodyDivH2Div.className = "card-text"
  cardBodyDivH3Div.className = "card-text"
  let cardBodyDivH1DivText = document.createTextNode(compareItemsSome()[i].메인재료);
  let cardBodyDivH2DivText = document.createTextNode(compareItemsSome()[i].부재료);
  let cardBodyDivH3DivText = document.createTextNode(compareItemsSome()[i].양념);
  cardBodyDivH1Div.appendChild(cardBodyDivH1DivText);
  cardBodyDivH2Div.appendChild(cardBodyDivH2DivText);
  cardBodyDivH3Div.appendChild(cardBodyDivH3DivText);

  cardBodyDiv.appendChild(cardBodyDivH1);
  cardBodyDiv.appendChild(cardBodyDivH1Div);
  cardBodyDiv.appendChild(cardBodyDivH2);
  cardBodyDiv.appendChild(cardBodyDivH2Div);
  cardBodyDiv.appendChild(cardBodyDivH3);
  cardBodyDiv.appendChild(cardBodyDivH3Div);


  // a tag
  let aTagDiv = document.createElement('a');
  let aTagText = document.createTextNode('만드는 방법');
  let aTagLink = compareItemsAll()[i].링크;
  aTagDiv.setAttribute('href', aTagLink);
  aTagDiv.appendChild(aTagText);
  aTagDiv.className = "makeBtnATag"

  
  // <div>에 항목들 붙이기
  newDiv.appendChild(titleDiv);
  newDiv.appendChild(imageDiv);
  newDiv.appendChild(cardBodyDiv);
  newDiv.appendChild(aTagDiv);
  
  //html에 <div> 붙이기
  let targetId = document.getElementById('impossibleCard');
  targetId.appendChild(newDiv);
}

// 생성된 카드 모두 delete
let clearPosBtn = document.getElementById('clearPossilbeBtn');
let clearImposBtn = document.getElementById('clearImpossilbeBtn');
clearPosBtn.addEventListener('click', () => cardDelete('possibleCard'))
clearImposBtn.addEventListener('click', () => cardDelete('impossibleCard'))

// 카드 삭제 function
function cardDelete(where) {
  let target = document.getElementById(where);
  target.innerHTML = '';
}

// <section> main select 중 hidden/display 토글
let sectionMainToggleBtn = document.getElementById('selectTogleBtn');
sectionMainToggleBtn.addEventListener('click', () => titleOnly('selectTogleBtn', 'selectedItems'))
// <section> possible hidden/display 토글
let sectionPossibleToggleBtn = document.getElementById('possibleTogleBtn');
sectionPossibleToggleBtn.addEventListener('click', () => titleOnly('possibleTogleBtn', 'possibleCard'))
// <section> impossible hidden/display 토글
let sectionimpossibleToggleBtn = document.getElementById('impossibleTogleBtn');
sectionimpossibleToggleBtn.addEventListener('click', () => titleOnly('impossibleTogleBtn', 'impossibleCard'))

// 클릭 하면 section 안에 있는 요소들 hidden/display 토글 function
function titleOnly(btn, el) {
  let thisBtn = document.getElementById(btn);
  let target = document.getElementById(el);
  if (target.style.display === "none") {
    target.style.display = "flex";
    thisBtn.innerText = '숨기기'
  } else {
    target.style.display = "none";
    thisBtn.innerText = '보이기'
  }
}