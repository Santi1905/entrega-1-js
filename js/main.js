
const clientesGimnasio = [
    { nombre: "Pedro", edad: 25, asistenciaSemanal: 5 },
    { nombre: "Carla", edad: 32, asistenciaSemanal: 3 },
    { nombre: "Sebastian", edad: 29, asistenciaSemanal: 4 },
    { nombre: "Maria", edad: 21, asistenciaSemanal: 6 },
    { nombre: "Pablo", edad: 35, asistenciaSemanal: 2 }
];


function verificarAsistencia(cliente, minimoAsistencias) {
    if (cliente.asistenciaSemanal >= minimoAsistencias) {
        console.log(`${cliente.nombre} ha cumplido con las asistencias semanales (${cliente.asistenciaSemanal}).`);
    } else {
        console.log(`${cliente.nombre} NO ha cumplido con las asistencias semanales (${cliente.asistenciaSemanal}).`);
    }
}


const minimoAsistencias = 4;


for (let i = 0; i < clientesGimnasio.length; i++) {
    verificarAsistencia(clientesGimnasio[i], minimoAsistencias);
}
