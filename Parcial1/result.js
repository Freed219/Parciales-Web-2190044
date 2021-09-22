window.addEventListener('load', () =>{
    const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const email = params.get('email');
    const telephone = params.get('telephone');
    const gusto = params.get('gusto');
    const porcentaje = params.get('porcentaje');

    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-email').innerHTML = email;
    document.getElementById('result-telephone').innerHTML = telephone;
    document.getElementById('result-gusto').innerHTML = gusto;
    document.getElementById('result-porcentaje').innerHTML = porcentaje;
}
)