var typed = new Typed("#text", {
  strings: ["OCEAN.", "CREATIVE.", "DESIGN.", "DEVELOP."],
  typeSpeed: 100,
  backSpeed: 150,
  loop: true,
});

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".number");
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText.replace("+", "");
      const increment = target / 200;

      if (count < target) {
        counter.innerText = `${Math.ceil(count + increment)}+`;
        setTimeout(updateCount, 15);
      } else {
        counter.innerText = `${target}+`;
      }
    };

    updateCount();
  });
});

var swiper = new Swiper(".testSwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: true,
});

var mixer = mixitup(".portfolio_image");

document.addEventListener("DOMContentLoaded", function () {
  // اختيار جميع العناصر في الصفحة
  const elements = document.querySelectorAll("*");

  // إضافة كلاس "fade-in" لجميع العناصر
  elements.forEach((element) => {
    element.classList.add("fade-in");
  });

  // التحقق من وجود عناصر مرئية عند تحميل الصفحة
  window.addEventListener("scroll", function () {
    elements.forEach(function (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight) {
        element.classList.add("visible");
      }
    });
  });

  // التحقق من الحالة الأولية عند تحميل الصفحة
  elements.forEach(function (element) {
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight) {
      element.classList.add("visible");
    }
  });
});