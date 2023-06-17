var banco = [
  { id: 1, nome: "Maria Cristina" },
  { id: 2, nome: "José antonio" },
  { id: 3, nome: "José Paulo" },
];

function addItem() {
  let nomeInput = document.querySelector("#txt-texto");
  let novoItem = { id: new Date().getTime(), nome: nomeInput.value };
  banco.push(novoItem);
  montarTabela();
  nomeInput.value = "";
  nomeInput.focus();
}

function excluir(pId) {
  const index = banco.findIndex((dado) => dado.id == pId);
  if (index !== -1) banco.splice(index, 1);
  montarTabela();
}

function montarTabela() {
  let tbody = document.querySelector("#tb-body");
  let html = "";
  for (let i in banco) {
    html += `<tr>`;
    html += `<td><input type="checkbox" data-id=${banco[i].id}></td>`;
    html += `<td>&nbsp;${banco[i].nome}&nbsp;</td>`;
    html += `<td><a class="btnExcluir" onClick="excluir(${banco[i].id})">🚮</td>`;
    html += `</tr>`;
  }
  tbody.innerHTML = html;
}

function checkTodos() {
  let checkBoxes = document.querySelectorAll("[data-id]");
  let cbPai = document.querySelector("#ckTodos");
  for (let checkbox of checkBoxes) checkbox.checked = cbPai.checked;
}

function excluirSelecionados() {
  let checkBoxes = document.querySelectorAll("[data-id]");
  for (let checkbox of checkBoxes) {
    if (checkbox.checked) excluir(checkbox.dataset.id);
  }
}

document.addEventListener(
  "DOMContentLoaded",
  () => {
    montarTabela();
  },
  false
);
