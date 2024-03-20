// FOR: 
// (inicializador :: hasta donde llega :: como lo va realizar)

//aumentar de 1 en 1
//for (let i = 1; i <= 8; i++) {
//    console.log(i);
//}

// aumentar de 2 en 2

//for (let i = 1; i <= 10; i+=3) {
 //   console.log(i);
//}

    console.log("Números Pares");
for (let i = 0; i <= 100; i++) {
    if (i%2==0) {
        console.log(i);
    }
}

console.log("Números Impares");
for (let i = 0; i <= 100; i++) {
    if (i%2==1) {
        console.log(i);
    }
}

let suma = 0;
for (let i = 0; i <= 100; i++) {
    console.log(i)
    suma+= i;
}
    console.log("la suma es " + suma);