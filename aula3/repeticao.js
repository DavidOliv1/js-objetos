const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
  {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  },
];

for (let campo in cliente) {
  let tipo = typeof cliente[campo];
  if (tipo !== "object" && tipo !== "function") {
    console.log(`O campo ${campo} tem o valor ${cliente[campo]}.`);
  }
}
