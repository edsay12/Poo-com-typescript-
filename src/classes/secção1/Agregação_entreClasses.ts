// Agregação e composição saõ tipos de associaçao entre as classes

// Vamos imaginar uma casa. Uma casa possui telhado e paredes, e não existe sem isso.
// Logo, uma casa é composta de telhado e paredes.

/* Num relacionamento de Composição podemos entender que classes que são compostas 
por outras precisam destas para “viver”, para “existir”. Por exemplo, a classe 
Coração compõe a classe Corpo Humano. Sem o coração o corpo humano não vive. */

class Carrinho {
  constructor(private produtos: Produto[]) {}

  public inserirProduto(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  public quantidade(): number {
    return this.produtos.length;
  }

  public total(): number {
    return this.produtos.reduce((acc, produto) => acc + produto.preco, 0);
  }
}

class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Banana', 5.0);
const produto2 = new Produto('Queijo', 22.0);
const produto3 = new Produto('Picanha', 80.0);

const carrinho = new Carrinho([produto1, produto2]);

console.log(carrinho.inserirProduto(produto3));

console.log(carrinho);

/*  
// ---------- Associação -----------//

E quando classes são completamente idependentes entre si mais podem eventualmente serem
relacionadas e uma relação (m,n)

Exemplo: um professor pode ter varios alunos e um aluno pode ter varios professores
um não depende do outro para existir
*/

/*  

// ---------- Agregação -----------//

È quando um objeto so pode se relacionar a um outro objeto especifico e uma relaçao (1,n)
de todo modo nao ha dependencias entre esses objetos eles podem exitir sem o outro

Exemplo: relação entre os professores e os departamentos. Departamentos podem ter 
vários professores. E o professor só pode estar vinculado a um único departamento.
*/

/*  

// ---------- Composição -----------//

È uma agregação que possue dependencias entre os objetos , ou seja , se o objeto 
principal for destruido, os objetos não podem mais existir. 


Exemplo: é a relação entre uma a universidade e os departamentos. Além da universidade 
possuir vários departamentos, eles só podem existir se a universidade existir. 
*/
