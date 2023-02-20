let marcasDeCarros = [];

const marcaDoCarro = document.querySelector("#marca");

const ul = document.querySelector(".marcasCadastradas");
window.onload = () => {
  console.log("page is fully loaded");
  if (localStorage.marcasStorage) {
    marcasDeCarros = JSON.parse(localStorage.getItem("marcasStorage"));
    console.log(marcasDeCarros);
    for (const marca of marcasDeCarros) {
      const li = document.createElement("li");
      li.innerHTML = marca;
      ul.appendChild(li);
    }
  }
};

const btnMarca = document.querySelector(".btnMarca");

btnMarca.addEventListener("click", cadastrarMarcas);

function cadastrarMarcas() {
  if (localStorage.marcasStorage) {
    marcasDeCarros = JSON.parse(localStorage.getItem("marcasStorage"));
  }
  let marca = marcaDoCarro.value;
  for (let marcaInMarcas of marcasDeCarros) {
    marca = marca.toLowerCase();
    marcaInMarcas = marcaInMarcas.toLowerCase();
    console.log(marca);
    console.log(marcaInMarcas);
  }

  if (
    marcasDeCarros.includes(marca) ||
    marcasDeCarros.includes(marca[0].toUpperCase() + marca.slice(1))
  ) {
    console.log("Marca já cadastrada!");
  } else if (!marca) {
    marcaDoCarro.placeholder = "Digite uma marca de veículo!";
  } else {
    marca = marca[0].toUpperCase() + marca.slice(1);
    marcasDeCarros.push(marca);
    console.log(`Marca ${marca} cadastrada com sucesso!`);
    const li = document.createElement("li");
    li.innerHTML = marca;
    ul.appendChild(li);

    localStorage.marcasStorage = JSON.stringify(marcasDeCarros);
  }
  console.log(marcasDeCarros);
  marcaDoCarro.value = "";
}
