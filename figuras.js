//Codigo del cuadrado
console.group("Cuadrado");
function perimetroCuadrado(lado) {
  return lado * 4;
}

perimetroCuadrado();

function areaCuadrado(lado) {
  return lado * lado;
}

areaCuadrado();
console.groupEnd();

//Codigo del triangulo
console.group("Triangulo");
function perimetroTriangulo(lado1, lado2, baseTriangulo) {
  return lado1 + lado2 + baseTriangulo;
}

perimetroTriangulo();

function areaTriangulo(baseTriangulo, alturaTriangulo) {
  return (baseTriangulo * alturaTriangulo) / 2;
}

areaTriangulo();
console.groupEnd();



//Circulos
console.group("Circulo");

//Diametro

function diametroCirculo (radio){
    return radio *2;
}
diametroCirculo ();

//PI
const PI = Math.PI;
//Circunferencia

function perimetroCirculo (radio) {
    const diametro = diametroCirculo (radio);
    return diametro * PI;
}
perimetroCirculo ();
//Area
function areaCirculo (radio){
    return (radio * radio) *PI;

}
areaCirculo (); 
console.groupEnd();


//Interaccion con el HTML

//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado (value);
    alert(perimetro);
  }
  

  
  function calcularAreaCuadrado() {

    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado (value);
    alert(area);
   
  }


  //Triangulo.


  function calcularPerimetroTriangulo() {
      const input1 = document.getElementById("lado1");
      const value1 =Number (input1.value);

      const input2 = document.getElementById("lado2");
      const value2 =Number (input2.value);
      
      const base = document.getElementById("baseTriangulo");
      const value3 =Number (base.value);


      const perimetro = perimetroTriangulo (value1,value2,value3);
      alert (`El perimetro del triangulo es ${perimetro} centimetros`);
  }

  function calcularAreaTriangulo() {
    base = document.getElementById("baseTriangulo");
    const value3 =Number (base.value);
    
    const altura = document.getElementById("alturaTriangulo");
    const value4 = Number (altura.value);

    const area = areaTriangulo (value3,value4);

    alert(`El area del triangulo es ${area} centimetros`);
}