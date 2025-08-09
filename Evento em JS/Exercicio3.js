function soma(v1,v2){
    let a = parseFloat(document.getElementById("primeiro").value)
    let b = parseFloat(document.getElementById("segundo").value)
    document.getElementById("resultado").textContent = "O resultado é: " + (a+b)
}
function multiplicacao(v1,v2){
    let a = parseFloat(document.getElementById("primeiro").value)
    let b = parseFloat(document.getElementById("segundo").value)
    document.getElementById("resultado").textContent = "O resultado é: " + (a*b)
}
function subtracao(v1,v2){
    let a = parseFloat(document.getElementById("primeiro").value)
    let b = parseFloat(document.getElementById("segundo").value)
    document.getElementById("resultado").textContent = "O resultado é: " + (a-b)
}
function divisao(v1,v2){
    let b = parseFloat(document.getElementById("segundo").value)
    if (b == 0) {
        window.alert("Impossível dividir por 0")
    } else {
        let a = parseFloat(document.getElementById("primeiro").value)
        let b = parseFloat(document.getElementById("segundo").value)
        document.getElementById("resultado").textContent = "O resultado é: " + (a/b)
    }
}