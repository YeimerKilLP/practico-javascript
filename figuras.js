//Codigo del cuadrado
console.group ('Cuadrado');
const ladoCuadrado = 5;
console.log ('Los lados del cuadrado miden: ' +ladoCuadrado + 'cm');

const perimetroCuadrado = ladoCuadrado * 4;
console.log ('El perimetro del cuadrado mide: ' +perimetroCuadrado+ 'cm' );

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log ('El area del cuadrado mide: ' +areaCuadrado+ 'cm cuadrados' );
console.groupEnd();

//Codigo del triangulo
console.group('Triangulo');
const ladoTriangulo1 = 6, ladoTriangulo2 = 6, baseTriangulo= 4,
alturaTriangulo = 5.5;

console.log ('Los lados del triangulo miden: '
+ladoTriangulo1+'cm, '
+ladoTriangulo2+'cm, '
+baseTriangulo+'cm' );

console.log ('La altura del triangulo es: '+alturaTriangulo+'cm');


const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log ('El perimetro del triangulo es: ' +perimetroTriangulo+'cm');

const areaTriangulo = (baseTriangulo *alturaTriangulo)/2;
console.log ('El area del triangulo es: '+ areaTriangulo+ 'cm cuadrados');
console.groupEnd ();

//Circulos 
console.group('Circulo');
console.groupEnd();