// Tipos primitivos
let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 22;

// Arrays
const lista = [];
lista.push("Arroz", 2, true, []);

const fila: number[] = [];
fila.push(22, -30, 4.5);

// Tipos personlaizados
type Transacao = {
    tipoTransacao: tipoTransacao;
    data: Date;
    valor: number;
}

//Enum

enum tipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

const novaTransacao: Transacao = {
    tipoTransacao: tipoTransacao.DEPOSITO,
    data: new Date,
    valor: 0
}