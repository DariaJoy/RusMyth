      document.addEventListener("DOMContentLoaded", function () {
        var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
        console.log(scrollbar);
        document.querySelector('[href="#openModalBaba"]').addEventListener('click', function () {
          document.body.style.overflow = 'hidden';
          document.querySelector('#openModalBaba').style.marginLeft = scrollbar;
        });
        document.querySelector('[href="#closeBaba"]').addEventListener('click', function () {
          document.body.style.overflow = 'visible';
          document.querySelector('#openModalBaba').style.marginLeft = '0px';
        });
      });