function relogio() {
    const local = window.document.getElementById('dataText');
    const texto = window.document.getElementById('DataTexto');
    const emoji = window.document.getElementById('emojin')
    const hora = new Date();
    const atual = hora.getHours();
    if (atual >= 12 && atual < 18) {
        emoji.innerText = '🎑'
    } else if (atual >= 18) {
        emoji.innerText = '​🌙'
    } else if (atual >= 0 && atual < 5) {
        emoji.innerText = '🌆'
    } else {
        emoji.innerText = '​☀'
    }
    setTimeout("relogio()", 1000);
}