const btn = document.getElementById("btn");
const input = document.getElementById("inp");
const form = document.querySelector("form");

const findPokemon = async () => {
  try {
    const valor = input.value;
    if (valor > 1025) {
      alert(`Cuidado!!Solo extisten 1025 pokemons!!`);
    }
    const respuestaApy = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${valor}`
    );

    const respuesta = await respuestaApy.json();
    return respuesta;
  } catch (e) {
    e;
  }
};
const infoPokemon = (e) => {
  try {
    const mostImportants = e.moves.slice(0, 5);
    const nombrePokemon = e.name;
    const pesoPokemon = e.weight;
    const fotoPokemon = e.sprites.other["official-artwork"].front_default;
    const tipo = e.types.map((e) => e.type.name);
    const movimientos = mostImportants.map((e) => e.move.name);

    const infoNecesaria = {
      nombrePokemon,
      pesoPokemon,
      fotoPokemon,
      tipo,
      movimientos,
    };

    return infoNecesaria;
  } catch (e) {
    e;
  }
};
const accionClick = (a) => {
  // IMG
  const img = document.getElementById("first-img");
  // Cabeceras
  const name = document.getElementById("name");
  const peso = document.getElementById("peso");
  const tipo = document.getElementById("tipo");
  const movimientos = document.getElementById("movimientos");
  // Valores
  const pokemonNombre = document.getElementById("nombre");
  const pesoPokemon = document.getElementById("pesoPokemon");
  const tiposPokemon = document.getElementById("tipoPokemon");
  const movimientosPokemon = document.getElementById("movimientosPokemon");
  //Img
  img.innerHTML = `<img src="${a.fotoPokemon}" >`;
  // Cabeceras
  name.innerHTML = `Nombre`;
  peso.innerHTML = `Peso`;
  tipo.innerHTML = `Tipo`;
  movimientos.innerHTML = `Movimientos `;
  // Valores
  pokemonNombre.innerHTML = `${a.nombrePokemon}`;
  pesoPokemon.innerHTML = `${a.pesoPokemon} lb`;
  tiposPokemon.innerHTML = `${a.tipo}`;
  movimientosPokemon.innerHTML = `${a.movimientos}`;
};
btn.addEventListener("click", async (e) => {
  e.preventDefault();

  const datos = await findPokemon();

  const info = infoPokemon(datos);
  accionClick(info);
});
