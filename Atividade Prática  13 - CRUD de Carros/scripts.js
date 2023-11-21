const veiculos = [
    {
      id: "61",
      modelo: "TRUCK",
      marca: "FORD",
      ano: 2021,
      cor: "WHITE",
      preco: 35000,
    },
    {
      id: "74",
      modelo: "SUV",
      marca: "TOYOTA",
      ano: 2022,
      cor: "WHITE",
      preco: 20000,
    },
    {
      id: "2",
      modelo: "TRUCK",
      marca: "HONDA",
      ano: 2022,
      cor: "BLUE",
      preco: 35000,
    },
    {
      id: "17",
      modelo: "HATCHBACK",
      marca: "TOYOTA",
      ano: 2022,
      cor: "BLACK",
      preco: 30000,
    },
    {
      id: "27",
      modelo: "TRUCK",
      marca: "FORD",
      ano: 2021,
      cor: "RED",
      preco: 35000,
    },
    {
      id: "12",
      modelo: "TRUCK",
      marca: "CHEVROLET",
      ano: 2021,
      cor: "BLACK",
      preco: 30000,
    },
    {
      id: "76",
      modelo: "HATCHBACK",
      marca: "CHEVROLET",
      ano: 2021,
      cor: "BLUE",
      preco: 25000,
    },
    {
      id: "58",
      modelo: "SUV",
      marca: "FORD",
      ano: 2020,
      cor: "RED",
      preco: 30000,
    },
    {
      id: "78",
      modelo: "TRUCK",
      marca: "TOYOTA",
      ano: 2020,
      cor: "WHITE",
      preco: 200000,
    },
    {
      id: "41",
      modelo: "HATCHBACK",
      marca: "FORD",
      ano: 2022,
      cor: "BLACK",
      preco: 25000,
    },
  ];
  let escolha;
  while (escolha != 13) {
    escolha = Number(
      prompt(
        alert(
          `Bem vindo ao Sistema de CRUD de veiculos: \nNo momento, o sistema tem ${veiculos.length} carros cadastrados\nEscolha uma das opções para interagir com o sistema:\n1 - Cadastrar veículo\n2 - Listar todos veículos\n3 - Filtrar veículos por marca\n4 - Filtrar veículos por preço\n5 - Atualizar veículo\n6 - Remover veículo\n`
        )
      )
    );
    switch (escolha) {
      case 1:
        cadastrar();
        break;
      case 2:
        listar(veiculos);
        break;
      case 3:
        filtrar();
        break;
      case 4:
        filtrarPrice();
        break;
      case 5:
        atualizar();
        break;
      case 6:
        remover();
        break;
    }
  }
  
  // Escolha uma das opções para interagir com o sistema:
  
  function cadastrar() {
    const modelo = prompt("Digite o modelo do carro").toUpperCase();
    const marca = prompt("Digite o marca do carro").toUpperCase();
    const ano = prompt("Digite o ano do carro").toUpperCase();
    const cor = prompt("Digite o cor do carro").toUpperCase();
    const preco = prompt("Digite o preco do carro").toUpperCase();
  
    const veiculo = {
      id: (Math.random() * 100).toFixed(0),
      modelo,
      marca,
      ano,
      cor,
      preco,
    };
    veiculos.push(veiculo);
    console.log(veiculos);
  }
  function formatar(veiculo) {
    return (
      "ID: " +
      veiculo.id +
      " | Modelo: " +
      veiculo.modelo +
      " | Marca: " +
      veiculo.marca +
      " | Ano: " +
      veiculo.ano +
      " | Cor: " +
      veiculo.cor +
      " | Preço: R$" +
      veiculo.preco.toLocaleString()
    );
  }
  function listar(veiculos) {
    veiculos.sort((a, b) => a.preco - b.preco);
    let mensagem = "";
    for (let i = 0; i < veiculos.length; i++) {
      mensagem += formatar(veiculos[i]) + "\n";
    }
    alert(mensagem);
  }
  function filtrar() {
    let marcaFiltro = prompt("Qual marca gostaria de ver: ").toUpperCase();
    let filtrados = veiculos.filter((x) => x.marca == marcaFiltro);
    listar(filtrados);
  }
  
  function atualizar() {
    listar(veiculos);
    let idzinho = Number(prompt("Digite o ID do carro: "));
    if (veiculos.some((xid) => xid.id == idzinho)) {
      let veiculoId = veiculos.findIndex((xid) => xid.id == idzinho);
      console.log(veiculoId);
      veiculos[veiculoId].cor = prompt("Digite a nova cor: ");
      veiculos[veiculoId].preco = Number(prompt("Digite o novo preço: "));
    } else {
      console.log("Veículo, não encontrado.");
    }
  }
  function remover() {
    listar(veiculos);
    let idzinho = Number(prompt("Digite o ID do carro: "));
    if (veiculos.some((xid) => xid.id == idzinho)) {
      let indexParaRemover = veiculos.findIndex((xid) => xid.id == idzinho);
      veiculos.splice(indexParaRemover, 1);
      alert("Veiculo removido");
    } else {
      alert("Veículo, não encontrado.");
    }
  }