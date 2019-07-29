const home = document.querySelector('.js-home')
const navs = document.querySelectorAll('.js-nav')
if (navs && navs.length) {
    navs.forEach(nav => {
        nav.addEventListener('click', function() {
            const target = document.querySelector(`.js-${this.dataset.target}`)
            if (target) {
                target.classList.add('is-show')
                home.classList.add('is-hide')
            }
        })
    })
}

const close = selector => {
    const target = document.querySelector(`.js-${selector}`)
    if (target) {
        target.classList.remove('is-show')
        home.classList.remove('is-hide')
    }
}

const closeAboutMe = () => close('aboutMe')
const closeMyResume = () => close('myResume')
const closeMyPortfolio = () => close('myPortfolio')
