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

  <h2>🚀 Getting Started</h2>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone https://github.com/your-username/task-tracker.git</code></pre>
    </li>
    <li>Navigate to the project folder:
      <pre><code>cd task-tracker</code></pre>
    </li>
    <li>Run the CLI:
      <pre><code>node task.js &lt;command&gt; [arguments]</code></pre>
    </li>
  </ol>

  <h2>🔧 Available Commands</h2>
  <ul>
    <li><code>add "Task Title"</code> – Add a new task</li>
    <li><code>delete &lt;id&gt;</code> – Delete a task by ID</li>
    <li><code>update &lt;id&gt; &lt;status&gt;</code> – Update task status (e.g., done, in progress)</li>
    <li><code>list</code> – List all tasks</li>
    <li><code>list-done</code> – List completed tasks</li>
    <li><code>list-not-done</code> – List tasks not yet done</li>
    <li><code>list-in-progress</code> – List tasks currently in progress</li>
  </ul>

  <h2>📘 Example Usage</h2>
  <pre><code>
node task.js add "Finish the project"
node task.js list
node task.js update 1682012345678 done
node task.js delete 1682012345678
  </code></pre>

  <h2>🛠 Technologies Used</h2>
  <ul>
    <li>Node.js (JavaScript)</li>
    <li>Native modules: <code>fs</code>, <code>process</code></li>
  </ul>

  <h2>👨‍💻 Author</h2>
  <p><strong>Your Name</strong> – <a href="https://github.com/your-username">GitHub Profile</a></p>

</body>
</html>
