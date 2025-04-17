  <h1>📝 Task Tracker CLI</h1>
  <p>A simple command-line tool built with Node.js to help manage your daily tasks directly from your terminal.</p>

  <h2>📦 Features</h2>
  <ul>
    <li>Add new tasks</li>
    <li>Update task status (in progress, done)</li>
    <li>Delete tasks</li>
    <li>List all tasks</li>
    <li>Filter tasks by status (done, not done, in progress)</li>
    <li>Stores data locally in a JSON file</li>
    <li>No external libraries used – built entirely with Node.js</li>
  </ul>

 <h2>📂 Usage of `fs` Module</h2>
  <p>The project uses Node.js's built-in <code>fs</code> (File System) module to interact with files. Specifically:</p>
  <ul>
    <li><strong>Reading tasks from the file:</strong> The <code>fs.readFileSync()</code> method is used to read the tasks stored in <code>tasks.json</code>.</li>
    <li><strong>Writing tasks to the file:</strong> The <code>fs.writeFileSync()</code> method writes the task data (in JSON format) back to <code>tasks.json</code>.</li>
    <li><strong>Checking if the file exists:</strong> The <code>fs.existsSync()</code> method is used to check if <code>tasks.json</code> exists before reading or writing to it.</li>
  </ul>
