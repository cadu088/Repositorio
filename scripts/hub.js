function relogio() {
    const local = window.document.getElementById('dataText');
    const texto = window.document.getElementById('DataTexto');
    const emoji = window.document.getElementById('emojin')
    const hora = new Date();
    const atual = hora.getHours();
    if (atual >= 12 && atual < 18) {
        texto.innerText = 'Boa tarde!'
        emoji.innerText = '🎑'
    } else if (atual >= 18) {
        texto.innerText = 'Boa noite!'
        emoji.innerText = '​🌙'
    } else if (atual >= 0 && atual < 5) {
        texto.innerText = 'Boa madrugada!'
        emoji.innerText = '🌆'
    } else {
        texto.innerText = 'Bom dia!'
        emoji.innerText = '​☀'
    }
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var horas = data.getHours();
    var min = data.getMinutes();
    var str_data = dia + '/' + (mes + 1);
    var str_hora = horas + ':' + min;

    var dias = new Array(
        'domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'
    );
    dataTime.innerText = ('Hoje é ' + dias[data.getDay()] + ' dia ' + str_data + ' às ' + str_hora + '.');
    setTimeout("relogio()", 1000);
}