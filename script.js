let btn = document.getElementById('btn');
let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let resposta = document.getElementById('res')




function calcular(){

    let imc = Number.parseInt(peso.value) / (Number.parseFloat(altura.value) * Number.parseFloat(altura.value))

    resposta.innerHTML = `Seu Imc é ${imc.toFixed(2)}`

}



btn.addEventListener("click", () =>{
    if(peso.value === '' || altura.value === '') {
        alert('Preencha os dados que faltam!')
        
    }

    else if(peso.value >= 1 && altura.value >= 1){
        calcular()
    }

})