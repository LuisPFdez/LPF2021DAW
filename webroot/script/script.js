var elemento;
var body;
var animacion = 0;
window.addEventListener("load", () => {
    body = document.getElementsByTagName("body")[0];
    body.addEventListener("wheel", cambiarElemento);
    elemento = document.getElementsByTagName("section")[0];
    elemento.classList.remove("hidden");
})

function cambiarElemento(evento) {
    var cambio = (tipo) => {
        if (tipo) {
            var elemento2 = elemento.previousElementSibling;
            var entrada = "efecto2 0.5s 0s 1 reverse";
            var salida = "efecto1 0.5s 0s 1 normal"
        } else {
            var elemento2 = elemento.nextElementSibling;
            var entrada = "efecto1 0.5s 0s 1 reverse";
            var salida = "efecto2 0.5s 0s 1 normal"
        }
        elemento.style.animation = salida;
        animacion = 1;
        elemento.addEventListener("animationend", function () {
            this.classList.add("hidden");
            this.style.animacion = null;
            elemento = elemento2;
            elemento.classList.remove("hidden");
            elemento.style.animation = entrada;
            elemento.addEventListener("animationend", function () {
                this.style.animacion = null;
                animacion = 0;
            });
        });


    };
    if (!animacion) {
        if (evento.deltaY < 0 && elemento.previousElementSibling != null) { //Si es menor a 0 sube
            cambio(1);

        } else if (evento.deltaY > 0 && elemento.nextElementSibling != null) { // Si es mayor a 0 baja
            cambio(0);
        }
    }


}