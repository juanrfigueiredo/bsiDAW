const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sTime = document.querySelector('#m-time')
const sJogador1 = document.querySelector('#m-jogador1')
const sJogador2 = document.querySelector('#m-jogador2')
const sJogador3 = document.querySelector('#m-jogador3')
const sJogador4 = document.querySelector('#m-jogador4')
const sJogador5 = document.querySelector('#m-jogador5')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    sTime.value = itens[index].time
    sJogador1.value = itens[index].jogador1
    sJogador2.value = itens[index].jogador2
    sJogador3.value = itens[index].jogador3
    sJogador4.value = itens[index].jogador4
    sJogador5.value = itens[index].jogador5
    id = index
  } else {
    sTime.value = ''
    sJogador1.value = ''
    sJogador2.value = ''
    sJogador3.value = ''
    sJogador4.value = ''
    sJogador5.value = ''
  }
  
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.time}</td>
    <td>${item.jogador1}</td>
    <td>${item.jogador2}</td>
    <td>${item.jogador3}</td>
    <td>${item.jogador4}</td>
    <td>${item.jogador5}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (sTime.value == '' || sJogador1.value == '' || sJogador2.value == '' || sJogador3.value == '' || sJogador4.value == '' || sJogador5.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].time = sTime.value
    itens[id].jogador1 = sJogador1.value
    itens[id].jogador2 = sJogador2.value
    itens[id].jogador3 = sJogador3.value
    itens[id].jogador4 = sJogador4.value
    itens[id].jogador5 = sJogador5.value
  } else {
    itens.push({'time': sTime.value, 'jogador1': sJogador1.value, 'jogador2': sJogador2.value, 'jogador3': sJogador3.value, 'jogador4': sJogador4.value, 'jogador5': sJogador5.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbDepre')) ?? []
const setItensBD = () => localStorage.setItem('dbDepre', JSON.stringify(itens))

loadItens()
