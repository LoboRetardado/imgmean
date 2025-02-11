const palavra = document.getElementById('palavra');
const procurar = document.getElementById('procurar');
const meaning = document.getElementById('meaning');

procurar.addEventListener('click', function() {
    var word = palavra.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    if (word.length <= 0) {
        alert("Por favor coloque uma palavra na área indicada")
    } else {
        meaning.src = `https://s.dicio.com.br/${word}-sm.jpg`
        meaning.alt = `Oops! parece que a palavra não foi encontrada. Reporte o erro para loboretardado@gmail.com`
    }
})

function goGit() {
    window.open('https://github.com/LoboRetardado', '_blank')
}
function goWhat() {
    window.open('https://wa.me/+258872632392', '_blank')
}
function goYou() {
    window.open('https://youtube.com/@LoboRetardado', '_blank')
}