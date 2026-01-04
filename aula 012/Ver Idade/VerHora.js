function Carregar(){

    var um = window.document.getElementById("um")
    var dois = window.document.getElementById("dois")
    var data = new Date()
    var hora = data.getHours()
    um.innerHTML = `Agora são ${hora} hora(s).`
     
    if(hora >= 5 && hora <12){
        dois.innerHTML += '<img src="https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg" height="550" width="400">'
        document.body.style.background = "#f9e8a5ff"
        
    } else if(hora >=12 && hora < 18){
        dois.innerHTML += '<img src="https://images.pexels.com/photos/18366090/pexels-photo-18366090.jpeg" height="550" width="400">'
        document.body.style.background = "#c1a05fff"
        
    } else {
        dois.innerHTML += '<img src="https://images.pexels.com/photos/771883/pexels-photo-771883.jpeg" height="550" width="400">'
        document.body.style.background = "#34789fff"
    }

}


