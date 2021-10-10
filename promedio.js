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

//Eliminar valor

function deletevalor() {
  const inputNumero = document.getElementById("inputNumero");

  //Se obtiene los datos del inputNumero del HTML

  const numero = Number(inputNumero.value);

  const delnum = listaNum.pop(numero);

  const msjLog = document.getElementById("msjLog1");
  msjLog.innerText = `${delnum} ha sido elimado de la lista`;
}

/* 
function calculaPromedio() {
  const sumaLista = listaNum.reduce(function (
    valorAcumulado = 0,
    nuevoElemento
  ) {
    return valorAcumulado + nuevoElemento;
  });

  const promedio = sumaLista / listaNum.length;

  const resultado = document.getElementById("resultadoFinal");
  resultado.innertext = `El promedio es ${promedio}`;
} */
function calculaPromedio() {
  const sumalista = listaNum.reduce(function (
    valorAcumulado = 0,
    nuevoElemento
  ) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumalista / listaNum.length;

  const resultadoFinal = document.getElementById("resultadoFinal");
  resultadoFinal.innerText = "El promedio es " + promedioLista;
}
