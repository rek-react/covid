class HeaderFixed {
    constructor() {
        this.header = document.querySelector('.header')
        this.scrollTop = document.documentElement.scrollTop
    }
    init() {
        this.checkScroll(this.scrollTop)
        window.addEventListener('scroll', this.handleScrollWindow.bind(this))
    }
    handleScrollWindow(e) {
        const scrollTop = document.documentElement.scrollTop
        this.checkScroll(scrollTop)
    }
    checkScroll(scrollTop) {
        if (scrollTop > 0) {
            this.header.classList.add('fixed')
        } else {
            this.header.classList.remove('fixed')
        }
    }
}
export default new HeaderFixed()