// Capturar parámetro ?receta=
const params = new URLSearchParams(window.location.search);
const recetaId = params.get("receta");

// Base de datos simple
const recetasInfo = {
  mariscos: {
    titulo: "Mariscos Frescos",
    imagen: "../img/mariscos.jpg",
    descripcion: "Deliciosos mariscos salteados con especias mediterráneas, perfectos para una ocasión especial.",
    ingredientes: ["Camarones", "Pulpo", "Mejillones", "Ajo", "Limón", "Pimienta", "Aceite de oliva"],
    pasos: [
      "Lava bien todos los mariscos antes de iniciar.",
      "Calienta aceite de oliva en una sartén grande.",
      "Agrega ajo picado y sofríe hasta dorar.",
      "Incorpora los mariscos y cocina por 8-10 minutos.",
      "Agrega sal, pimienta y un toque de limón.",
      "Sirve caliente y acompaña con pan o pasta."
    ]
  },
  pasta: {
    titulo: "Pasta Italiana Artesanal",
    imagen: "../img/pasta.jpg",
    descripcion: "Una pasta cremosa al mejor estilo italiano, rápida y deliciosa.",
    ingredientes: ["Pasta", "Tomate", "Albahaca", "Queso Parmesano", "Sal", "Aceite de oliva"],
    pasos: [
      "Hierve la pasta con sal hasta que esté al dente.",
      "Prepara una salsa con tomate, ajo y albahaca.",
      "Mezcla la pasta con la salsa en la sartén.",
      "Agrega queso parmesano y sirve caliente."
    ]
  },
  rollo:{
    titulo: "Rollo de Carne Relleno",
    imagen: "../img/rollo.jpg",
    descripcion: "Un sabroso rollo de carne relleno de vegetales y queso, ideal para compartir.",
    ingredientes: [
    "500 g de carne molida",
    "1 cebolla picada",
    "1 pimentón rojo en tiras",
    "2 zanahorias ralladas",
    "150 g de queso mozzarella",
    "2 huevos",
    "Pan rallado",
    "Sal y pimienta al gusto",
    "Aceite de oliva"
    ],
    pasos: [
    "Precalienta el horno a 180°C.",
    "En un bowl, mezcla la carne molida con los huevos, sal, pimienta y pan rallado hasta obtener una masa uniforme.",
    "Estira la carne sobre papel aluminio formando un rectángulo.",
    "Agrega encima la cebolla, zanahoria, pimentón y el queso.",
    "Enrolla con ayuda del papel aluminio formando el rollo de carne.",
    "Coloca el rollo en una bandeja con un chorrito de aceite de oliva.",
    "Hornea durante 40–50 minutos hasta que esté dorado por fuera.",
    "Retira, corta en rodajas y sirve caliente."
    ]
  },
  salmon: {
    titulo: "Salmón al Horno",
    imagen: "../img/salmon.jpg",
    descripcion: "Una receta elegante y saludable con salmón fresco al horno.",
    ingredientes: ["Salmón", "Limón", "Pimienta", "Sal", "Aceite de Oliva"],
    pasos: [
      "Precalienta el horno a 180°C.",
      "Coloca el salmón en una bandeja con aceite de oliva.",
      "Agrega los condimentos y rodajas de limón.",
      "Hornea por 15-20 minutos y sirve."
    ]
  }
};

// Insertar datos en el HTML
const receta = recetasInfo[recetaId];

if (receta) {
  document.getElementById("tituloReceta").textContent = receta.titulo;
  document.getElementById("imagenReceta").src = receta.imagen;
  document.getElementById("descripcionReceta").textContent = receta.descripcion;

  document.getElementById("ingredientesReceta").innerHTML =
    receta.ingredientes.map(i => `<li>${i}</li>`).join("");

  document.getElementById("pasosReceta").innerHTML =
    receta.pasos.map(p => `<li>${p}</li>`).join("");
} else {
  document.querySelector("main").innerHTML =
    `<h2 class="text-center text-red-400 text-3xl">Receta no encontrada</h2>`;
}
