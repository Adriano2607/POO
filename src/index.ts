console.clear();
class Autor {
  nome: string;
  cpf: string;
  constructor(nome: string, cpf: string) {
    this.nome = nome;
    this.cpf = cpf;
  }
}

let autor1 = new Autor("Stephen King", "843.498.930-16");
let autor2 = new Autor("William Shakespeare", "184.638.970-45");

class Livro {
  titulo: string;
  autor: Autor;
  categoria: string;
  ano: string;
  constructor(titulo: string, autor: Autor, categoria: string, ano: string) {
    this.titulo = titulo;
    this.autor = autor;
    this.categoria = categoria;
    this.ano = ano;
  }
}

let livro1 = new Livro("It", autor1, "Terror", "2015");

class Leitor {
  nome: string;
  cpf: string;
  telefone: string;
  endereco: string;
  constructor(nome: string, cpf: string, telefone: string, endereco: string) {
    this.nome = nome;
    this.cpf = cpf;
    this.telefone = telefone;
    this.endereco = endereco;
  }
}

let leitor1 = new Leitor(
  "Lucas",
  "204.984.930-32",
  "(51) 99441-1880",
  "Rua Carlos Trein Filho"
);

class Loja {
  livrosParaVender: Array<Livro>;
  constructor(livrosParaVender: Array<Livro> = []) {
    this.livrosParaVender = livrosParaVender;
  }
  addLivrosParaVenda(livroQueQueroVender: Livro) {
    this.livrosParaVender.push(livroQueQueroVender);
  }

  listaLivrosParaVenda(): void {
    console.log("Lista de Livros para Venda");
    for (let lista of this.livrosParaVender) {
      console.log(
        "Titulo: " + lista.titulo + " do Autor: " + lista.autor.nome + "."
      );
    }
  }
}

let loja = new Loja();
loja.addLivrosParaVenda(livro1);
loja.addLivrosParaVenda(
  new Livro("A Biblioteca da Meia-Noite", autor1, "Comedia", "2022")
);
loja.addLivrosParaVenda(new Livro("Verity ", autor2, "Guerra", "2022"));
loja.addLivrosParaVenda(
  new Livro("A paciente silenciosa ", autor2, "Drama", "2022")
);
loja.listaLivrosParaVenda();

class Biblioteca {
  livrosParaEmprestimo: Array<Livro>;
  constructor(livrosParaEmprestimo: Array<Livro> = []) {
    this.livrosParaEmprestimo = livrosParaEmprestimo;
  }
  addLivrosParaEmprestimo(livroQueQueroEmprestar: Livro) {
    this.livrosParaEmprestimo.push(livroQueQueroEmprestar);
  }
  listaLivrosParaEmprestimo(): void {
    console.log("Lista de Livros para Emprestimo");
    for (let lista of this.livrosParaEmprestimo) {
      console.log(
        "Titulo: " + lista.titulo + " do Autor: " + lista.autor.nome + "."
      );
    }
  }
}

let biblioteca = new Biblioteca();
biblioteca.addLivrosParaEmprestimo(
  new Livro("Mais Esperto que o Diabo", autor2, "Livro de autoajuda", "2010")
);
biblioteca.addLivrosParaEmprestimo(
  new Livro(
    "Mindset: A Nova Psicologia do Sucesso",
    autor1,
    "Livro de autoajuda",
    "2002"
  )
);
biblioteca.listaLivrosParaEmprestimo();

//Empréstimo - precisa ter o livro emprestado, o leitor e a data do empréstimo
