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



// Algoritmo boton de despliegue

// Algoritmo modo nocturno