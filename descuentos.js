function calcularPrecioConDescuento(precio, descuento) {
  let porcentajeDelPrecioConDescuento = 100 - descuento;

  const precioFinal = (precio * porcentajeDelPrecioConDescuento) / 100;

  return precioFinal;
}

/* 

function onclickButtonPriceDiscount(){
    const intputPrice =document.getElementById ("InputPrice");
    const priceValue = intputPrice.value;

    const intputDiscount =document.getElementById ("InputDiscount");
    const discountValue = intputDiscount.value;

    const precioConDescuento =  calcularPrecioConDescuento (priceValue, discountValue);

    const resultP = document.getElementById ("ResultP");
    resultP.innerText = `El precio con descuento es $: ${precioConDescuento}`

}


 */

//Cupones
const cupons = ["CHEEMS", "JIMMY", "HONOR", "FORNAI", "VALORANT"];

function onclickButtonCupon() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputCupon = document.getElementById("InputCupon");
  const cuponValue = inputCupon.value;

  let descuento;
  cuponValue === cupons[0]
    ? (descuento = 15)
    : cuponValue === cupons[1]
    ? (descuento = 30)
    : cuponValue === cupons[2]
    ? (descuento = 45)
    : cuponValue === cupons[3]
    ? (descuento = 60)
    : alert(`El cupon ${cuponValue} no es valido`);


  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = `El precio con descuento es $: ${precioConDescuento}`;
}
