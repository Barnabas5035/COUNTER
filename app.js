let Count = 0
console.log(Count)
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')
console.log(btns)
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const style = e.currentTarget.classList
    if (style.contains('increase')) {
      Count++
    } else if (style.contains('decrease')) {
      Count--
    } else {
      Count = 0
    }
    if (Count > 0) {
      value.style.color = 'yellow'
    }
    if (Count < 0) {
      value.style.color = 'green'
    }
    if (Count === 0) {
      value.style.color = 'red'
    }

    value.textContent = Count
  })
})
