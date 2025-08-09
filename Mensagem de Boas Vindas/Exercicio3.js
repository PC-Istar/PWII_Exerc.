function nome(){

    const num = document.getElementById("nome").value
    const h2 = document.getElementById("bv")
    
    if(num %2 == 0){
        h2.textContent = "O número " + num + " é par"
    }
    else{
        h2.textContent = "O número " + num + " é ímpar"
    }
    }