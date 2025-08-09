function nome(){

const input = document.getElementById("nome").value
const h2 = document.getElementById("bv")

if(input == ""){
    h2.textContent = "Bem-Vindo usuário!"
}
else{
    h2.textContent = "Bem-Vindo(a), " + input 
}
}