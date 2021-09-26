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
