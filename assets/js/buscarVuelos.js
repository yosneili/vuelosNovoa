
// TODO LO QUE TIENE QUE VER CON TIPO DE VIAJE Y SELECCION DE FECHAS.
const mostrarIda = document.querySelector('#mostrarIda');
const mostrarVuelta = document.querySelector('#mostrarVuelta');
const tipodeViaje = document.querySelector('#tipoViaje');


function mostrarViajeIda() {
    tipodeViaje.addEventListener('change', function () {
        const tipodeViajeSeleccionado = this.value
        if (tipodeViajeSeleccionado === 'soloIda') {
            mostrarIda.innerHTML = `<label for="fechaIda" class="form-label">Fecha de Ida:</label>
        <input type="date" id="fechaIda" class="form-control">`
            mostrarVuelta.innerHTML = ''
        } else if (tipodeViajeSeleccionado === 'idaVuelta') {
            mostrarIda.innerHTML = `<label for="fechaIda" class="form-label">Fecha de Ida:</label>
        <input type="date" id="fechaIda" class="form-control">`
            mostrarVuelta.innerHTML = `<label for="fechaVuelta" class="form-label">Fecha de Retorno:</label>
        <input type="date" id="fechaVuelta" class="form-control">`
            anularFechas()
        } else {
            mostrarIda.innerHTML = ''
            mostrarVuelta.innerHTML = ''
        }
    })
}
mostrarViajeIda()

function anularFechas() {

    const fechaIdaInput = document.getElementById('fechaIda');
    const fechaVueltaInput = document.getElementById('fechaVuelta');

    if (fechaIdaInput && fechaVueltaInput) {
        fechaIdaInput.addEventListener('change', () => {
            const fechaIdaSeleccionada = new Date(fechaIdaInput.value);
            fechaVueltaInput.min = fechaIdaSeleccionada.toISOString().split('T')[0];

            if (fechaVueltaInput.value) {
                const fechaVuelta = new Date(fechaVueltaInput.value);
                if (fechaVuelta < fechaIdaSeleccionada) {
                    fechaVueltaInput.value = fechaIdaSeleccionada.toISOString().split('T')[0];
                }
            }
        });

        fechaVueltaInput.addEventListener('change', () => {
            const fechaVueltaSeleccionada = new Date(fechaVueltaInput.value);
            fechaIdaInput.max = fechaVueltaSeleccionada.toISOString().split('T')[0];

            if (fechaIdaInput.value) {
                const fechaIda = new Date(fechaIdaInput.value);
                if (fechaIda > fechaVueltaSeleccionada) {
                    fechaIdaInput.value = fechaVueltaSeleccionada.toISOString().split('T')[0];
                }
            }
        });
    }
}


// REESTRICCIÓN DE QUE NO SE PUEDE SELECCIONAR LA MISMA CIUDAD DE ORIGEN Y DESTINO

const origen = document.querySelector('#ciudadIda');
const destino = document.querySelector('#ciudadVuelta');



function validarCiudades() {
    const valorOrigen = origen.value
    const valorDestino = destino.value

    if (valorOrigen === valorDestino && valorOrigen !== 'Selecciona Ciudad de Origen' && valorDestino !== 'Selecciona Ciudad de Destino') { //es un if que evalua todas las seleccciones del select
        alert('No puedes seleccionar la misma ciudad para origen y destino.');
    }
}
ciudadIda.addEventListener('change', validarCiudades);
ciudadVuelta.addEventListener('change', validarCiudades); // le agrego el evento change que al seleccionar una de las dos evalua para ver si está correcto, llamando a la funcion validarCiudades.


// Validación de niños

const pasajeros = document.querySelector('#pasajeros')
const cantidadNinos = document.querySelector('#cantidadNinos')
const edadninos = document.querySelector('#edadNino')

pasajeros.addEventListener('input', function(){
    const cantidadPasajeros = parseInt(this.value)

    cantidadNinos.innerHTML = ''
    edadninos.innerHTML = ''

    if (cantidadPasajeros > 1) {
        const maxNiños = cantidadPasajeros - 1
        cantidadNinos.innerHTML = `<label for="ninos" class="form-label">Cantidad de Niños:</label>
        <input type="number" id="ninos" class="form-control" placeholder="0" min = "0" max = "${maxNiños}">`
        
    }
    
    const existeNinos = document.querySelector('#ninos')

    if (existeNinos) {    
        
        existeNinos.addEventListener('input', function() {
        
        const cantidadNiños = parseInt(this.value)
  
        edadninos.innerHTML = ''
  
        for (let i = 1; i <= cantidadNiños; i++) {
          edadninos.innerHTML += `
          <div class="col-md-3 mt-3">
            <label for="edadNiño${i}" class="form-label">Edad del Niño ${i}:</label>
            <input type="number" class="form-control" id="edadNiño${i}" name="edadNiño${i}" min="0" max="12">
          </div>
        `;
        }
      });}

})

mostrarFormularioContacto()

$(document).ready(function() {
    $('#estado-vuelo-btn').click(function(event) {
        event.preventDefault();

       
        $('#detalle-vuelos').toggle();

       
        if ($('#detalle-vuelos').is(':visible')) {
            actualizarCartelera();
        }
    });

})

// Actualiza la cartelera cada segundo si está visible
setInterval(() => {
    rotarArray(vuelos);
    actualizarDatosAleatorios();
    if ($('#detalle-vuelos').is(':visible')) {
        actualizarCartelera(); 
    }
}, 1000)
