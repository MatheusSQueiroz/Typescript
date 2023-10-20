interface UserModel{
    nome: string,
    sobrenome: string,
    idade: number,
    nacionalidade: string,
    genero: string
}

const User: UserModel = {
    nome: 'Matheus',
    sobrenome: 'Queiroz',
    idade: 23,
    nacionalidade: 'Brasileiro',
    genero: 'Masculino'
}

const User2: UserModel = {
    nome: 'Bugson',
    sobrenome: 'Silva',
    idade: 30,
    nacionalidade: 'Typescriptiano',
    genero: 'Masculino'
}

console.log(User, User2)