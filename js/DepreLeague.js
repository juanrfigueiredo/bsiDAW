const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;



var dados=[
    {id:1, nomeTime:'00Nation', nomeJogador:'Coldzera', email: 'cold@gamail.com',celular: '111', cpf:'111', data:'2001-05-30', endereço:'', numero:'', cep:''}
]

function mCpf() {
    var cpf = event.target.value;
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    event.target.value = cpf;
}

function mCEP () {
   var cep = event.target.value;
   cep = cep.replace(/\D/g, "")
   cep = cep.replace(/^(\d{2})(\d)/, "$1.$2")
   cep = cep.replace(/.(\d{3})(\d)/, ".$1-$2")
   event.target.value = cep;
}

 function validarCPF() {
   let text;
    var cpf = event.target.value;
    var ok = 1;
    var add;
    if (cpf != "") {
       cpf = cpf.replace(/[^\d]+/g, '');
       if (cpf.length != 11 ||
          cpf == "00000000000" ||
          cpf == "11111111111" ||
          cpf == "22222222222" ||
          cpf == "33333333333" ||
          cpf == "44444444444" ||
          cpf == "55555555555" ||
          cpf == "66666666666" ||
          cpf == "77777777777" ||
          cpf == "88888888888" ||
          cpf == "99999999999")
              ok = 0;
       if (ok == 1) {
          add = 0;
          for (i = 0; i < 9; i++)
             add += parseInt(cpf.charAt(i)) * (10 - i);
             rev = 11 - (add % 11);
             if (rev == 10 || rev == 11)
                rev = 0;
             if (rev != parseInt(cpf.charAt(9)))
                ok = 0;
             if (ok == 1) {
                add = 0;
                for (i = 0; i < 10; i++)
                   add += parseInt(cpf.charAt(i)) * (11 - i);
                rev = 11 - (add % 11);
                if (rev == 10 || rev == 11)
                   rev = 0;
                if (rev != parseInt(cpf.charAt(10)))
                   ok = 0;
             }
         }
         if (ok == 0) {
            text = "CPF inválido";
            event.target.value = "";
         }
         else{
            text = "";
         }
     }
     document.getElementById("cpf-error").innerHTML = text;
}

function validaTime(){
   let text;
   if(document.getElementById("txt-nomeTime").value == ""){
       text = "Por favor, preencha o campo nome Time";
   } 
   else if(document.getElementById("txt-nomeTime").value.length < 3) {
       text = "Nome do Time deve possuir mais de 3 caracteres";  
   }
   else {
       text = "";
   }
   document.getElementById("time-error").innerHTML = text;
}

function validaNome(){
   let text;
   if(document.getElementById("txt-nomeJogador").value == ""){
       text = "Por favor, preencha o campo nome";
   } 
   else if(document.getElementById("txt-nomeJogador").value.length < 3) {
       text = "Nome deve possuir mais de 3 caracteres";  
   }
   else {
       text = "";
   }
   document.getElementById("nome-error").innerHTML = text;
}

function validaEmail(){
   let text;
   if(!emailRegex.test(document.getElementById("txt-emailJogador").value)){
       text = "Por favor, preencha o campo corretamente";

   }
   else{
       text = "";
   }

   document.getElementById("email-error").innerHTML = text;
}

function validaCelular(){
   let text;
   if(document.getElementById("txt-celular").value == ""){
       text = "Por favor, preencha o campo celular";
   } 
   else if(document.getElementById("txt-celular").value.length != 14) {
       text = "Preencha ocelular corretamente";  
   }
   else {
       text = "";
   }
   document.getElementById("celular-error").innerHTML = text;
}

function validardataDeNascimento(data){
   let text;
   dataAtual= new Date();

   data=new Date(data);

   if (dataAtual.getFullYear() - data.getFullYear() <18){
       text = "Data  inválida, precisa ser maior de idade";
   } else {
       text = "";
   }

   document.getElementById("data-error").innerHTML = text;
}

function validaRua(){
   let text;
   if(document.getElementById("txt-rua").value == ""){
       text = "Por favor, preencha o campo rua";
   } 
   else if(document.getElementById("txt-rua").value.length < 3) {
       text = "Rua deve possuir mais de 3 caracteres";  
   }
   else {
       text = "";
   }
   document.getElementById("rua-error").innerHTML = text;
}

function validaNumero(){
   let text;
   if(document.getElementById("txt-numero").value == ""){
       text = "Por favor, preencha o campo numero";
   } 
   else {
       text = "";
   }
   document.getElementById("numero-error").innerHTML = text;
}

function validaCep(){
   let text;
   if(document.getElementById("txt-cep").value == ""){
       text = "Por favor, preencha o campo cep";
   } 
   else if(document.getElementById("txt-cep").value.length != 10) {
       text = "Preencha o cep corretamente";  
   }
   else {
       text = "";
   }
   document.getElementById("celular-error").innerHTML = text;
}

function mascara(m,t,e){
    var cursor = t.selectionStart;
    var texto = t.value;
    texto = texto.replace(/\D/g,'');
    var l = texto.length;
    var lm = m.length;
    if(window.event) {                  
       id = e.keyCode;
    } else if(e.which){                 
       id = e.which;
    }
    cursorfixo=false;
    if(cursor < l)cursorfixo=true;
    var livre = false;
    if(id == 16 || id == 19 || (id >= 33 && id <= 40))livre = true;
    ii=0;
    mm=0;
    if(!livre){
       if(id!=8){
          t.value="";
          j=0;
          for(i=0;i<lm;i++){
             if(m.substr(i,1)=="#"){
                t.value+=texto.substr(j,1);
                j++;
             }else if(m.substr(i,1)!="#"){
                      t.value+=m.substr(i,1);
                    }
                    if(id!=8 && !cursorfixo)cursor++;
                    if((j)==l+1)break;
                        
          } 	
       }
    }
    if(cursorfixo && !livre)cursor--;
      t.setSelectionRange(cursor, cursor);
  }


function montarTabela(){
    let tbody = document.querySelector('#tb-body');

    let html = '';
    for( let item of dados){
        html+= `<tr>
                  <td><input type="checkbox" 
                          data-id="${item.id}" ></td>
                  <td>${item.nomeTime}</td>
                  <td>${item.nomeJogador}</td>
                  <td>${item.data}</td>
                  <td><a class="btnExcluir" 
                         onclick="excluirItem(${item.id})">&#9746;</a></td>
                </tr> `;
    }
    tbody.innerHTML = html;
}

function adicionarItem(){
    let nomeTime = document.querySelector('#txt-nomeTime');
    let nomeJogador = document.querySelector('#txt-nomeJogador');
    let celular = document.querySelector('#txt-celular');
    let cpf = document.querySelector('#txt-cpf');
    let data = document.querySelector('#dt-data');
    let rua = document.querySelector('#txt-rua');
    let numero = document.querySelector('#txt-numero');
    let cep = document.querySelector('#txt-cep');
    let novoItem ={ id: new Date().getTime(),
                    nomeTime: nomeTime.value,
                    nomeJogador: nomeJogador.value,
                    celular: celular.value,
                    cpf: cpf.value,
                    data: data.value,
                     rua: rua.value,
                     numero: numero.value,
                     cep: cep.value}

    dados.push(novoItem);
    montarTabela();
    nomeTime.value = '';
    nomeTime.focus();          
    nomeJogador.value = '';
    nomeJogador.focus();   
    rg.value = '';
    rg.focus();   
    cpf.value = '';
    cpf.focus(); 
    data.value='';
    data.focus();
    rua.value='';
    rua.focus();
    numero.value='';
    numero.focus();
    cep.value='';
    cep.focus();
}

function excluirItem(pId){
    let dadosAux = []
    for (let i=0; i<dados.length; i++)
       if (dados[i].id != pId)
          dadosAux.push(dados[i]);
    
    dados = dadosAux;
    montarTabela();
}

function selecionarTodosCheckBox(){
   let checkboxes = document.querySelectorAll('[data-id]');
   let cbPai = document.querySelector('#ckTodos');

   for (let checkbox of checkboxes)
      checkbox.checked = cbPai.checked;
}

function excluirSelecionados(){
    let checkboxes = document.querySelectorAll('[data-id]');
    for (let checkbox of checkboxes)
       if (checkbox.checked)
          excluirItem(checkbox.dataset.id);
}

document.addEventListener('DOMContentLoaded',function(){
   montarTabela();

   let btnAdd = document.querySelector('#btn-add');
   btnAdd.addEventListener('click', adicionarItem);

   let cbPai = document.querySelector('#ckTodos');
   cbPai.addEventListener('change',  
                              selecionarTodosCheckBox);

    let btnSelect = document.querySelector('#btnSelect');
    btnSelect.addEventListener('click',
                                excluirSelecionados);
                              
},false);