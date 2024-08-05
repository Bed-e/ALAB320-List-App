# Todo List Application

This is a simple todo list application built using React and Vite. The application allows users to manage a list of tasks, including adding new tasks, marking tasks as complete, editing task descriptions, and deleting tasks.

### Features

- Heading: The application includes a heading labeling it as a "todo list."
- List of Todo Items: Each todo item includes:
  - A checkbox to indicate whether the task is complete.
  - A "delete" button to remove the task from the list (disabled unless the task is complete).
    -An "edit" button to enable editing the task description.
- Edit Mode: When editing a task:
  - The task description is replaced with a text input.
  - The "delete" and "edit" buttons are hidden.
  - A "save" button appears to save changes.
- Add New Todo Items: An input element allows users to create new todo items and add them to the list.

### Requirements

#### Todo Items

Each todo item should:

- Be a string describing the task (e.g., "find that missing sock").
- Include a checkbox to mark the task as complete.
- Include a "delete" button to remove the task from the list, which should be disabled unless the task is complete.
- Include an "edit" button to enable editing the task description.

#### Edit Mode

When editing a task:

- The task description should be replaced with a text input.
- The value of the text input should be bound to a piece of state to ensure accuracy.
- The "delete" and "edit" buttons should be hidden.
- A "save" button should appear to save any changes made to the task.

#### Adding New Todo Items

The application should include an input element that allows users to create new todo items and add them to the list.

# Setup

### Make sure you have the following installed:

- Node.js
- Vite

### Installation

1. Clone the repository:

```shell

git clone https://github.com/your-username/todo-list-app.git
```

2. Navigate to the project directory:

```shell
cd todo-list-app
```

3. Install the dependencies:

```shell
npm install
```

### Running the Application

1. Start the server:

```shell
npm run dev
```

2. Open your browser and go to http://localhost:3000 to see the application in action.

# Project Structure

The project is structured as follows:

```
src/
├── components/
│ ├── Header.jsx
│ ├── ItemAdder.jsx
│ ├── ListItem.jsx
│ └── ToDoList.jsx
├── App.jsx
├── main.jsx
└── index.css
```
