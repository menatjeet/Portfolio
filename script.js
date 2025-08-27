
      function toggleMenu() {
        const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
      }

      function closeMenu() {
        const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
      }

      // Close menu when clicking outside
      document.addEventListener('click', function(event) {
        const menu = document.querySelector('.menu');
        const mobileMenu = document.getElementById('mobileMenu');
        
        if (!menu.contains(event.target) && mobileMenu.classList.contains('active')) {
          closeMenu();
        }
      });

      // Close menu on window resize to desktop
      window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
          closeMenu();
        }
      });
    