// boton ir arriba
const btn_arriba = document.getElementById('btn_arriba');
btn_arriba.addEventListener('click', () => {
    window.scrollTo(0,0);
})

window.onscroll = () =>{
    agregar_btn_arriba()
}

const agregar_btn_arriba = () => {
    if (window.scrollY < 300) {
        btn_arriba.classList.remove('flecha-arriba-activo')
    } else {
        btn_arriba.classList.add('flecha-arriba-activo');
    }
}

//  modo nocturno
const colorPreferido = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const boton = document.getElementById('modo');

//variable que setea modo para el usuario
const setearModo = (theme) => {
    document.documentElement.setAttribute('info-modo', theme);
    localStorage.setItem('theme', theme);
}

// Cambiar el modo
boton.addEventListener('click', function(){
    let cambiarModo = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setearModo(cambiarModo);
})

//ver si tiene guardada una preferencia
setearModo(localStorage.getItem('theme') || colorPreferido);


// boton de despliegue




