import * as rls from 'readline-sync';

const arreglo = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];

let numeroMasGrande: number | null = null;

function encontrarNumeroMasGrande(arr: number[]): void {
    numeroMasGrande = Math.max(...arr);
}

function esParOImpar(numero: number): string {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}
encontrarNumeroMasGrande(arreglo);

if (numeroMasGrande !== null) {
    
    console.log(`El número más grande del arreglo es: ${numeroMasGrande}`);

    const resultado = esParOImpar(numeroMasGrande);

    console.log(`El número más grande es ${resultado}.`);
} else {
    console.log('No se pudo encontrar el número más grande.');
}