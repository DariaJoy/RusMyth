      document.addEventListener("DOMContentLoaded", function () {
        var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
        console.log(scrollbar);
        document.querySelector('[href="#openModalSnake"]').addEventListener('click', function () {
          document.body.style.overflow = 'hidden';
          document.querySelector('#openModalSnake').style.marginLeft = scrollbar;
        });
        document.querySelector('[href="#closeSnake"]').addEventListener('click', function () {
          document.body.style.overflow = 'visible';
          document.querySelector('#openModalSnake').style.marginLeft = '0px';
        });
      });