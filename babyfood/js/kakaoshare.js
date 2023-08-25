function kakaoShare(){
  let url = 'https://refrigerator-eatoff.netlify.app/';
  let imageurl = 'https://images.unsplash.com/photo-1571172964276-91faaa704e1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80';
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '냉장고 털어먹기',
      description: '냉장고 재료로 레시피 검색',
      imageUrl:imageurl,
      link: {
        mobileWebUrl: url,
        webUrl: url
      }
    },
    buttons: [
      {
        title: '냉장고 털기',
        link: {
          mobileWebUrl: url,
          webUrl: url
        }
      }
    ]
  });
}