var elemento;
window.addEventListener("load", () => {
    document.getElementsByTagName("body")[0].addEventListener("wheel", cambiarElemento);
    elemento = document.getElementsByTagName("section")[0];
    elemento.classList.remove("hidden");
})

function cambiarElemento(evento) {
    var cambio = (tipo) => {
        if (tipo) {
            var elemento2 = elemento.previousElementSibling;
            var entrada = "efecto2 1s 0s 1 reverse";
            // var salida = "efecto1 1s 0s 1 normal";
        } else {
            var elemento2 = elemento.nextElementSibling;
            var entrada = "efecto1 1s 0s 1 reverse";
            // var salida = "efecto2 1s 0s 1 normal";
        }
        // elemento.style.animation = salida;
        
        // elemento.addEventListener("animationend", function () {
        elemento.classList.add("hidden");
        // elemento.style.animation = null;

        // });
        elemento = elemento2;
        elemento.style.animation = entrada;
        elemento.classList.remove("hidden");
        // elemento.style.animation = null;
        

    };
    if (evento.deltaY < 0 && elemento.previousElementSibling != null) { //Si es menor a 0 sube
        cambio(1);

    } else if (evento.deltaY > 0 && elemento.nextElementSibling != null) { // Si es mayor a 0 baja
        cambio(0);
    }


}

