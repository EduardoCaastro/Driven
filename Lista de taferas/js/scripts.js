let contador = 3;
const tarefas = [
    { titulo: "Adicione uma tarefa no botão acima ☝️", status:"progresso" },
    { titulo: "Passe o mouse na tarefa para ver o botão excluir 🗑️", status: "progresso" }, 
    { titulo: "Clique na tarefa para marca-la como feita ✔️", status: "progresso" }
];

function atualizarTarefas() {
    const ul = document.querySelector("ul");
    ul.innerHTML = "";
    contador = 0;

    for (let index = 0; index < tarefas.length; index++) {
        let elementoTarefa;
        if(tarefas[index].status === "finalizada"){
            elementoTarefa = `
                <li class = "finalizada">
                    <div class="btn-delete"> <!-- Botão de deletar, aparece ao passar mouse em cima da tarefa -->
                        <ion-icon name="trash-outline"></ion-icon>
                    </div>
                    <span onclick="finalizarTarefa(this)">${tarefas[index].titulo}</span> <!-- Texto da tarefa -->
                </li>
            `;
        } else {
            elementoTarefa = `
                <li>
                    <div class="btn-delete"> <!-- Botão de deletar, aparece ao passar mouse em cima da tarefa -->
                        <ion-icon name="trash-outline"></ion-icon>
                    </div>
                    <span onclick="finalizarTarefa(this)">${tarefas[index].titulo}</span> <!-- Texto da tarefa -->
                </li>
            `;  
        }

        ul.innerHTML += elementoTarefa;
        contador++;
    }
    atualizarContador();
}

atualizarTarefas();

function adicionarNovaTarefa() {
    const novaTarefa = document.querySelector("input").value;
    tarefas.push(novaTarefa);
    atualizarTarefas();
    document.querySelector("input").value = "";
}

function finalizarTarefa(elemento) {
    const li = elemento.parentNode;
    
    const estaFinalizada = li.classList.contains("finalizada");
    if(estaFinalizada === true) {
        contador++;
    } else {
        contador--;
    }

    li.classList.toggle("finalizada");
    atualizarContador()
}

function finalizarTodas() {
    const tarefas = document.querySelectorAll("li");

    let index = 0;
    while(index < tarefas.length) {
        tarefas[index].classList.add("finalizada");
        index++;
    }

    contador = 0;
    atualizarContador()
}

function atualizarContador() {
    const elementoContador = document.querySelector("h1");
    elementoContador.innerHTML = `TO-DO LIST (${contador})`;
}