const ab = document.getElementById('a-b');

ab.addEventListener('submit', function (e) {
    e.preventDefault();

    const valorA = Number(document.getElementById('a').value);
    const valorB = Number(document.getElementById('b').value);

    if (valorB >= valorA) {
        const blueBg = document.getElementById('valueab').style.background = '#370791';
        const whiteC = document.getElementById('valueab').style.color = '#fff';
        alert('Valor aceito!');
    }
    else {
        alert('Valor inválido. Por favor, tente novamente');
    }

}
)
