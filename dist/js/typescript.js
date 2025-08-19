// Tipos primitivos
let valor = 3000;
let nome = "";
let isPago = false;
let qualquer = "";
qualquer = 22;
// Arrays
const lista = [];
lista.push("Arroz", 2, true, []);
const fila = [];
fila.push(22, -30, 4.5);
//Enum
var tipoTransacao;
(function (tipoTransacao) {
    tipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    tipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    tipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(tipoTransacao || (tipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: tipoTransacao.DEPOSITO,
    data: new Date,
    valor: 0
};
