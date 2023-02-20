01 - Crie uma variavél no escopo global para armazenar as marcas que serão cadastradas pela função.
Crie uma função para cadastrar a marca de um veículo.
Como parâmetro receba o nome da marca
Chame a função e cadastre pelo menos três veículos
A cada cadastro IMPRIMA uma mensagem "Marca cadastrada com sucesso!"
Após a chamada imprima as marcas cadastradas
OK

02 - Crie uma variável no escopo global para armazenar os modelos que serão cadastradas
Crie a função para cadastrar um Modelo de Veículo.
Como parâmetro receba o nome do modelo e o nome da marca
A cada cadastro imprima uma mensagem "Modelo cadastrado com sucesso!"
Após a chamada imprima os veículos cadastrados
OK

03 - Crie uma lista no escopo global para armazenar os veiculos que serão cadastradas
Chame a função para cadastrar o Veículo.
Como parâmetro receba o nome do modelo, nome da marca e o nome do veículo, km, valor e cor.
A cada cadastro imprima uma mensagem "Veículo cadastrado com sucesso!"
Após a chamada imprima os veículos cadastrados
OK

04 - Crie uma função para listar os veículos cadastrados.
O retorno dessa função DEVE ser um objeto javascript com as seguintes informações nome do modelo, nome da marca, nome do veículo, km, cor e valor.
OK

05 - Crie uma página somente com um menu com as seguintes opcões (Início, Marca, Modelo, Veículo)
Cada opção representara uma página HTML
inicio - index.html
marca - cadastro-marca.html
modelo - cadastro-modelo.html
veiculo - cadastro-veiculo.html
Adicione o link entre as páginas (por enquanto só teste a navegação entre uma e outra)
OK

06 - Adicione um titulo para sua página “Cadastro de Marca”
Adicione os elementos do cadastro
Adicione um campo de input para inserir o nome da marca
Adicione um botão cadastrar
Crie ação do botão submit do formulário e vincule com a função criada anteriormente.
OK

07 - Adicione os elementos do cadastro do modelo
input para o nome do modelo
um select options para escolher uma marca
Adicione um botão cadastrar
Crie ação do botão submit do formulário e vincule com a função criada anteriormente.
ok

08 - Adicione os campos (elementos necessários)
um select options para escolher uma modelo
link da imagem (opcional criação de upload para salvar a imagem + diretorio)
cor
km
valor
Crie ação do botão submit do formulário e vincule com a função criada anteriormente.
OK

09 - Chame a função para listar os veículos cadastrados e exiba as informações
Cria somente a estrutura de cards com os seguintes valores:
Imagem, nome da marca, modelo, km, valor e cor

10 - Agora será alterado a forma de armazenar as informações
Ao invés de utilizar as variaveis globais para armazenar marca, modelo, veiculo vamos utilizar agora o localstorage
Crie uma função para cada armazenamento no localstorage
Remova as variaveis globais que não estão sendo utilizadas
