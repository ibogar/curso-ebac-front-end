class Pessoa{
    constructor (nome, ...sobrenome){
        this.nome = nome;
        this.sobrenome = [...sobrenome];
    }
}

class Aluno extends Pessoa {
    constructor (nome, nota, ...sobrenome) {
        super(nome, ...sobrenome)

        this.nota = nota;
    }
}

const iuri = new Aluno("iuri", 10, "guilherme", "bogar", "portilho");
const luiz = new Aluno("luiz", 8, "silva");
const sueli = new Aluno("sueli", 10, "braga");
const marcia = new Aluno("márcia", 3, "pereira", "luz");
const mauro = new Aluno("mauro", 4, "botelho");
const tom = new Aluno("tom", 2, "philips");

const arrayAlunos = [iuri, luiz, sueli, marcia, mauro, tom];


const alunosAprovados = arrayAlunos.reduce((acumulador, elemento) => {
    if (elemento.nota >= 6) {
        acumulador.push(`${elemento.nome} ${elemento.sobrenome.join(" ")}`);
    }
    return acumulador;
}, [])

console.log(alunosAprovados);

