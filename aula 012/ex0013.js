var agora = new Date() // função de Data no js
var hora = agora.getHours()
console.log(`Agora são ${hora} hora(s)`)
if (hora <12){
    console.log("Bom dia")
} else if (hora>=12 && hora<18){
    console.log("Boa tarde")
} else {
    console.log("Boa noite")
}