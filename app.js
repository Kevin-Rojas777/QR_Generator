const entrada = document.getElementById('entrada')
const boton = document.getElementById('boton-generar')
const resultado = document.getElementById('resultado')
const contenedorQR = document.getElementById('codigo')
const enlaceDescarga = document.getElementById('descargar')
let qr

boton.addEventListener('click', () => {
  const texto = entrada.value.trim()
  if (!texto) {
    alert('Por favor, introduce una URL válida.')
    return
  }

  contenedorQR.innerHTML = '' // limpiar si ya existe
  qr = new QRCode(contenedorQR, {
    text: texto,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  })

  // esperar un pequeño tiempo para que el canvas se genere
  setTimeout(() => {
    const canvas = contenedorQR.querySelector('canvas')
    const dataURL = canvas.toDataURL('image/png')
    enlaceDescarga.href = dataURL
    resultado.style.display = 'block'
  }, 200)
})

// permitir presionar Enter
entrada.addEventListener('keydown', e => {
  if (e.key === 'Enter') boton.click()
})
