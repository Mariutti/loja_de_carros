let marcasDeCarros = JSON.parse(localStorage.getItem("marcasStorage"));

const body = document.body;
body.addEventListener("load", criarSeletorMarcas(marcasDeCarros));

function criarSeletorMarcas(marcas) {
  const selectMarca = document.querySelector("#marcaSelect");
  for (const marca of marcas) {
    const marcaOption = document.createElement("option");
    marcaOption.innerText = marca;
    marcaOption.value = marca;

    if (selectMarca) {
      selectMarca.appendChild(marcaOption);
    }
  }
}

let marcasModelos = {};

const modeloInput = document.querySelector("#modelo");

const btnModelo = document.querySelector(".btnModelo");

btnModelo.addEventListener("click", cadastrarModelo);

function cadastrarModelo(event) {
  event.preventDefault();
  if (localStorage.marcasModelosStorage) {
    marcasModelos = JSON.parse(localStorage.getItem("marcasModelosStorage"));
  }
  const marca = document.querySelector("#marcaSelect").value;
  const modelo =
    modeloInput.value[0].toUpperCase() + modeloInput.value.slice(1);

  if (marcasModelos[`${marca}`] && marcasModelos[marca].includes(modelo)) {
    window.alert("Modelo já cadastrado para essa marca!");
    modeloInput.value = "";
  } else {
    if (marcasModelos[marca]) {
      marcasModelos[marca].push(modelo);
    } else {
      marcasModelos[marca] = [];
      marcasModelos[marca].push(modelo);
    }

    modeloInput.value = "";
    console.log(`Modelo ${modelo} da marca ${marca} cadastrado com sucesso!`);
    localStorage.marcasModelosStorage = JSON.stringify(marcasModelos);
    // console.log(marcasModelos);
    // console.log(marcasModelos[marca]);
  }
}
