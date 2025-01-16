function init() {
  const arr = 'abcdefg'.split('')
  const card = document.querySelector('.card')
  arr.forEach(e => {
    const btn = document.createElement('button')
    btn.innerText = e
    card.appendChild(btn)
    btn.addEventListener('click', async () => {
      const file = ''
       + './template/' + e + '.js'
      console.log(file)
      const module = await import(file)
      module.print()
    })
  })
}

window.onload =()=>{
  init()
}
