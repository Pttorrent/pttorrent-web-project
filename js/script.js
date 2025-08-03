document.addEventListener("DOMContentLoaded", function () {
  // 選取 header 中所有指向錨點的連結 (包含 Logo 和導覽列項目)
  const scrollLinks = document.querySelectorAll('header nav a[href^="#"]');
  // 找到漢堡選單的 checkbox
  const menuToggle = document.querySelector("#menu-toggle");

  scrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      // 確保目標元素存在才執行後續動作
      if (targetElement) {
        // --- 平滑滾動邏輯 (您的原始碼，寫得很好) ---
        const headerHeight = document.querySelector("header").offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // --- [新增] 自動關閉漢堡選單 ---
        // 如果選單是開啟的 (checkbox 被勾選)，則取消勾選以關閉它
        if (menuToggle && menuToggle.checked) {
          menuToggle.checked = false;
        }
      }
    });
  });
});
