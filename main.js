function loader() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var time = data.getHours()
    msg.innerHTML = `O horario atual é: ${time} horas`
    if (time >= 0 && time < 12) {
        img.src = './Images/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (time >= 12 && time <= 18) {
        img.src = './Images/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = './Images/noite.jpg'
        document.body.style.background = '#515154'
    }
}