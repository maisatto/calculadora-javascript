function calc (tipo,valor){
    if (tipo === 'acao'){
        if (valor === 'c') {
            document.getElementById('resultado').value = ''
        } else if (valor === '*' || valor === '+' || valor === '-' || valor === '/') {
            document.getElementById('resultado').value += valor
        } else if (valor === '=') {
           var valor_igual = eval(document.getElementById('resultado').value)
           document.getElementById('resultado').value = valor_igual
        }
    }
    if (tipo === 'valor') {
        document.getElementById('resultado').value += valor
    }
}