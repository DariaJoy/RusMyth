      document.addEventListener("DOMContentLoaded", function () {
        var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
        console.log(scrollbar);
        document.querySelector('[href="#openModalEnchantress"]').addEventListener('click', function () {
          document.body.style.overflow = 'hidden';
          document.querySelector('#openModalEnchantress').style.marginLeft = scrollbar;
        });
        document.querySelector('[href="#closeEnchantress"]').addEventListener('click', function () {
          document.body.style.overflow = 'visible';
          document.querySelector('#openModalEnchantress').style.marginLeft = '0px';
        });
      });