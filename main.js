/**
* Template Name: Bootslander
* Template URL: https://bootstrapmade.com/bootslander-free-bootstrap-landing-page-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  // /**
  //  * Mobile nav toggle
  //  */
  // const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  // function mobileNavToogle() {
  //   document.querySelector('body').classList.toggle('mobile-nav-active');
  //   mobileNavToggleBtn.classList.toggle('bi-list');
  //   mobileNavToggleBtn.classList.toggle('bi-x');
  // }
  // mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });


  /**
     * Preloader
     */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
      document.querySelector('body').style.overflow = 'auto';
    });
  }


  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
  * Animation of team cards
  *
  const member1 = document.getElementById('member1');
  const member2 = document.getElementById('member2');
  const member3 = document.getElementById('member3');
  const pic1 = document.getElementById('pic1');
  const pic2 = document.getElementById('pic2');
  const pic3 = document.getElementById('pic3');

  member1.addEventListener('mouseenter', () => {
    member1.classList.add('animation');
    pic1.classList.add('animation2')

  });

  member1.addEventListener('mouseleave', () => {
    member1.classList.remove('animation');
    pic1.classList.remove('animation2')
  });

  member2.addEventListener('mouseenter', () => {
    member2.classList.add('animation');
    pic2.classList.add('animation2')
  });

  member2.addEventListener('mouseleave', () => {
    member2.classList.remove('animation');
    pic2.classList.remove('animation2')
  });
  member3.addEventListener('mouseenter', () => {
    member3.classList.add('animation');
    pic3.classList.add('animation2')
  });

  member3.addEventListener('mouseleave', () => {
    member3.classList.remove('animation');
    pic3.classList.remove('animation2')
  });*/


  /**
   * Navbar chage item
   *
  document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');

    function navmenuScrollspy() {
      navLinks.forEach(navLink => {
        const section = document.querySelector(navLink.getAttribute('href'));
        const position = window.scrollY + 200;

        if (position >= section.offsetTop && position < (section.offsetTop + section.offsetHeight)) {
          navLinks.forEach(link => link.classList.remove('active'));
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', navmenuScrollspy);
    navmenuScrollspy(); // Llama a la función al cargar la página
  })();*/
})();