// Determinar edad del perro chimuelo con validaciones

let edadChimuelo = 2; // Cambia este valor para probar diferentes edades

if (edadChimuelo <= 0 || edadChimuelo > 17) {
    console.log("La edad de Chimuelo no es válida.");
} else if (edadChimuelo < 1) {
    console.log("Chimuelo es un cachorro.");
} else if (edadChimuelo >= 1 && edadChimuelo <= 3) {
    console.log("Chimuelo es un perro adolescente.");
} else if (edadChimuelo >= 4 && edadChimuelo <= 7) {
    console.log("Chimuelo es un perro adulto.");
} else if (edadChimuelo > 7) {
    console.log("Chimuelo es un perrito viejo.");
}
