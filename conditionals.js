//const user = "italovicente";
//const password = "123456789";

//if (user === "italovicente") {
    //console.log("Logeado")
//} else {
    //console.log("No esta logeado")
//}

// usar === es comparación estricta, es decir compara datos y tipo de datos


// if - else
const age = 18

if (age >= 18) {
    console.log("Es mayor de edad")
} else {
    console.log("Es menor de edad")
}


//else if

const myMoney = 400;
const pendingPay = 300;
const myCreditCard = true;
const myExtraCash = true;

if (myMoney >= pendingPay) {
    console.log("Se puede pagar la deuda");
} else if (myCreditCard) {
    console.log("Se puede pagar con la tarjeta de credito");
} else if (myExtraCash) {
    console.log("Se puede pagar con extra cash")
} else {
    console.log("No se puede pagar la deuda ni con dinero, ni con credito, ni extra cash")
}

//SWITCH: Evalua cada caso

const methodPayment = "extraCash";

switch (methodPayment) {
    case "creditCard":
        console.log("Se pagara con credito");
        break;
    
    case "extraCash" :
        console.log("Se pagara con extra cash");
        break;

    default:
        console.log("No puede realizar pago")
        break;
}

// ejemplo

const typeClimate = "heat"

switch (typeClimate){
    case "heat":
        console.log("Puedes ir a la playa");
        break;
    
    case "cloudy":
        console.log("No puedes ir a la playa");
        break;
     
    case "cold":
        console.log("Debes abrigarte antes de salir");
        break;    

    case "rain":
        console.log("Lleva tu paragua");
        break;
    
    default:
        console.log("Clima no identificado");
        break;
}

// Ejemlpo if else

function CalculateAge() {

const personAge = 30;

if (personAge > 10) {
    console.log("Es correcto");
    return;  
    } 

if (personAge > 20) {
    console.log("Tambien es correcto");
    }
}


// otro ejemplo

const logged = true;

// condicion simple

if (logged) {
    console.log("Estas logeado");
} else {
    console-log("No estas logeado")
}

//operador teernario
//condicion ? true :false
logged ? console.log("ESTAS LOGEADO") : console.log("NO ESTAS LOGEADO")



