const palavra = document.getElementById('palavra');
const procurar = document.getElementById('procurar');
const meaning = document.getElementById('meaning');
const notfound = document.getElementById('notfound');
const search = document.getElementById('search');

procurar.addEventListener('click', function() {
    var word = palavra.value.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    
    if (word.length <= 0) {
        alert("Por favor, coloque uma palavra na área indicada.");
    } else {
        meaning.src = `https://s.dicio.com.br/${word}-sm.jpg`;
        
        meaning.onerror = function() { // Evento acionado quando a imagem não é carregada
            notfound.innerHTML = `A palavra <strong>${word}</strong> não foi encontrada<br>
            Clique no botão para fazer uma pesquisa mais profunda`;
            search.style.display = 'block'
        };
    }
});

search.addEventListener('click', function() {
    var word = palavra.value.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    window.open(`https://www.google.com/search?q=site%3Awww.significados.com.br+${word}`, '_blank')
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
function goTik() {
    window.open('https://vm.tiktok.com/ZMkEBjgd4/', '_blank')
}
function goFace() {
    window.open('https://www.facebook.com/profile.php?id=61562460322508', '_blank')
}