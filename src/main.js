import './style.css'

function init() {
  const arr = 'abcdefg'.split('')
  const card = document.querySelector('.card')
  arr.forEach(e => {
    const btn = document.createElement('button')
    btn.innerText = e
    card.appendChild(btn)
    btn.addEventListener('click', async () => {
      const module = await import('/template/' + e + '.js')
      module.print()
    })
  })
}

init()
