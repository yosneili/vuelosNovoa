const vuelos = [
    { vuelo: 'AA101', destino: 'Nueva York', hora: '08:00', estado: 'Abordando', puerta: 'A1' },
    { vuelo: 'BA202', destino: 'Londres', hora: '09:30', estado: 'En Espera', puerta: 'B2' },
    { vuelo: 'AF303', destino: 'París', hora: '10:15', estado: 'Cancelado', puerta: 'C3' },
    { vuelo: 'IB404', destino: 'Madrid', hora: '11:00', estado: 'A Tiempo', puerta: 'D4' },
    { vuelo: 'LH505', destino: 'Berlín', hora: '12:30', estado: 'Retrasado', puerta: 'E5' },
    { vuelo: 'DL606', destino: 'Atlanta', hora: '13:00', estado: 'Abordando', puerta: 'F6' },
    { vuelo: 'UA707', destino: 'Chicago', hora: '14:00', estado: 'En Espera', puerta: 'G7' },
    { vuelo: 'KL808', destino: 'Ámsterdam', hora: '15:15', estado: 'Cancelado', puerta: 'H8' },
    { vuelo: 'QF909', destino: 'Sídney', hora: '16:45', estado: 'A Tiempo', puerta: 'I9' }
];

function rotarArray(arr) {
    if (arr.length === 0) return arr;
    
    const primerElemento = arr.shift();
    arr.push(primerElemento);
}

function actualizarCartelera() {
    const cuerpoTabla = document.getElementById('body-cartelera');
    cuerpoTabla.innerHTML = '';

    vuelos.forEach(vuelo => {
        const fila = document.createElement('tr');
        let texto = '';
        
        if (vuelo.estado === 'Cancelado') {
            texto = `<td style="background-color: red">${vuelo.estado}</td>`;
        } else if (vuelo.estado === 'A Tiempo') {
            texto = `<td style="background-color: green">${vuelo.estado}</td>`;
        } else if (vuelo.estado === 'Retrasado') {
            texto = `<td style="background-color: yellow">${vuelo.estado}</td>`;
        } else if (vuelo.estado === 'Abordando') {
            texto = `<td style="background-color: blue">${vuelo.estado}</td>`;
        }

        fila.innerHTML = `
            <td>${vuelo.vuelo}</td>
            <td>${vuelo.destino}</td>
            <td>${vuelo.hora}</td>
            ${texto}
            <td>${vuelo.puerta}</td>
        `;
        cuerpoTabla.appendChild(fila);
    });
}



function actualizarDatosAleatorios() {
    vuelos.forEach(vuelo => {
        const probabilidadCambioEstado = Math.random();
        
        if (probabilidadCambioEstado < 0.4) {
            vuelo.vuelo = String.fromCharCode(65 + Math.floor(Math.random() * 26)) + String.fromCharCode(65 + Math.floor(Math.random() * 26)) + (Math.floor(Math.random() * 10) + 1) + (Math.floor(Math.random() * 10) + 1) + (Math.floor(Math.random() * 10));
          }
    
          if (probabilidadCambioEstado < 0.4) {
            const nuevoDestino = ['Nueva York', 'Londres', 'Santiago', 'Paris', 'Chicago', 'Atlanta', 'Barcelona', 'Berlin', 'Tokyo', 'Mi casa', 'Tu casa'];
            vuelo.destino = nuevoDestino[Math.floor(Math.random() * nuevoDestino.length)];
          }
     
          if (probabilidadCambioEstado < 0.4) {
            const nuevosEstados = ['Abordando', 'A Tiempo', 'Retrasado', 'Cancelado'];
            vuelo.estado = nuevosEstados[Math.floor(Math.random() * nuevosEstados.length)];
          }
     
     
          if (probabilidadCambioEstado < 0.4) {
            const minutos = Math.floor(Math.random() * 60);
            vuelo.hora = `${Math.floor(Math.random() * 24)}:${minutos.toString().padStart(2, '0')}`;
          }
     
     
          if (probabilidadCambioEstado < 0.4) {
            vuelo.puerta = String.fromCharCode(65 + Math.floor(Math.random() * 26)) + (Math.floor(Math.random() * 10) + 1);
          }
    });
}

// Manejar el clic en el enlace "Estado de vuelo"

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

mostrarFormularioContacto()