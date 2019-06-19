window.addEventListener('load', () => {
   // Variables

   const navbar = document.querySelector('.nav');
   const offsetTopNavbar = navbar.offsetTop + 15;
   const navList = document.querySelector('.nav__list');
   const navLinks = document.querySelectorAll('.nav__link');
   // Change date at footer
   const date = new Date();
   const copyYear = document.getElementById('year');
   copyYear.innerText = date.getFullYear();

   window.addEventListener('scroll', () => {
      if (this.scrollY >= offsetTopNavbar) {
         navbar.classList.add('nav-fixed');
         navList.classList.add('nav-fixed__list');

         navLinks.forEach(link => link.classList.add('nav-fixed__link'));
      } else {
         navbar.classList.remove('nav-fixed');
         navList.classList.remove('nav-fixed__list');
         navLinks.forEach(link => link.classList.remove('nav-fixed__link'));
      }
   });
});
