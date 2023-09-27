(function () {
  const get = (target) => document.querySelector(target);
  const getAll = (target) => document.querySelectorAll(target);

  // top-bar 시간 불러오기
  function getClock() {
    const $timeBox = get(".top-bar__time");
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes().toString().padStart(2, "0");

    $timeBox.innerText = `${hour}:${minute}`;
  }

  // 장바구니 아코디언 메뉴 보여지기
  const $totalGroup = get(".contents__total");
  const $accodionBtn = $totalGroup;

  $accodionBtn.addEventListener("click", () => {
    if (!$totalGroup.classList.contains("active")) {
      $totalGroup.classList.add("active");
    } else {
      $totalGroup.classList.remove("active");
    }
  });

  // contents__button 클릭 시 다음 페이지 보여지기
  const $secondPage = get(".contents__page-second");
  const $contentsBtns = getAll(".contents__button");

  $contentsBtns.forEach((button) => {
    button.addEventListener("click", () => {
      if ($secondPage.classList.contains("active")) {
        $secondPage.classList.remove("active");
      } else {
        $secondPage.classList.add("active");
      }
    });
  });

  // 돔 로딩 이벤트
  window.addEventListener("DOMContentLoaded", () => {
    getClock();
    setInterval(getClock, 3000);

    // $phoneWrap.addEventListener("scroll", topBarOnScroll);
  });
})();
