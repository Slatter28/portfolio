
const menu = document.getElementById('navbar__menu')
const abrir = document.getElementById('navbar__btn')
const cerrar = document.getElementById('navbar__cerrar')
const form = document.getElementById('form')

particlesJS.load('particles-js', 'assets/js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
var typed = new Typed("#text-slider", {
    strings: ["","Backend", "Frontend", "Fullstack"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})


abrir.addEventListener('click', (e) => {
  menu.classList.add('mostrar__menu')
})

cerrar.addEventListener('click', (e) => {
  menu.classList.remove('mostrar__menu')
})


form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = 'devytechsolutions@gmail.com'
  const URL_BASE = `https://formsubmit.co/${email}`

  const input = e.currentTarget.elements
  const formData = {
    name: input.name.value,
    email: input.email.value,
    message: input.message.value
  }

  console.log(formData)
  const options = {
    method: 'POST',
    header: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(formData)
  }

  /* con then y catch */
  fetch(URL_BASE, options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

  /* Con async / await */
  try {
    const res = await fetch(URL_BASE, options)
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
})