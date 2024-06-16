let res = document.querySelector("div#res")
let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flista")
let valores = []

function isNumero(n){ //ve se o número esta entre 1 e 100
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inLista(n , l){//ve se o número ja esta na lista
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function add(){
    if(isNumero(num.value) && !inLista(num.value , valores)){
       valores.push(Number(num.value)) //adiçiona um valor no array
       let item = document.createElement("option")//cria um elemento 
       item.text = `Valor adicionado ${num.value}`
       lista.appendChild(item)
    }else{
        alert('O valor ja cadastrado ou não exista')
    }
    num.value = "" 
    num.focus()
}

function fin(){
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

    for(let pos in valores){
        soma += valores[pos]
        if(valores[pos] > maior){
            maior = valores[pos]
        }
        if(valores[pos] < menor){
            menor = valores[pos]
        }
    }
    media = soma/total

    res.innerHTML = `<p>O total de números cadastrados é ${total}</p>`
    res.innerHTML += `<p>O mair número é ${maior}</p>`
    res.innerHTML += `<p>O menor número é ${menor}</p>`
    res.innerHTML += `<p>A soma dos valores é de ${soma}</p>`
    res.innerHTML += `<p>A media e de ${media}</p>`
}