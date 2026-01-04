function Calc(){
    let num = Number(document.getElementById("num").value)
    let valor = document.getElementById("valor")
    let tabu = document.getElementById("tabu")

    if(document.getElementById("num").value.length == 0){
        window.alert("Campo vazio! Considerando valor como zero")
        num = 0
    }

    let c = 1
    tabu.innerHTML= ''
    while(c<=10){
        let item = document.createElement('option') //cria um elemento OPTION dentro da seleção
        let res = num*c
        item.text = `${num} X ${c} = ${res}` // preenche o texto da opção
        item.value =`tab${c}` // pra saber qual item foi selecionado
        tabu.appendChild(item) // ADICIONA O ITEM DENTRO DA DIV COMO UM ELEMENTO CHILD
        c++
    }
    

}


