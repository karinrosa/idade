function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = Number(document.getElementById('txtano').value)
    var res = document.getElementById('res')
    if (fano ==0 || fano > ano){
        window.alert('ERRO digite o ano novamente')
    }else {
        var idade = ano - fano
        var genero = ''
        var fsex =  document.getElementsByName('radsex')
        var img = document.createElement('img')
        img.getAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem' 
            if(idade> 0 && idade < 10){
                img.setAttribute('src', 'menino.png')
            }else if (idade < 21){
                img.setAttribute('src', 'moco.png')
            }else if(idade < 60){
                img.setAttribute('src', 'adulto.png')
            }else{
                img.setAttribute('src', 'idoso.png')
            }
            }else{
            genero = 'Mulher'
            if (idade > 0 && idade < 10){
                img.setAttribute('src', 'menina.png')
            }else if (idade < 21){
                img.setAttribute('src', 'moca.png')
            }else if (idade < 60){
                img.setAttribute('src', 'adulta.png')
            }else {
                img.setAttribute('src', 'idosa.png')
            }
            }
    res.style.textAlign='center'
    res.innerHTML= 'Detectamos ' + genero + ' com ' + idade + ' anos'
    res.appendChild(img)
    }
}