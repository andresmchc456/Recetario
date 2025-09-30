// Función para cargar módulos HTML en un contenedor
async function cargarModulo(url, contenedorId) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error al cargar ${url}`);
    const html = await response.text();
    document.getElementById(contenedorId).innerHTML = html;
  } catch (error) {
    console.error(error);
    document.getElementById(contenedorId).innerHTML = `<p>Error cargando ${url}</p>`;
  }
}

// ---------------------------
// Cargar módulos de index.html
// ---------------------------
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/")) {
    cargarModulo("inc/head.html", "headContainer");
    cargarModulo("inc/bodyLogin.html", "bodyContainer");
    cargarModulo("inc/footer.html", "footerContainer");
  }

  // ---------------------------
  // Autenticación y Login
  // ---------------------------
  document.addEventListener("submit", function(e) {
    if (e.target && e.target.id === "formLogin") {
      e.preventDefault();

      const usuario = document.getElementById("usuario").value;
      const clave = document.getElementById("clave").value;

      if (usuario === "admin@correo.com" && clave === "1234") {
        document.getElementById("loginError").style.display = "none";
        window.location.href = "vistas/home.html";
      } else {
        document.getElementById("loginError").style.display = "block";
      }
    }
  });

  // ---------------------------
  // Si estamos en home.html → cargar navbar
  // ---------------------------
  if (window.location.pathname.includes("home.html")) {
    cargarModulo("../inc/navbar.html", "barraNavegacion");
    cargarModulo("../inc/searchBar.html", "searchContainer");
    cargarModulo("../vistas/recetasPopulares.html", "recetasPopulares");

  }
});
