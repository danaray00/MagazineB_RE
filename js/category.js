
  // 초기에 'Magazine B' 카테고리가 선택되도록 설정
  showImages('Magazine_B', document.querySelector('.left_category .selected'));

  // JavaScript로 이미지를 토글하고 선택된 카테고리 스타일을 변경하는 함수
  function showImages(category, element) {
    // 모든 이미지 컨테이너를 숨김
    document.querySelectorAll('.shop_right').forEach(function(container) {
      container.style.display = 'none';
    });

  // 클릭된 카테고리에 해당하는 이미지 컨테이너만 표시
  document.querySelector(`#${category}`).style.display = 'block';

    // 모든 카테고리에 selected 클래스를 제거
    document.querySelectorAll('.left_category').forEach(function(cat) {
      cat.classList.remove('selected');
    });

    // 선택된 카테고리에 selected 클래스 추가
    element.classList.add('selected');
  } 