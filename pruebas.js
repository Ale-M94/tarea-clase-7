function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos un caracter',
        'validarNombre no validó que el nombre no sea vacío'
    );

    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'validarNombre no validó que el nombre sea menor a 50 caracteres'
    );

    console.assert(
        validarNombre('Fabricio') === "",
        "validarNombre falló con un nombre válido"
    );
};

function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'Seleccione una ciudad',
        'validarCiudad no validó que la ciudad esté seleccionada'
    );

    console.assert(
        validarCiudad('Catamarca') === '',
        'validarCiudad no funcionó con un nombre de ciudad válido'
    );
};

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') === 'Este campo no puede estar vacío',
        'validarDescripcionRegalo no validó que el campo no esté vacío'
    );

    console.assert(
        validarDescripcionRegalo(
            '11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')
        === 'Este campo debe tener menos de 100 caracteres',
        'validarDescripcionRegalo no validó que la descripción sea menor a 100 caracteres'
    );

    console.assert(
        validarDescripcionRegalo('Regalo') === '',
        'validarDescripciónRegalo no funcionó con una descripción correcta'
    );
};

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();