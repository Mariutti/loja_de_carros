const veiculosCadastrados = JSON.parse(
  localStorage.getItem("veiculosCadastradosStorage")
);

const sectionCardContainer = document.querySelector("section");

for (const carro of veiculosCadastrados) {
  console.log(carro);
  const divCard = document.createElement("div");
  divCard.className = "car-card";
  const image = document.createElement("img");
  image.src = carro.img;
  image.className = "carImg";

  const carDescriptionElem = document.createElement("h2");
  carDescriptionElem.className = "carDescription";
  carDescriptionElem.innerText = `${
    carro.marca[0].toUpperCase() + carro.marca.slice(1)
  } ${carro.modelo[0].toUpperCase() + carro.modelo.slice(1)}`;

  const ulAtrib = document.createElement("ul");
  ulAtrib.className = "ulCard";

  const param = {
    cor: carro.cor,
    ano: carro.ano,
    km: carro.km,
    valor: carro.valor,
  };

  for (const valor in param) {
    const parametro = document.createElement("li");
    parametro.className = "list-param";
    parametro.innerText = `${valor}: ${param[valor]}`;
    console.log(`${valor}: ${param[valor]}`);
    ulAtrib.appendChild(parametro);
  }

  // const cor = document.createElement('li')
  // cor.innerText = carro.cor
  // const ano = document.createElement('li')
  // ano.innerText = carro.ano
  // const km = document.createElement('li')
  // km.innerText = carro.km
  // const valor = document.createElement('li')
  // valor.innerText = carro.valor
  divCard.appendChild(image);
  divCard.appendChild(carDescriptionElem);
  divCard.appendChild(ulAtrib);
  sectionCardContainer.appendChild(divCard);
}
