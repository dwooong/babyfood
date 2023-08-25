const requestURL = './js/data.json';

// XMLHttpRequest : 서버로부터 데이터를 받아오기 위해 사용하는 객체
let request = new XMLHttpRequest();
request.open('GET', requestURL);
// json 타입으로 변경
request.responseType = 'json';
request.onload = () => {
  let responseData = request.response;
  jsonDataTojs(responseData);
  // console.log(`*******json Data EXAMPLE*******`);
  // console.log(`responseData[0].id is ${responseData[0].id}`);
  // console.log(`responseData[0].value is ${responseData[0].value}`);
  // console.log(`*******json Data EXAMPLE*******`);
};
request.send();

// json data를 가져와서 배열로 만들기
let jsonData = [];
function jsonDataTojs(jsonObj) {
  for (let i = 0; i < jsonObj.length; i++) {
    jsonData.push(jsonObj[i])
  }
}