// Carrega tarefas salvas ao iniciar a página
window.onload = function () {
  carregarTarefas();
};

document.getElementById("formTarefa").addEventListener("submit", function (event) {
  event.preventDefault();

  const disciplina = document.getElementById("disciplina").value;
  const tarefa = document.getElementById("tarefa").value;
  const datafinal = document.getElementById("datafinal").value;
  const prioridade = document.getElementById("prioridade").value;

  if (!disciplina || !tarefa || !datafinal) {
    alert("Preencha todos os campos!");
    return;
  }

  const novaTarefa = {
    disciplina: disciplina,
    tarefa: tarefa,
    datafinal: datafinal,
    prioridade: prioridade
  };

  // Salva no LocalStorage
  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefas.push(novaTarefa);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));

  carregarTarefas();

  // Limpa o formulário
  document.getElementById("formTarefa").reset();
});

function carregarTarefas() {
  const lista = document.getElementById("listaTarefas");
  lista.innerHTML = "";

  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

  tarefas.forEach((t, index) => {
    const tarefaDiv = document.createElement("div");
    tarefaDiv.className = "tarefa";
    tarefaDiv.innerHTML = `
      <strong>Disciplina:</strong> ${t.disciplina}<br>
      <strong>Tarefa:</strong> ${t.tarefa}<br>
      <strong>Data de Entrega:</strong> ${t.datafinal}<br>
      <strong>Prioridade:</strong> ${t.prioridade}<br>
      <button onclick="excluirTarefa(${index})">❌ Excluir</button>
    `;

    lista.appendChild(tarefaDiv);
  });
}

function excluirTarefa(index) {
  let tarefas = JSON.parse(localStorage.getItem("tarefas"));
  tarefas.splice(index, 1);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  carregarTarefas();
}


