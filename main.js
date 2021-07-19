document.addEventListener('DOMContentLoaded', function () {

  // Accordion init

  $("#accordion").accordion({
    heightStyle: "content",
    collapsible: true,
    active: false,
  });

  // =============================================

  // Swiper init

  const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  // =============================================

  // Cancel focus effects, when you click on the element

  function blurByMouseUp(CSSClass) {
    let elements = document.getElementsByClassName(CSSClass);
    for (let el of elements) {
      el.addEventListener('mouseup', function () {
        this.blur();
      });
    }
  }

  blurByMouseUp('logo__link');
  blurByMouseUp('btn');

  // =============================================

  // Carousel init

  let btns = document.querySelectorAll('.carousel__controls-step__button');
  let contentItems = document.querySelectorAll('.carousel__item');

  btns.forEach(function callback (btn, btnIndex) {
    btn.addEventListener('click', function(event){
      btns.forEach(function callback (btn){
        btn.classList.remove('carousel__controls-step__button_active');
      })
      event.target.classList.add('carousel__controls-step__button_active');
      contentItems.forEach(function callback (contentItem) {
        contentItem.classList.remove('carousel__item_active');
      });
      contentItems[btnIndex].classList.add('carousel__item_active');
    });
  });

  // =============================================

  // Adding hover styles on accordion header

  let accordionHeaders = document.querySelectorAll('.ui-accordion-header');

  accordionHeaders.forEach(function callback(accordionHeader, index) {

    accordionHeader.addEventListener('mouseover', function () {
      if (index === accordionHeaders.length - 1) {
        accordionHeader.style.borderTop = "1px solid var(--main_color)";
        accordionHeader.parentNode.style.borderBottom = "1px solid var(--main_color)";
      }
      else {
        accordionHeaders[index].style.borderTop = "1px solid var(--main_color)";
        index++;
        accordionHeaders[index].style.borderTop = "1px solid var(--main_color)";
        index--;
      }
    });

    accordionHeader.addEventListener('mouseout', function (event) {
      if (index === accordionHeaders.length - 1) {
        accordionHeader.style.borderTop = "1px solid #CACACA";
        accordionHeader.parentNode.style.borderBottom = "1px solid #CACACA";
      }
      else {
        accordionHeaders[index].style.borderTop = "1px solid #CACACA";
        index++;
        accordionHeaders[index].style.borderTop = "1px solid #CACACA";
        index--;
      }
    });
  });

  // =============================================

  // Mobile navigation menu show/hide effects

  document.body.addEventListener('click', function (event) {
    console.log('s');
    if (event.target == document.querySelector('.burger-menu__button') || event.target == document.querySelector('.dark-scene_active')) {

      document.querySelector('.header__nav-menu').classList.toggle('header__nav-menu_active');
      document.querySelector('.dark-scene').classList.toggle('dark-scene_active');
      document.body.classList.toggle('scroll-disabled');
      document.querySelector('.header').classList.toggle('visible');
      document.querySelectorAll('.burger-menu__stick')[0].classList.toggle('burger-menu__stick_2');
      document.querySelectorAll('.burger-menu__stick')[1].classList.toggle('burger-menu__stick_1');
      document.querySelector('.burger-menu__button').querySelectorAll('rect').forEach(el => el.classList.toggle('burger-menu--active'))
    }
  });

  // =============================================

  // Checking terms policy aggrement acception

  document.querySelector('.request-form').addEventListener('keydown', function (e) {
    if (e.keyCode === 13 && e.target == document.querySelector('.request-form__input_agr-accept')) {
      e.target.checked = !e.target.checked;
      e.preventDefault();
    }
  })

  // =============================================

  window.addEventListener('load', function () {
    document.body.style.opacity = '1';
  });

});
