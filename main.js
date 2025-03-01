var mainNav = document.querySelector('.mobile-nav-border');
    
        window.onscroll = function() {
          windowScroll();
        };
        
        function windowScroll() {
            mainNav.classList.toggle("navbar-sticky", mainNav.scrollTop > 50 || document.documentElement.scrollTop > 50);
        }

       
