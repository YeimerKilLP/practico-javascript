//Promedio :D

/* function calculaMedia(lista) {
  let sumaLista = 0;

  for (let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i];
  }

  const sumaLista = lista.reduce( 
      function (valorAcumulado = 0, nuevoElemento) {
return valorAcumulado + nuevoElemento;

      }
  );

  const promedio = sumaLista / lista.length;

  return promedio;
}
 */

//Mediana

let listaNum = [];
//funcion que añadira elementos a nuestro array
function addLista() {
  const inputNumero = document.getElementById("inputNumero");

  //Se obtiene los datos del inputNumero del HTML

  const numero = Number(inputNumero.value);

  const addnum = listaNum.push(numero);

  const msjLog = document.getElementById("msjLog");
  msjLog.innerText = `${listaNum} han sido agreados a la lista,
si es correcto pulsa el boton de calcular promedio`;
}

function calculaPromedio() {
  const sumaLista = listaNum.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedio = sumaLista / listaNum.length;

  const msjLog1 = document.getElementById("msjLog1");
  msjLog1.innertext = `El promedio es ${promedio}`; 

}
console.log (msjLog1.innerText);