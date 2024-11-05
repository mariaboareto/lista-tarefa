let count = 0;
let spanRemovido = null;

function adicionar() {
    //recuperando o valor do elemento de id tarefa
    let tarefa = document.getElementById("tarefa").value;

    //verificar se existe uma tarefa digitada
    if(tarefa) {
        //contador dp id da tarefa
        count++;

        //recuperando lista do ul de class tarefas 
        let lista = document.getElementsByClassName("tarefas")[0];

        //criando elementos li e button
        let li = document.createElement("li");
        let btn = document.createElement("button");

        li.id = count;
        li.className = "tarefa-item";
        li.textContent = tarefa;

        //atribuindo valores para um alemento button
        btn.className = "btn"
        btn.textContent = "Remover"
        btn.onclick = () => {
            lista.removeChild(li);
            atualizarMensagem(lista)
        }

        //adicionando button criado no li
        li.appendChild(btn);

        //adc o li criado na lista
        lista.appendChild(li);

        atualizarMensagem(lista);
    } else {
        alert("Insira uma tarefa!");
    }

    //limpa campo de entrada
    document.getElementById("tarefa").value = "";
}

function atualizarMensagem(lista) {
    if(lista.children.length === 0) {
        if (spanRemovido) {
        document.querySelector(".tarefas").insertBefore(spanRemovido, document.querySelector(".tarefas").firstChild);
        spanRemovido = null;
        }
    } else {
        let mensagemNaoExiste = document.getElementById("nao-existe");
        if(mensagemNaoExiste) {
            spanRemovido = mensagemNaoExiste;
            mensagemNaoExiste.remove();
        }
    }
}