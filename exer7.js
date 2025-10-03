// Registro das Despesas
let moradia = 1200; // Valor do aluguel/prestação da casa
let alimentacao = 850; // Gasto com supermercado e feira
let transporte = 300; // Combustível, transporte público, etc.
let lazer = 450; // Passeios, cinema, etc.
let contas = 600; // Água, energia, internet, telefone
let educacao = 200; // Mensalidade escolar, cursos

console.log("Despesas Familiares Registradas:");
console.log("Moradia: R$ " + moradia);
console.log("Alimentação: R$ " + alimentacao);
console.log("Transporte: R$ " + transporte);
console.log("Lazer: R$ " + lazer);
console.log("Contas: R$ " + contas);
console.log("Educação: R$ " + educacao);

// Cálculo Total de Despesas
let totalDespesas = moradia + alimentacao + transporte + lazer + contas + educacao;
console.log("Total de Despesas: R$ " + totalDespesas);

// Cálculo da Média de Despesas
let numeroCategorias = 6; // Temos 6 categorias de despesas
let mediaDespesas = totalDespesas / numeroCategorias;
console.log("Média das Despesas: R$ " + mediaDespesas.toFixed(2)); // Exibe com duas casas decimais
