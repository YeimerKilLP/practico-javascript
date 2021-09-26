//Codigo del cuadrado
console.group ('Cuadrado');
//const ladoCuadrado = 5;
//console.log ('Los lados del cuadrado miden: ' +ladoCuadrado + 'cm');

function  perimetroCuadrado (lado){
return lado * 4;
}; 
perimetroCuadrado( );

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

//Radio

const radioCirculo = 4;

console.log ('El radio del circulo es '+ radioCirculo + 'cm');

//Diametro

const diametroCirculo = radioCirculo *2;
console.log(`El radio del circulo es ${diametroCirculo}cm`);

//PI

const PI = Math.PI;
console.log (`El PI del circulo es ${PI}cm`);
//Circunferencia

const perimetroCirculo = diametroCirculo * PI;
console.log (`El PI del circulo es ${perimetroCirculo}cm`);
//Area

const areaCirculo = (radioCirculo* radioCirculo) * PI; 
console.log (`El area del circulo es ${areaCirculo}cm`)
console.groupEnd();

