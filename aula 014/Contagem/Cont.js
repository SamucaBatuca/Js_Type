var cont = document.getElementById("contagem")
cont.innerHTML = "Aguardando para a contagem..."

function Cont(){
    let ini = document.getElementById("inicio")
    let fim = document.getElementById("fim")
    let pas = document.getElementById("passo")

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert ("[ERRO] Faltam Dados!")
        cont.innerHTML = "Aguardando para a contagem..."
    } else {
        cont.innerHTML = "Contando: <br>"
        let i = Number(ini.value) // o que ta em ini não é um NUMERO
        let f = Number(fim.value)
        let p = Number(pas.value)

        if(p <= 0){
            window.alert("Passo inválido! Considerando passo 1")
            p = 1
        }

        if (i < f){
            for(i; i<f; i+=p){
                cont.innerHTML +=`${i} \u{1F449}`
            }
        } else {
            for(f; f<=i; i-=p){
                cont.innerHTML +=`${i} \u{1F449}`
            }
        }
        cont.innerHTML += `\u{1F6A9}`
    }

}




