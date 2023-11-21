const usuarios = [];
let userValid;

function createUser(username, password) {
  if (username != null || password != null) {
    let user = {
      username: username,
      password: password,
      tasks: [],
    };
    usuarios.push(user);
    console.log("--------------------\nUsuario adicionado com sucesso");
  } else {
    console.log("Nome de usuario invalido.");
  }
}
function login(username, password) {
  let encontrarUser = usuarios.find((user) => user.username === username);

  if (encontrarUser && encontrarUser.password === password) {
    console.log("Voce está logado: " + encontrarUser.username);
    userValid = encontrarUser.username;
  } else {
    console.log("--------------------\nNome ou senha invalidos");
  }
}

let tasks = [];
// tasks
function createTask(title, description, usuarioValido) {
  if (usuarioValido == userValid) {
    if (title != null) {
      let tarefa = {
        title: title,
        description: description,
        completed: false,
      };
      tasks.push(tarefa);
      console.log(
        "--------------------\nTarefa Adicionada com sucesso: \n--------------------\n " +
          tarefa.title
      );
    } else {
      console.log("--------------------\nTitulo invalido");
    }
  }
}
function listTask() {
  console.log("--------------------\nTarefas:");
  tasks.forEach((task, index) => {
    console.log(
      `${index}.\nTitulo: ${task.title}\nDescrição:${
        task.description
      }\nStatus: ${
        task.completed ? "Completa" : "Incompleta"
      }\n--------------------\n`
    );
  });
}
function updateTaskStatus(index, completed) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = completed;
    console.log("--------------------\nStatus Atualizado");
  } else {
    console.log("--------------------\nTarefa invalida");
  }
}

function deleteTask(index) {
  if (index >= 0 && index < tasks.length) {
    console.log("--------------------\nTarefa deletada " + tasks[index].title);
    tasks.splice(index, 1);
  } else {
    console.log("Tarefa invalida");
  }
}

function updateTask(index, newTitle, newDescription) {
  if (newTitle != null) {
    if (index >= 0 && index < tasks.length) {
      tasks[index].title = newTitle;
      tasks[index].description = newDescription;
      console.log("--------------------\nTarefa alterada ");
    } else {
      console.log("Tarefa invalida");
    }
  } else {
    console.log("Titulo invalido");
  }
}
createTask(
  "Fazer uma lista de tarefas 1",
  "Seguindo o tutorial da aula da carla 1"
);
createTask(
  "Fazer uma lista de tarefas 2",
  "Seguindo o tutorial da aula da carla 2"
);
createTask(
  "Fazer uma lista de tarefas 3",
  "Seguindo o tutorial da aula da carla 3"
);
createTask(
  "Fazer uma lista de tarefas 4",
  "Seguindo o tutorial da aula da carla 4"
);
listTask();
updateTaskStatus(0, true);
listTask();
updateTask(0, "Novo titulo", "Nova description");
listTask();
deleteTask(0);
listTask();
createUser("fox", "fox");
login("fox", "fox");


