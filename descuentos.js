function calcularPrecioConDescuento (precio, descuento) {

const porcentajeDelPrecioConDescuento = 100 - descuento;

const precioFinal = (precio * porcentajeDelPrecioConDescuento)/100; 


return precioFinal;
}



function onclickButtonPriceDiscount(){
    const intputPrice =document.getElementById ("InputPrice");
    const priceValue = intputPrice.value;

    const intputDiscount =document.getElementById ("InputDiscount");
    const discountValue = intputDiscount.value;

    const precioConDescuento =  calcularPrecioConDescuento (priceValue, discountValue);

    const resultP = document.getElementById ("ResultP");
    resultP.innerText = `El precio con descuento es $: ${precioConDescuento}`

}