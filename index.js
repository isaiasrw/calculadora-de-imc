document.getElementById('switchTheme').addEventListener('click', function(){
    document.getElementById('body').classList.toggle('light')
})

const resultado = document.getElementById('resultado')

function calculate(){
    const altura = parseFloat(document.getElementById('altura').value)
    const peso = parseFloat(document.getElementById('peso').value)

    const imc = peso / ((altura / 100) * (altura / 100))
    if(imc){
        resultado.innerHTML = imc.toFixed(2)
    } else {
        resultado.innerHTML = ""
    }
}