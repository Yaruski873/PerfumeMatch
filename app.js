document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const genero = document.getElementById("genero").value;
  const clima = document.getElementById("clima").value;
  const aroma = document.getElementById("aroma").value;
  const personalidad = document.getElementById("personalidad").value;

  let recomendacion = "";

  if (genero === "femenino") {
    if (aroma === "floral" && personalidad === "romantico") {
      recomendacion = "Chanel Chance Eau Tendre o Miss Dior Blooming Bouquet.";
    } else if (aroma === "dulce" && personalidad === "misterioso") {
      recomendacion = "Black Opium de YSL o La Vie Est Belle de Lancôme.";
    } else if (aroma === "fresco" && clima === "calido") {
      recomendacion = "Light Blue de Dolce & Gabbana.";
    } else {
      recomendacion = "Ariana Grande Cloud o Daisy de Marc Jacobs.";
    }
  } else {
    if (aroma === "amaderado" && personalidad === "misterioso") {
      recomendacion = "Bleu de Chanel o Dior Sauvage Elixir.";
    } else if (aroma === "citricos" && clima === "calido") {
      recomendacion = "Acqua di Gio de Armani.";
    } else if (aroma === "dulce" && edad < 20) {
      recomendacion = "1 Million Lucky de Paco Rabanne.";
    } else {
      recomendacion = "L’Homme de YSL o Versace Dylan Blue.";
    }
  }

  document.getElementById("resultado").textContent = `${nombre}, tu perfume ideal es: ${recomendacion}`;
});
