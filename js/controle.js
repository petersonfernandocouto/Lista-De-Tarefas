let contador = 0
let input = document.getElementById('inputTarefas');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaListas');

function addTarefa(){
    //esse value é valor digitado no input
    let valorInput = input.value;

    //se nao for vazio ou nulo, nem idefinido

    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined))

        ++contador;
    {
        
         
         let novoItem = `<div id="${contador}" class="item">
         <div onclick="marcarTarefa(${contador})" class="item-icone">
             <i id="icone_${contador}" class="fa-regular fa-circle"></i>

         </div>

         <div onclick="marcarTarefa(${contador})"  class="item-nome">
                 ${valorInput} 
         </div>

         <div class="item-botao">
             <button onclick="deletar(${contador})" class="delete">
                 Deletar <i class="fa-solid fa-trash-can"></i></button>
         </div>

     </div>`;

     main.innerHTML += novoItem; // este cod adc o item digitado

     input.value = ""; // este item deixa o camp vazio apos ter digitado
     input.focus(); // este deixa o campo em foco apos ser digitado


    

    }
}

input.addEventListener("keyup", function(event){
    if(event.keyCode === 13 ){
        event.preventDefault()
        btnAdd.click()

    }

})

/*o cod a cima é para a pessoa não precisar clicar no botao parar add algo, simplemente só dá enter, o numero 13 representa a tecla Enter*/

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

//o cod a cima faz deletar o valor iserido no input


function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class')
    console.log(classe)

    if(classe == 'item'){
        item.classList.add('clicado')

        var icone = document.getElementById("icone_"+ id)
        icone.classList.remove('fa-circle')
        icone.classList.add('fa-circle-check')

        item.parentNode.appendChild(item) // este cod faz com que o item feito vá para o final
    }else{
        item.classList.remove('clicado')

        var icone = document.getElementById("icone_"+ id)
        icone.classList.remove('fa-circle-check')
        icone.classList.add('fa-circle')
        
    }
    
}


