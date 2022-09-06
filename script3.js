function verificar() {
    var n1 = Number(document.getElementById('numero1').value);
    var n2 = Number(document.getElementById('numero2').value);
    var n3 = Number(document.getElementById('numero3').value);

    if (n1 > n2 && n1 > n3) {
        document.querySelector('p').innerHTML = `O maior número é ${n1}`;
    } 
    if (n2 > n1 && n2 > n3) {
        document.querySelector('p').innerHTML = `O maior número é ${n2}`;
    }  
    if (n3 > n1 && n3 > n2) {
        document.querySelector('p').innerHTML = `O maior número é ${n3}`;
    }
}