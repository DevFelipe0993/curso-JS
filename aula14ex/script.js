function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       res.innerHTML = `Idade calculada: ${idade}`
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {  // **verificou a idade**
        gênero = 'Homem'
        if (idade >=0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'menino01.png')
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'homemjovem01.png')
        } else if (idade < 63) {
            // Adulto
            img.setAttribute('src', 'homemadulto01.png')
        } else {
            // Idoso
            img.setAttribute('src', 'homemsenhor01.png')
        }
       } else if (fsex[1].checked) {
        gênero	= 'Mulher'
        if (idade >=0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'menina01.png')
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'mulherjovem01.png')
        } else if (idade < 63) {
            // Adulto
            img.setAttribute('src', 'mulheradulta01.png')
        } else {
            // Idosa
            img.setAttribute('src', 'mulhersenhora01.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }
}