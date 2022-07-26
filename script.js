// debugger

alert("Bienvenido. Es hora de dormir, vamos a contar ovejas")

let ovejas = parseInt(prompt("¿Cuántas ovejas necesitas?"))

let noni = 1
for ( noni ; noni < ovejas; noni++) {
    console.log("contamos", noni, "ovejas")
    
}
if (noni <= ovejas) {
    let despierto =confirm("Seguimos contando?")
    while (despierto){
        console.log("contamos", noni, "ovejas")
        noni++ 
        despierto = confirm("Seguimos contando?")
    }
}
    console.log("Buen descanso")

