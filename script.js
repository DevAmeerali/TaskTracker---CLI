const fs = require("fs");
const filePath = "./tasks.json";

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
}

function loadTasks() {
    try {
        const data = fs.readFileSync(filePath);
        return JSON.parse(data)
    } catch (error) {
        console.log("Error Reading File:", error)
        return [];
    }
}

function saveTasks(tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

function addTasks(name) {
    const tasks = loadTasks();
    tasks.push({id: Date.now, name, status: "Pending"})
    saveTasks(tasks);
    console.log(`Task Added ${name}`);
}

function updateTask(id, status){
    const tasks = loadTasks();
    const task = tasks.find((t) => t.id == id)
    if(task) {
        task.status = status;
        saveTasks(tasks);
        console.log(`Task wit id:${id}: Updated to ${status}`)
    } else {
        console.log(`Task with ID ${id} Not Found`)
    }
}

function deleteTasks(id) {
    const tasks = loadTasks();
    const newTasks = tasks.filter((t) => t.id != id);
    if(tasks.lenth === newTasks.lenth) {
        console.log(`Task with ${id} not Found`);
        return;
    }
    saveTasks(newTasks);
    console.log(`task with id ${id} Deleted`);
}

function listTasks(filter = "all") {
    const tasks = loadTasks();
    const filteredTasks = tasks.filter((t) =>
      filter === "all" ? true : t.status === filter
    );
    if (filteredTasks.length === 0) {
      console.log("No tasks found.");
    } else {
      console.log("Tasks:");
      filteredTasks.forEach((task) =>
        console.log(`[${task.id}] ${task.name} - ${task.status}`)
      );
    }
  }

  const [,, command, ...args] = process.argv;

switch (command) {
  case "add":
    addTasks(args.join(" "));
    break;
  case "update":
    updateTask(args[0], args[1]); // update <id> <status>
    break;
  case "delete":
    deleteTasks(args[0]);
    break;
  case "list":
    listTasks(args[0] || "all");
    break;
  default:
    console.log("Commands: add <task>, update <id> <status>, delete <id>, list [status]");
}
