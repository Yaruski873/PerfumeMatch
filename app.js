document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const edad = parseInt(document.getElementById("edad").value);
  const genero = document.getElementById("genero").value;
  const clima = document.getElementById("clima").value;
  const aroma = document.getElementById("aroma").value;
  const personalidad = document.getElementById("personalidad").value;

  let resultado = "";
  let imagenUrl = "";

  if (genero === "femenino") {
    if (aroma === "floral" && personalidad === "romantico") {
      resultado = "🌸 *Daisy* de Marc Jacobs";
      imagenUrl = "https://m.media-amazon.com/images/I/71KMkDRvQIL._AC_UF1000,1000_QL80_.jpg";
    } else if (aroma === "dulce" && personalidad === "energico") {
      resultado = "🍬 *Ariana Grande Cloud*";
      imagenUrl = "https://m.media-amazon.com/images/I/61uz95cnZrL._AC_UF1000,1000_QL80_.jpg";
    } else if (aroma === "citricos" && clima === "calido") {
      resultado = "🍊 *Light Blue* de Dolce & Gabbana";
      imagenUrl = "https://m.media-amazon.com/images/I/71KrF6DLoYL._AC_UF1000,1000_QL80_.jpg";
    } else {
      resultado = "💐 *Chanel Chance Eau Tendre*";
      imagenUrl = "https://m.media-amazon.com/images/I/71e0PPEv2nL._AC_UF1000,1000_QL80_.jpg";
    }
  } else if (genero === "masculino") {
    if (aroma === "amaderado" && personalidad === "misterioso") {
      resultado = "🌲 *Bleu de Chanel*";
      imagenUrl = "https://m.media-amazon.com/images/I/51LO3l2kHyL._AC_UF1000,1000_QL80_.jpg";
    } else if (aroma === "fresco" && clima === "calido") {
      resultado = "🌊 *Acqua di Gio* de Giorgio Armani";
      imagenUrl = "https://m.media-amazon.com/images/I/61Z+N+7UqFL._AC_UF1000,1000_QL80_.jpg";
    } else if (aroma === "citricos" && personalidad === "energico") {
      resultado = "🍋 *Dior Homme Cologne*";
      imagenUrl = "https://m.media-amazon.com/images/I/61VDpIJLhaL._AC_UF1000,1000_QL80_.jpg";
    } else {
      resultado = "🕶️ *Y* de Yves Saint Laurent";
      imagenUrl = "https://m.media-amazon.com/images/I/51ki-YPRh+L._AC_UF1000,1000_QL80_.jpg";
    }
  } else {
    resultado = "Por favor selecciona una opción válida.";
  }

  document.getElementById("resultado").innerText = `Hola ${nombre}, tu perfume ideal es: ${resultado}`;
  const imagen = document.getElementById("imagen-perfume");

  if (imagenUrl) {
    imagen.src = imagenUrl;
    imagen.style.display = "block";
  } else {
    imagen.style.display = "none";
  }
});
