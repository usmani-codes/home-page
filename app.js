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
// const navEl = document.querySelector('.nav')

const closeIcons = () => {
  icon1.style.display = 'none'
  icon2.style.display = 'none'
  xNavEl.style.display = 'none'
  logoEl.style.display = 'initial'
}
const openIcon1 = () => {
  icon1.style.display = 'block'
}

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

function breakpointManager() {
  const breakpointWidth = 1024
  let isAboveBreakpoint = window.innerWidth >= breakpointWidth

  function handleResize() {
    const newIsAboveBreakpoint = window.innerWidth >= breakpointWidth
    if (newIsAboveBreakpoint !== isAboveBreakpoint) {
      isAboveBreakpoint = newIsAboveBreakpoint
      triggerCallback()
    }
  }

  function triggerCallback() {
    isAboveBreakpoint ? closeIcons() : openIcon1()
  }

  window.addEventListener('resize', handleResize)
  triggerCallback()
}

breakpointManager()
