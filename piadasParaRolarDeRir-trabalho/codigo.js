class Categoria {
  #nome;

  constructor(nome) {
    this.#nome = nome;
  }

  get Nome() {
    return this.#nome;
  }

  set Nome(value) {
    if (value === "shaco") {
      console.log("você é a piada aqui!");
      value = "você";
    }
    this.#nome = nome;
  }
}

class Piada {
  #titulo;
  #texto;
  #imagem;
  #categoria;

  constructor(titulo, texto, imagem, nomeCategoria) {
    this.#titulo = titulo;
    this.#texto = texto;
    this.#imagem = imagem;
    this.#categoria = new Categoria(nomeCategoria);
  }

  get Imagem() {
    return this.#imagem;
  }

  get Texto() {
    return this.#texto;
  }

  get Titulo() {
    return this.#titulo;
  }

  get Categoria() {
    return this.#categoria;
  }

  get CategoriaNome() {
    return this.#categoria.Nome;
  }
}

const livro = () => {
  const piadaCurta = new Categoria("piadas curtas");
  const joaozinho = new Categoria("jaozinho");

  let arrayPiadas = [];
  arrayPiadas.push(
    new Piada(
      "Patinhos",
      "O que o pato disse para a pata?<br/>R.: Vem Quá!",
      "https://i.pinimg.com/originals/47/58/de/4758defb01c46a145d7ab515dda8634b.jpg",
      piadaCurta
    )
  );
  arrayPiadas.push(
    new Piada(
      "Alô?",
      "Por que o menino estava falando ao telefone deitado?<br/>R.: Para não cair a ligação.",
      "https://cdn5.colorir.com/desenhos/color/201705/telefone-retro-a-casa-a-sala-de-estar-1336278.jpg",
      piadaCurta
    )
  );
  arrayPiadas.push(
    new Piada(
      "Pintinho?",
      "Era uma vez um pintinho que se chama Relam. Toda vez que chovia, Relam piava!",
      "https://pbs.twimg.com/media/EnvQbSUXYAAHFBK.jpg",
      piadaCurta
    )
  );
  arrayPiadas.push(
    new Piada(
      "Sempre o Joãozinho",
      "Na aula de matemática, a professora pergunta:<br/>- Joãozinho, se tenho 6 laranjas em uma mão e 5 laranjas na outra, o que tenho no total?<br/>- Tem umas mãos bem grandes!",
      "https://i.pinimg.com/550x/28/4a/cc/284accba771c22431c9fa9178d433195.jpg",
      joaozinho
    )
  );
  arrayPiadas.push(
    new Piada(
      "Mentiroso",
      "Joãozinho entra correndo na cozinha e fala:<br/>- Mamãe, acredita que me chamaram de mentiroso na escola?<br/>A mãe olha para o menino e diz surpresa:<br/>- Fica quieto, menino. Você ainda nem está na escola!",
      "https://i.pinimg.com/originals/88/75/e6/8875e6bc80d86279646af31e61fa0382.jpg",
      joaozinho
    )
  );
  return arrayPiadas;
};
const piadas = livro();
function selectGenerator() {
  //console.table(piadas);
  let categorias = [];
  for (index in piadas) {
    categorias.push(piadas[index].CategoriaNome);
  }
  const uniqueCategories = categorias.filter((value, index, array) => {
    return array.indexOf(value) === index;
  }); //console.table(uniqueCategories);

  let html = `<select name="categoria">`;
  uniqueCategories.map((uc) => {
    html += `<option value="${uc.Nome}">${uc.Nome}</option>`;
  });
  html += `</select>`;
  const sc = document.getElementById("select-categoria");
  sc.innerHTML = html;
}

selectGenerator();

function piadaShow() {
  let select = document.querySelector("select");
  let option = select.children[select.selectedIndex];
  let texto = option.textContent;

  const filtradas = piadas.filter(
    (piada) => piada.CategoriaNome.Nome === texto
  );
  console.log(filtradas);
  const randomJokeIndex = Math.floor(Math.random() * filtradas.length);
  let html = "";
  html += `<h3>${filtradas[randomJokeIndex].Titulo}</h3>`;
  html += `<p>${filtradas[randomJokeIndex].Texto}</p>`;
  html += `<img src=${filtradas[randomJokeIndex].Imagem} alt="joke imagem" width="150px" heigth="150px">`;

  const span = document.getElementById("PiadaShow");
  span.innerHTML = html;
}
