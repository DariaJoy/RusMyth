      document.addEventListener("DOMContentLoaded", function () {
        var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
        console.log(scrollbar);
        document.querySelector('[href="#openModalWarrior"]').addEventListener('click', function () {
          document.body.style.overflow = 'hidden';
          document.querySelector('#openModalWarrior').style.marginLeft = scrollbar;
        });
        document.querySelector('[href="#closeWarrior"]').addEventListener('click', function () {
          document.body.style.overflow = 'visible';
          document.querySelector('#openModalWarrior').style.marginLeft = '0px';
        });
      });