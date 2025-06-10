document.getElementById("formulario").addEventListener("submit", async function(e) {
  e.preventDefault();

  const datos = {
    nombre: document.getElementById("nombre").value,
    edad: document.getElementById("edad").value,
    genero: document.getElementById("genero").value,
    clima: document.getElementById("clima").value,
    notas: document.getElementById("notas").value,
    personalidad: document.getElementById("personalidad").value
  };

  const res = await fetch("http://localhost:3000/api/perfume", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos)
  });

  const resultado = await res.json();
  document.getElementById("resultado").innerHTML = `<strong>${resultado.perfume}</strong>`;
});
