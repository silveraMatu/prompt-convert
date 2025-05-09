//Profesor, disculpe. No hice ningun commit porque hice el codigo de una...

let eleccionUsuario;
const tasaCambioUSD = 1300;
let history = [];

function convertCurrency(pesos) {
  let dolares = pesos / tasaCambioUSD;
  alert(`ARS${pesos} son USD${dolares}`);
  let historialCambio = {
    tipo: "Divisa",
    entrada: `${pesos} ARS`,
    salida: `${dolares} USD`,
    fecha: new Date().toString(),
  };
  history.push(historialCambio);
}

do {
  eleccionUsuario = parseInt(prompt("1. Divisa => ARS a USD \n 2.Salir"));

  switch (eleccionUsuario) {
    case 1:
      let pesosIngresados = Number(
        prompt("introduzca el monto que desea convertir a dolares")
      );
      convertCurrency(pesosIngresados);
      break;
    case 2:
      alert("Saliendo");
      break;
    default:
      alert("Opcion invalida");
      break;
  }
} while (eleccionUsuario != 2);

for (let historyChange of history) {
  console.log(historyChange);
}