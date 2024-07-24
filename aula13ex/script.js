function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'imagens/dia.png'
        document.body.style.background = 'rgba(243, 162, 87, 0.877)'
    } else if (hora >= 12 && hora <= 19) {
        ///Boa tarde!
        img.src = 'imagens/tarde.png'
        document.body.style.background = 'rgb(173, 115, 27)'
    } else {
        //Boa noite!
        img.src = 'imagens/noite.png'
        document.body.style.background = 'rgba(0, 0, 0, 0.74)'
    }
}