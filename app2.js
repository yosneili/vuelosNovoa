const fechaIdaInput = document.getElementById('fechaIda');
const fechaVueltaInput = document.getElementById('fechaVuelta');

fechaIdaInput.addEventListener('change', () => {
    const fechaIdaSeleccionada = new Date(fechaIdaInput.value);
    fechaVueltaInput.min = fechaIdaSeleccionada.toISOString().split('T')[0];

    fechaVueltaInput.value = ''
    

    const fechaVuelta = new Date(fechaVueltaInput.value);
    if (fechaVuelta < fechaIdaSeleccionada) {
        fechaVueltaInput.value = fechaIdaSeleccionada.toISOString().split('T')[0];
    }
    console.log(fechaVueltaInput.value);
    console.log(fechaIdaInput.value);

});

fechaVueltaInput.addEventListener('change', () => {
    const fechaVueltaSeleccionada = new Date(fechaVueltaInput.value);
    fechaIdaInput.max = fechaVueltaSeleccionada.toISOString().split('T')[0];


    const fechaIda = new Date(fechaIdaInput.value);
    if (fechaIda > fechaVueltaSeleccionada) {
        fechaIdaInput.value = fechaVueltaSeleccionada.toISOString().split('T')[0];
    }
    console.log(fechaVueltaInput.value);
    console.log(fechaIdaInput.value);
});
