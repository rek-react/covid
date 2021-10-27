//headerFixed
const header = document.querySelector('.header');
const scrollTop = document.documentElement.scrollTop
checkScroll(scrollTop)

window.addEventListener('scroll', () => {
   const scrollTop = document.documentElement.scrollTop
   checkScroll(scrollTop)
})
function checkScroll(scrollTop) {
   if (scrollTop > 0) {
      header.classList.add('fixed')
   } else {
      header.classList.remove('fixed')
   }
}


//menu
const nav = document.querySelector('.nav')
const bodyLock = document.querySelector('body')
const hamburger = document.querySelector('.hamburger-menu')

if (hamburger) {
   hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active')
      nav.classList.toggle('show')
      bodyLock.classList.toggle('lock')
   })
}



//navigation 

var navLinks = document.querySelectorAll('.nav__link[data-goto]')

if (navLinks) {
   nav.addEventListener('click', navigationScroll)
}

function navigationScroll(event) {
   if (event.target.closest('.nav__link[data-goto]')) {
      const navLink = event.target.closest('.nav__link[data-goto]')

      document.querySelectorAll('.nav__link').forEach(item => {
         item.classList.remove('active')
      })
      navLink.classList.add('active')

      if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
         const scrollBlock = document.querySelector(navLink.dataset.goto)
         const scrollBlockValue = scrollBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight

         if (hamburger.classList.contains('active')) {
            hamburger.classList.remove('active')
            nav.classList.remove('show')
            bodyLock.classList.remove('lock')
         }


         window.scrollTo({
            top: scrollBlockValue,
            behavior: 'smooth'
         })
         event.preventDefault()
      }
   }

}