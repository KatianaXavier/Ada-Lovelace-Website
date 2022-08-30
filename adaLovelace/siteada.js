document.getElementById("botaoEnviar").addEventListener("click",validaFormulario)

function validaFormulario(){
    if (document.getElementById("nome").value != "" 
    && document.getElementById("email").value != "") {
        alert("Pronto! Você receberá mais infos sobre mulheres que fizeram história na programação!")
    } else {
        alert("Por favor, preencha todos os campos!")
    }
}




