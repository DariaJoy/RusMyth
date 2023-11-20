      document.addEventListener("DOMContentLoaded", function () {
        var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
        console.log(scrollbar);
        document.querySelector('[href="#openModalShaman"]').addEventListener('click', function () {
          document.body.style.overflow = 'hidden';
          document.querySelector('#openModalShaman').style.marginLeft = scrollbar;
        });
        document.querySelector('[href="#closeShaman"]').addEventListener('click', function () {
          document.body.style.overflow = 'visible';
          document.querySelector('#openModalShaman').style.marginLeft = '0px';
        });
      });