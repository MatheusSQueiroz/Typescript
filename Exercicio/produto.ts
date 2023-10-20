interface ProdutoModel{
    codigo: number,
    nome: string,
    marca: string,
    categoria: string,
    preco: number
}

const produto1: ProdutoModel = {
    codigo: 11122233,
    nome: 'Notebook',
    marca: 'Dell',
    categoria: 'Eletrônicos',
    preco: 4800.00
}

const produto2: ProdutoModel = {
    codigo: 222333444,
    nome: 'Geladeira',
    marca: 'Brastemp',
    categoria: 'Eletrodomésticos',
    preco: 4683.99
}

const listaProdutos: ProdutoModel[] = [produto1, produto2];

console.log(...listaProdutos);
