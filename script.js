const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
  counter.innerText = '0'

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target')
    const animation = +counter.innerText
    const increment = target / 100

    if(animation < target){
      counter.innerText = `${Math.ceil(animation + increment)}`
      setTimeout(updateCounter, 1)
    }else {
      counter.innerText = target
    }
  }
  updateCounter()
})