function send() {
    let formData = []
    const imie = document.getElementById('imie').value
    const nazwisko = document.getElementById('nazwisko').value
    const ulica = document.getElementById('ulica').value
    const email = document.getElementById('email').value
    const telefon = document.getElementById('telefon').value
    const info = document.getElementById('info').value
    if(imie.length < 3) {
        document.getElementById('imie-error').style = 'visibility: visible;'
    } else {
        formData.push(imie)
        document.getElementById('imie-error').style = 'visibility: hidden;'
    }
    if(nazwisko.length < 4){
        document.getElementById('nazwisko-error').style = 'visibility: visible;'
    } else {
        formData.push(nazwisko)
        document.getElementById('nazwisko-error').style = 'visibility: hidden;'
    }
    if(email.search('@') < -1) {
        document.getElementById('email-error').style - 'visibility: visible;'
    } else {
        formData.push(email)
        document.getElementById('email-error').style - 'visibility: hidden;'
    }
    if(telefon.length < 9){
    document.getElementById('telefon-error').style = 'visibility: visible;'
    }else {
        formData.push(telefon)
        document.getElementById('telefon-error').style = 'visibility: hidden;'
    }
    if(info.length < 10){
        document.getElementById('info-error').style = 'visibility: visible;'
    }else {
        formData.push(info)
        document.getElementById('info-error').style = 'visibility: hidden;'
    }
    if(ulica.length < 5){
        document.getElementById('ulica-error').style = 'visibility: visible;'
    }else {
        formData.push(ulica)
        document.getElementById('ulica-error').style = 'visibility: hidden;'
    }
}

function menu(menu) {
    const wybraneMenu = menu
    console.log(wybraneMenu)
}

