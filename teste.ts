console.clear();
class Autor {
  nome: string;
  cpf: string;
  constructor(nome: string, cpf: string) {
    this.nome = nome;
    this.cpf = cpf;
  }
}
//add autores num array
let autores: Array<Autor> = [];
autores.push(new Autor("Stephen King", "843.498.930-16"));
autores.push(new Autor("Stephen King", "843.498.930-16"));

//classe livros
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

//classe leitores
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

//add autores nuum array
let leitores: Array<Leitor> = [];
leitores.push(
  new Leitor(
    "Lucas",
    "204.984.930-32",
    "(51) 99441-1880",
    "Rua Carlos Trein Filho"
  )
);
leitores.push(
  new Leitor(
    "Adriano",
    "204.984.930-32",
    "(51) 99441-1880",
    "Rua Carlos Trein Filho"
  )
);

//CLASSE LOJA
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

//instancia classe loja
let loja = new Loja();
loja.addLivrosParaVenda(
  new Livro("A Biblioteca da Meia-Noite", autores[0], "Comedia", "2022")
);
loja.addLivrosParaVenda(new Livro("Verity ", autores[1], "Guerra", "2022"));
loja.addLivrosParaVenda(
  new Livro("A paciente silenciosa ", autores[1], "Drama", "2022")
);
loja.listaLivrosParaVenda();

//classe emprestimo
class Emprestimo {
  livro: Livro;
  leitor: Leitor;
  dataEmprestimo: string;
  dataDevolucao: string;
  constructor(
    livro: Livro,
    leitor: Leitor,
    dataEmprestimo: string,
    dataDevolucao: string
  ) {
    this.livro = livro;
    this.leitor = leitor;
    this.dataEmprestimo = dataEmprestimo;
    this.dataDevolucao = dataDevolucao;
  }
}
let livrosqueForamEmprestados: Array<Emprestimo> = [];

//classe biblioteca
class Biblioteca {
  livrosParaEmprestimo: Array<Livro>;
  livrosEmprestados: Array<Emprestimo>;
  constructor(
    livrosParaEmprestimo: Array<Livro> = [],
    livrosEmprestados: Array<Emprestimo> = []
  ) {
    this.livrosParaEmprestimo = livrosParaEmprestimo;
    this.livrosEmprestados = livrosEmprestados;
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
  pegarLivroEmprestado(
    livroParaPegarEmprestado: Livro,
    leitor: Leitor,
    dataEmprestimo: string,
    dataDevolucao: string
  ): void {
    console.log(
      "O Leitor " +
        leitor.nome +
        " pegou empresado o livro " +
        livroParaPegarEmprestado.titulo +
        " na data: " +
        dataEmprestimo +
        " e devolveu em: " +
        dataDevolucao
    );
    let emprestimo = new Emprestimo(
      livroParaPegarEmprestado,
      leitor,
      dataEmprestimo,
      dataDevolucao
    );
    let indice: number = this.livrosParaEmprestimo.indexOf(
      livroParaPegarEmprestado
    );
    this.livrosParaEmprestimo.splice(indice, 1);
    livrosqueForamEmprestados.push(emprestimo);
  }
  devolverLivro(livroParaDevolver: Emprestimo) {
    let indice: number = this.livrosEmprestados.indexOf(livroParaDevolver);
    this.livrosEmprestados.splice(indice, 1);
    this.livrosParaEmprestimo.push(livroParaDevolver.livro);
  }
}

let biblioteca = new Biblioteca();
biblioteca.addLivrosParaEmprestimo(
  new Livro(
    "Mais Esperto que o Diabo",
    autores[1],
    "Livro de autoajuda",
    "2010"
  )
);
biblioteca.addLivrosParaEmprestimo(
  new Livro(
    "Mindset: A Nova Psicologia do Sucesso",
    autores[0],
    "Livro de autoajuda",
    "2002"
  )
);
biblioteca.addLivrosParaEmprestimo(
  new Livro("A Arte da Guerra", autores[1], "Livro de autoajuda", "2010")
);
biblioteca.listaLivrosParaEmprestimo();
biblioteca.pegarLivroEmprestado(
  biblioteca.livrosParaEmprestimo[0],
  leitores[1],
  "20/08/2022",
  "25/08/2022"
);
biblioteca.devolverLivro(livrosqueForamEmprestados[0]);
biblioteca.listaLivrosParaEmprestimo();
