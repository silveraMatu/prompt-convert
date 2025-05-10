//Profesor, disculpe. No hice ningun commit porque hice el codigo de una...

//variables
let eleccionUsuario;
const tasaCambioUSD = 1300;
let history = [];

//Funcion de conversion de divisa. Almacena datos en un objeto y lo pushea al array history.
function convertCurrency(pesos) {
  let dolares = pesos / tasaCambioUSD;
  alert(`ARS${pesos} son USD${dolares.toFixed(2)}`);
  
  let historialCambio = {
    tipo: "Divisa",
    entrada: `${pesos} ARS`,
    salida: `${dolares.toFixed(2)} USD`,
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
      //Control para que el usuario no ingrese un monto negativo.
      if (pesosIngresados > 0) {
        //llamada a la funcion en caso de que el usuario elija 1;
        convertCurrency(pesosIngresados);
      } else {
        alert("Ingrese un monto válido");
      }
      break;
      
    case 2:
      alert("Saliendo");
      break;
    default:
      alert("Opcion invalida");
      break;
  }
} while (eleccionUsuario != 2);

//Se recorre el array de history para imprimir en consola cada elemento;

for (let historyChange of history) {
  console.log(historyChange);
}
