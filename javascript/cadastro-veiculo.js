let marcasModelos = JSON.parse(localStorage.getItem("marcasModelosStorage"));
// {
//   gm: ["prisma", "corsa"],
//   ford: ["corcel", "maverick"],
//   fiat: ["uno"],
// };

const selectMarca = document.querySelector("#marcaSelect");
for (const key in marcasModelos) {
  selectMarca.value = marcasModelos[key];
  console.log([key]);
  break;
}
selectMarca.addEventListener("change", mudarSeletorModelos);

const selectModelo = document.querySelector("#modeloSelect");

const btnCadastrarVeiculo = document.querySelector(".btnVeiculo");

btnCadastrarVeiculo.addEventListener("click", cadastrarVeiculo);

function criarSeletorMarcas(marcas) {
  for (const marca in marcas) {
    const marcaOption = document.createElement("option");
    marcaOption.innerText = marca;
    marcaOption.value = marca;

    if (selectMarca) {
      selectMarca.appendChild(marcaOption);
    }
  }
}
criarSeletorMarcas(marcasModelos);

let modelos = marcasModelos[selectMarca.value];
for (const modelo of modelos) {
  const modeloOption = document.createElement("option");
  modeloOption.innerText = modelo;
  modeloOption.value = modelo;
  selectModelo.appendChild(modeloOption);
}

function mudarSeletorModelos() {
  selectModelo.innerHTML = "";
  let modelos = marcasModelos[selectMarca.value];
  console.log(selectMarca.value);
  console.log(modelos);
  for (const modelo of modelos) {
    const modeloOption = document.createElement("option");
    modeloOption.innerText = modelo;
    modeloOption.value = modelo;
    selectModelo.appendChild(modeloOption);
  }
}

let veiculosCadastrados = [];

let img = "";
const imageEl = document.querySelector("#img");
imageEl.addEventListener("change", () => {
  const fr = new FileReader();
  fr.readAsDataURL(imageEl.files[0]);
  fr.addEventListener("load", () => {
    img = fr.result;
  });
});

function cadastrarVeiculo(event) {
  event.preventDefault();
  if (localStorage.veiculosCadastradosStorage) {
    veiculosCadastrados = JSON.parse(
      localStorage.getItem("veiculosCadastradosStorage")
    );
  }
  const cor = document.querySelector("#veiculoCor").value;
  const ano = document.querySelector("#veiculoAno").value;
  const km = document.querySelector("#veiculoKm").value;
  const valor = document.querySelector("#veiculoValor").value;
  const marca = selectMarca.value;
  const modelo = selectModelo.value;

  if (!cor || !valor || !km || !img) {
  } else {
    veiculosCadastrados.push({
      marca,
      modelo,
      ano,
      km,
      cor,
      valor,
      img,
    });
    console.log(`Veículos ${marca} ${modelo} cadastrado com sucesso!`);
  }
  console.log(veiculosCadastrados);
  localStorage.veiculosCadastradosStorage = JSON.stringify(veiculosCadastrados);
}
cor = "";
ano = "";
km = "";
valor = "";
img = "";
function listarVeiculosCadastrados() {
  return veiculosCadastrados;
}
