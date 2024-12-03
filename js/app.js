
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login").addEventListener("submit", function(event) {
        event.preventDefault(); 
        const usuario = document.getElementById("usuario").value;
        const contraseña = document.getElementById("contraseña").value;
        const error = document.getElementById("error");

        if (usuario === "mel" && contraseña === "123") {
            window.location.href = "admin.html?usuario=" + encodeURIComponent(usuario);
        } else {
            error.textContent = "Usuario incorrecto";
        }
    });
});

if (window.location.pathname.includes("admin.html")) {
    const usuario = new URLSearchParams(window.location.search).get("usuario");
    document.getElementById("user").textContent = usuario;
}

const comenzar = document.getElementById("comenzar");
if (comenzar) {
    comenzar.addEventListener("click", function() {
        window.location.href = "./pages/capitulo1.html";
    });
}

const capitulo2 = document.getElementById("capitulo2");
const capitulo3 = document.getElementById("capitulo3");
const final1 = document.getElementById("final1");
const final2 = document.getElementById("final2");
const final3 = document.getElementById("final3");
const final4 = document.getElementById("final4");

if (capitulo2) {
    capitulo2.addEventListener("click", function() {
        window.location.href = "./capitulo2.html";
    });
}

if (capitulo3) {
    capitulo3.addEventListener("click", function() {
        window.location.href = "./capitulo3.html";
    });
}

if (final1) {
    final1.addEventListener("click", function() {
        window.location.href = "./final1.html";
    });
}

if (final2) {
    final2.addEventListener("click", function() {
        window.location.href = "./final2.html";
    });
}

if (final3) {
    final3.addEventListener("click", function() {
        window.location.href = "./final3.html";
    });
}

if (final4) {
    final4.addEventListener("click", function() {
        window.location.href = "./final4.html";
    });
}

const adminBoton = document.getElementById("adminBoton");
if (adminBoton) {
    adminBoton.addEventListener("click", function() {
        window.location.href = "./index.html";
    });
}
