AOS.init({
  duration: 1000,
  easing: 'ease',
  offset: 200,
  // once: true,
  // mirror: false
})

// don't go up
const icon1 = document.querySelector('.menu-icon')
const icon2 = document.querySelector('.xmark')
const xNavEl = document.querySelector('.x-nav')
const logoEl = document.querySelector('.logo')
const navEl = document.querySelector('.nav')

icon1.addEventListener('click', () => {
  icon1.style.display = 'none'
  logoEl.style.display = 'none'
  icon2.style.display = 'block'
  xNavEl.style.display = 'block'
})

icon2.addEventListener('click', () => {
  logoEl.style.display = 'initial'
  icon2.style.display = 'none'
  icon1.style.display = 'block'
  xNavEl.style.display = 'none'
})
