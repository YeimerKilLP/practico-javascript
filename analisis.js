//AYUDAS
function esPar(numero) {
    return numero % 2 === 0;
  }
  
  function calculaMediaAritmetica(lista) {
    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    });
  
    const promedio = sumaLista / lista.length;
  
    return promedio;
  }

//Calculadora Mediana  
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
  

  //MEDIANA GENERAL
const listaSalarios = mexico.map(function (persona) {
  return persona.salary;
});

const salariosColSorter = listaSalarios.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});


//MEDIANA


  if (esPar(lista.length)) {
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];

    const mediana = calculaMediaAritmetica([personaMitad1, personaMitad2]);
    return mediana;
  } else {
    const personaMitad = lista[mitad];
    return personaMitad;
  }
}

const mediaGeneral = medianaSalarios(salariosColSorter);


//TOP 10
const spliceStar =0;
const spliceCount = 0;

const top10 = salariosColSorter.splice()

console.log ({

})
