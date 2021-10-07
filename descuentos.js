
function calcularPrecioConDescuento (precio, descuento) {

let porcentajeDelPrecioConDescuento = 100 - descuento;

const precioFinal = (precio * porcentajeDelPrecioConDescuento)/100; 


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
const cupons  = [ "CHEEMS", "JIMMY" , "HONOR", "FORNAI"];
/* 
const inputCupon = document.getElementById ("InputCupon");
const cuponValue = inputCupon.value; */

function onclickButtonCupon(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCupon = document.getElementById ("InputCupon");
    const cuponValue = inputCupon.value;

    

    let descuento; 

    console.log(inputPrice,cuponValue);


    switch (cuponValue){
        case cupons [0]:
            descuento =15; //Cheems
            break;
            
        case cupons [1]:
            descuento =30; //Jimmy
            break;
        
        case cupons [2]:
            descuento= 45; //HONOR
            break;

        case cupons[3]:
            descuento = 60; //FORNAI
            break;
    }

    const precioConDescuento =  calcularPrecioConDescuento (priceValue, cuponValue);

    const resultP = document.getElementById ("ResultP");
    resultP.innerText = `El precio con descuento es $: ${precioConDescuento}`

}





