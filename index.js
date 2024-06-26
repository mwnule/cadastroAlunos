const prompt = require('prompt-sync')();

let consultas =n [];

while (true) {
    console.log(`
    1. Cadastrar consulta
    2. Visualizar consultas 
    3. ATualizar Consulta 
    4. Remover consulta
    6. Sair
    `)

    let opcao = prompt("Qual opção deseja?")
    console.log(opcao)

    switch (opcao) {
        case '1':
                consulta.paciente = prompt("Qual o nome do paciente?")
                consulta.medico = prompt("Qual o nome do medico?")
                consulta.data = prompt("Qual a data da consulta?")
                consulta.horario = prompt("Qual o horario da consulta?")

                consultas.push(consulta)
                console.log("Cadastrada com sucesso!")
            break;
        case '2':
            break;
        case '3':
            break;
        case '4':
            break;
        case '5':
            break;
        case '6':
            break;
    }
}

// feat: adicionado cadastro