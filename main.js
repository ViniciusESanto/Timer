function loader(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var time = data.getHours()
    msg.innerHTML = `O horario atual é: ${time} horas`

    if (time >= 0 && time < 12) {
        img.scr = 'manha.jpg'
    } else if (time >= 12 && time < 18) {
        img.src = 'tarde.jpg'
    } else {
        img.src = 'noite.jpg'
    }
}