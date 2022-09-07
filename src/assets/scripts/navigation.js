import nav from "./nav"
class Navigation {
    init() {
        nav.nav.addEventListener('click', this.navigationScroll.bind(this))
    }
    navigationScroll(event) {
        if (event.target.closest('.nav__link[data-goto]')) {
            const navLink = event.target.closest('.nav__link[data-goto]')
            document.querySelectorAll('.nav__link').forEach(item => {
                item.classList.remove('active')
            })
            navLink.classList.add('active')

            if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
                const scrollBlock = document.querySelector(navLink.dataset.goto)
                const scrollBlockValue = scrollBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight

                if (nav.hamburger.classList.contains('active')) {
                    nav.hamburger.classList.remove('active')
                    nav.nav.classList.remove('show')
                    nav.bodyLock.classList.remove('lock')
                }


                window.scrollTo({
                    top: scrollBlockValue,
                    behavior: 'smooth'
                })
                event.preventDefault()
            }
        }
    }
}
export default new Navigation()