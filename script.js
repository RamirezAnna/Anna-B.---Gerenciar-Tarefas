document.getElementById("formTarefa").addEventListener("submit", function(event) {
  event.preventDefault();

  const disciplina = document.getElementById("disciplina").value;
  const tarefa = document.getElementById("tarefa").value;
  const datafinal = document.getElementById("datafinal").value;
  const prioridade = document.getElementById("prioridade").value;

  if (!disciplina || !tarefa || !datafinal) {
    alert("Preencha todos os campos!");
    return;
  }

  const lista = document.getElementById("listaTarefas");
  const novaTarefa = document.createElement("div");
  novaTarefa.className = "tarefa";
  novaTarefa.innerHTML = `
    <strong>Disciplina:</strong> ${disciplina}<br>
    <strong>Tarefa:</strong> ${tarefa}<br>
    <strong>Data de Entrega:</strong> ${datafinal}<br>
    <strong>Prioridade:</strong> ${prioridade}
  `;

  lista.appendChild(novaTarefa);

  // Limpa o formulário
  document.getElementById("formTarefa").reset();
});

