//Codigo del cuadrado
console.group("Cuadrado");
function perimetroCuadrado(lado) {
  return lado * 4;
}

perimetroCuadrado(2);

function areaCuadrado(lado) {
  return lado * lado;
}

areaCuadrado();
console.groupEnd();

//Codigo del triangulo
console.group("Triangulo");
function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
  return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
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

function diametroCirculo (radioCirculo){
    return radioCirculo *2;
}

diametroCirculo ();

//PI
const PI = Math.PI;
//Circunferencia
function perimetroCirculo (diametroCirculo) {
    return diametroCirculo * PI;
}
perimetroCirculo ();
//Area
function areaCirculo (radioCirculo){
    return radioCirculo * radioCirculo *PI;

}
areaCirculo (); 
console.groupEnd();
