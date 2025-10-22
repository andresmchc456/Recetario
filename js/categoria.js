const params = new URLSearchParams(window.location.search);
const tipo = params.get("tipo");

document.getElementById("tituloCategoria").innerText =
  "Recetas de " + tipo.toUpperCase();

// Recetas simuladas (puedes cambiar las imágenes cuando quieras)
const recetas = {
  desayuno: [
    { titulo: "Huevos Rancheros", img: "../img/huevos.jpeg" },
    { titulo: "Avena con Frutas", img: "../img/avena.jpeg" },
    { titulo: "Pan Francés", img: "../img/pan.jpeg" }
  ],
  almuerzo: [
    { titulo: "Pollo a la Plancha", img: "../img/polloplancha.jpeg" },
    { titulo: "Arroz con Pollo", img: "../img/arrozpollo.jpeg" }
  ],
  cena: [
    { titulo: "Crema de Tomate", img: "../img/tomate.jpeg" },
    { titulo: "Sándwich Ligero", img: "../img/sanduche.jpeg" }
  ],
  postres: [
    { titulo: "Tiramisú", img: "../img/tiramishu.jpeg" },
    { titulo: "Brownie", img: "../img/browni.jpeg" }
  ],
  bebidas: [
    { titulo: "Limonada", img: "../img/limonada.jpeg" }
  ],
  vegetariano: [
    { titulo: "Ensalada Mediterránea", img: "../img/ensalada.jpeg" }
  ]
};

const contenedor = document.getElementById("listaRecetas");

// Asegúrate de que el contenedor tenga display flex y flex-wrap con espacio
contenedor.classList.add("flex", "flex-wrap", "justify-center", "gap-6"); // gap-6 = espacio entre cards

recetas[tipo].forEach(receta => {
  contenedor.innerHTML += `
    <div class="max-w-xs"> <!-- max-w-xs limita el ancho de la card -->
      <div class="card bg-dark text-white h-100 p-3 mx-auto">
        <img src="${receta.img}" class="category-img card-img-top mx-auto">
        <p class="mt-2 fw-semibold">${receta.titulo}</p>
      </div>
    </div>
  `;
});

