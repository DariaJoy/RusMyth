      document.addEventListener("DOMContentLoaded", function () {
        var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
        console.log(scrollbar);
        document.querySelector('[href="#openModalKikimora"]').addEventListener('click', function () {
          document.body.style.overflow = 'hidden';
          document.querySelector('#openModalKikimora').style.marginLeft = scrollbar;
        });
        document.querySelector('[href="#closeKikimora"]').addEventListener('click', function () {
          document.body.style.overflow = 'visible';
          document.querySelector('#openModalKikimora').style.marginLeft = '0px';
        });
      });