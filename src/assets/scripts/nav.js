class Nav {
    constructor() {
        this.nav = document.querySelector('.nav')
        this.bodyLock = document.querySelector('body')
        this.hamburger = document.querySelector('.hamburger-menu')
    }
    init() {
        this.hamburger.addEventListener('click', this.handleClickBurger.bind(this))
    }
    handleClickBurger(e) {
        this.hamburger.classList.toggle('active')
        this.nav.classList.toggle('show')
        this.bodyLock.classList.toggle('lock')
    }
}
export default new Nav()