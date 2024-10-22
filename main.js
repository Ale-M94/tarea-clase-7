const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'Este campo debe tener al menos un caracter';
    };

    if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    };

    return '';
};

function validarCiudad(ciudad){
    if(ciudad.length === 0){
        return 'Seleccione una ciudad';
    };

    return '';
};

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo === ""){
        return 'Este campo no puede estar vacío';
    };

    if(descripcionRegalo.length >= 100){
        return 'Este campo debe tener menos de 100 caracteres';
    };

    return '';
};