const palavra = 'Alemanha';

let encontrado = false;

for (let letra of palavra) {
    console.log(letra);
    if (letra == 'h') {
        console.log("Tem a letra H");
        encontrado = true;
        break;

    }
}
if (!encontrado) {
    console.log(" Não tem H ");
}
