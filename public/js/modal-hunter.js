      document.addEventListener("DOMContentLoaded", function () {
        var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
        console.log(scrollbar);
        document.querySelector('[href="#openModalHunter"]').addEventListener('click', function () {
          document.body.style.overflow = 'hidden';
          document.querySelector('#openModalHenter').style.marginLeft = scrollbar;
        });
        document.querySelector('[href="#close"]').addEventListener('click', function () {
          document.body.style.overflow = 'visible';
          document.querySelector('#openModalHunter').style.marginLeft = '0px';
        });
      });