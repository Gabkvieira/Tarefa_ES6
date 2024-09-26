const alunos = [];

alunos.push ({
    nome: 'Lúcio',
    nota: 7
})

alunos.push ({
    nome: 'Alex',
    nota: 9
})

alunos.push ({
    nome: 'Laura',
    nota: 5.9
})

alunos.push ({
    nome: 'Flávio',
    nota: 3
})

alunos.push ({
    nome: 'Maria',
    nota: 8
})

alunos.push ({
    nome: 'João',
    nota: 6
})

alunos.push ({
    nome: 'Gabriel',
    nota: 10
})

alunos.push ({
    nome: 'Paula',
    nota: 4
})

alunos.push ({
    nome: 'Pedro',
    nota: 5
})

alunos.push ({
    nome: 'Ana',
    nota: 6.5
})

function filtraAlunosComNotaMaiorIgual6(aluno) {
    return aluno.nota >= 6;
}

const filtraAlunosComNotaMaiorIgual6_2 = aluno => aluno.nota >= 6;

const alunosComNotaMaiorIgual6 = alunos.filter(filtraAlunosComNotaMaiorIgual6_2);

console.log(alunosComNotaMaiorIgual6);

