      document.addEventListener("DOMContentLoaded", function () {
        var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
        console.log(scrollbar);
        document.querySelector('[href="#openModalKoshey"]').addEventListener('click', function () {
          document.body.style.overflow = 'hidden';
          document.querySelector('#openModalKoshey').style.marginLeft = scrollbar;
        });
        document.querySelector('[href="#closeKoshey"]').addEventListener('click', function () {
          document.body.style.overflow = 'visible';
          document.querySelector('#openModalKoshey').style.marginLeft = '0px';
        });
      });