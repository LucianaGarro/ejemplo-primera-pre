let nombre = prompt ("Ingrese su nombre aquí!")

//voy a ingresar algunos elementos/productos para que el usuario seleccione

let torta = 2000;
let lemonPie = 3500;
let brownie = 4000;
let chocotorta = 5000;

alert ("Biendenido/a " + nombre );

let pedir = prompt ("¿Ya sabe que es lo que va a pedir? Ingrese SI o NO ");

//aplico un ciclo de tipo if/else porque estoy condicionada a lo que es usuario ingrese

if ((pedir === "no") || (pedir === "No")|| (pedir === "NO") || (pedir === "nO")){
    alert (" Esperemos que regrese pronto para probar nuestros productos");
} else {
    let orden = prompt ("Ingrese su pedido: torta / lemonpie /brownie/ chocotorta");

    //dentro del mismo ciclo condicional aplico un ciclo switch
switch (orden){
    case "torta": 
    alert ("Gracias por su pedido. Su total es de: $ " + torta);

    break;



    case "lemonpie": 
    alert ("Gracias por su pedido. Su total es de: $ " + lemonPie);

    break;



    case "brownie": 
    alert ("Gracias por su pedido. Su total es de: $ " + brownie);
    break;



    case "chocotorta": 
    alert ("Gracias por su pedido. Su total es de: $ " + chocotorta);
    break;

}
}

function agradecer (){
    alert ( nombre + ", ya hemos procesado su pedido. Se encuentra en prepración. Pronto será contactado.");
}

agradecer ()








