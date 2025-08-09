function nome(){

    const ano = document.getElementById("nome").value
    const h2 = document.getElementById("bv")
    
    if(ano){
        h2.textContent = "Você tem " + (2025-ano) + " anos de idade!"
    }
    else if(ano > 0){
        h2.textContent = "Digite um ano válido"
    }
    else if(ano < 2025){
        h2.textContent = "Digite um ano até 2025"
    }
    else{
        h2.textContent = "Digite algo"
    }
    }