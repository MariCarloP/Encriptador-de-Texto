document.getElementById("botonEncriptar").addEventListener("click", function() {
    let texto = document.getElementById("textoEntrada").value;
    if (validarTexto(texto)) {
        let textoEncriptado = encriptar(texto);
        document.getElementById("textoSalida").value = textoEncriptado;
        document.getElementById("mensajeError").textContent = "";
    } else {
        document.getElementById("mensajeError").textContent = "Error: El texto debe estar en minúsculas y sin acentos.";
    }
});

document.getElementById("botonDesencriptar").addEventListener("click", function() {
    let texto = document.getElementById("textoEntrada").value;
    if (validarTexto(texto)) {
        let textoDesencriptado = desencriptar(texto);
        document.getElementById("textoSalida").value = textoDesencriptado;
        document.getElementById("mensajeError").textContent = "";
    } else {
        document.getElementById("mensajeError").textContent = "Error: El texto debe estar en minúsculas y sin acentos.";
    }
});

function encriptar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function desencriptar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function validarTexto(texto) {
    // Verifica que el texto esté en minúsculas y no contenga acentos
    const acentos = /[áéíóúü]/;
    const mayusculas = /[A-Z]/;
    return !acentos.test(texto) && !mayusculas.test(texto);
}
