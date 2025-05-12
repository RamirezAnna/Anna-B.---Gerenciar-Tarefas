const tarefas = [];

function adicionarTarefa() {
  const disciplina = document.getElementById('disciplina').value;
  const tarefa = document.getElementById('tarefa').value;
  const datafinal = document.getElementById('datafinal').value;
  const prioridade = document.getElementById('prioridade').value;

  if (!disciplina || !tarefa || !datafinal) {
    alert('Preencha todos os campos obrigatórios!');
    return;
  }

  const novaTarefa = {
    disciplina,
    tarefa,
    datafinal,
    prioridade
  };

  tarefas.push(novaTarefa);
  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById('lista-tarefas');
  lista.innerHTML = '';

  tarefas.forEach((t, index) => {
    const hoje = new Date().toISOString().split('T')[0];
    const atrasada = t.datafinal < hoje;

    const div = document.createElement('div');
    div.className = 'tarefa' + (t.prioridade === 'Alta' ? ' prioritaria' : '');

    div.innerHTML = `
      <strong>${t.disciplina}</strong> - ${t.tarefa}<br>
      Entregar até: ${t.datafinal}
      ${t.prioridade ? `<br>Prioridade: <strong>${t.prioridade}</strong>` : ''}
      <br>
      ${atrasada ? `<span class="atrasada">⚠️ ATRASADA</span>` : `✅ Dentro do prazo`}
      <br>
      <button onclick="excluirTarefa(${index})">🗑️ Excluir</button>
    `;

    lista.appendChild(div);
  });
}

function excluirTarefa(index) {
  tarefas.splice(index, 1);
  atualizarLista();
}
