// Todo List Class
class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodoItem(todo) {
    this.todos.push(todo);
  }

  removeTodoItem(todoId) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }

  updateTodoItem(todoId, updatedTodo) {
    this.todos = this.todos.map((todo) =>
      todo.id === todoId ? { ...todo, ...updatedTodo } : todo
    );
  }
}

// Todo Item Class
class TodoItem {
  constructor(id, title, completed = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}

// Create a new todo list
const myTodoList = new TodoList();

// Add todo items
myTodoList.addTodoItem(new TodoItem(1, 'Buy groceries'));
myTodoList.addTodoItem(new TodoItem(2, 'Pay bills'));
myTodoList.addTodoItem(new TodoItem(3, 'Walk the dog'));

// Update a todo item
myTodoList.updateTodoItem(2, { completed: true });

// Remove a todo item
myTodoList.removeTodoItem(1);

// Log the updated todo list
console.log(myTodoList.todos);
