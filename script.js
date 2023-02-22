const veiculosCadastrados = JSON.parse(
  localStorage.getItem("veiculosCadastradosStorage")
);

const sectionCardContainer = document.querySelector("section");

if (!veiculosCadastrados) {
  const mensagem = document.createElement("h1");
  mensagem.innerHTML =
    "Não há veículos cadastrados. Inicie cadastrando marca, em seguida o modelo e depois o veículo.";
  sectionCardContainer.appendChild(mensagem);
} else {
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

    const btnComprar = document.createElement("button");
    btnComprar.innerHTML = "Comprar";
    btnComprar.type = "button";
    btnComprar.className = "btnComprar";

    divCard.appendChild(image);
    divCard.appendChild(carDescriptionElem);
    divCard.appendChild(ulAtrib);
    divCard.appendChild(btnComprar);
    sectionCardContainer.appendChild(divCard);
  }
}
