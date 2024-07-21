class TodoList {  
    constructor() {  
        this.todos = [];  
        this.filter = 'all';  
        this.init();  
    }  

    init() {  
        this.cacheDom();  
        this.addEventListeners();  
        this.render();  
    }  

    cacheDom() {  
        this.todoInput = document.getElementById('todo-input');  
        this.todoList = document.getElementById('todo-list');  
        this.itemsLeft = document.getElementById('items-left');  
        this.toggleAll = document.querySelector('.toggle-all');  
        this.clearCompleted = document.getElementById('clear-completed');  
        this.filters = document.querySelectorAll('.filters button');  
    }  

    addEventListeners() {  
        this.todoInput.addEventListener('keypress', (e) => {  
            if (e.key === 'Enter' && this.todoInput.value.trim()) {  
                this.addTodo(this.todoInput.value);  
                this.todoInput.value = '';  
            }  
        });  

        this.toggleAll.addEventListener('click', () => this.toggleAllTodos());  

        this.clearCompleted.addEventListener('click', () => this.clearCompletedTodos());  

        this.filters.forEach(filter => {  
            filter.addEventListener('click', (e) => {  
                this.filter = e.target.id;  
                this.render();  
            });  
        });  
    }  

    addTodo(text) {  
        this.todos.push({ id: Date.now(), text, completed: false });  
        this.render();  
    }  

    deleteTodo(id) {  
        this.todos = this.todos.filter(todo => todo.id !== id);  
        this.render();  
    }  

    toggleTodo(id) {  
        this.todos = this.todos.map(todo =>  
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );  
        this.render();  
    }  

    toggleAllTodos() {  
        const allCompleted = this.todos.every(todo => todo.completed);  
        this.todos = this.todos.map(todo => ({ ...todo, completed: !allCompleted }));  
        this.render();  
    }  

    clearCompletedTodos() {  
        this.todos = this.todos.filter(todo => !todo.completed);  
        this.render();  
    }  

    render() {  
        this.todoList.innerHTML = '';  
        let filteredTodos = this.todos;  

        if (this.filter === 'active') {  
            filteredTodos = this.todos.filter(todo => !todo.completed);  
        } else if (this.filter === 'completed') {  
            filteredTodos = this.todos.filter(todo => todo.completed);  
        }  

        filteredTodos.forEach(todo => {  
            const li = document.createElement('li');  
            li.className = 'todo-item';  
            li.innerHTML = `  
                <input type="checkbox" ${todo.completed ? 'checked' : ''}>  
                <span>${todo.text}</span>  
                <span class="delete-btn">&times</span>  
            `;  

            li.querySelector('input').addEventListener('change', () => this.toggleTodo(todo.id));  
            li.querySelector('.delete-btn').addEventListener('click', () => this.deleteTodo(todo.id));  

            this.todoList.appendChild(li);  
        });  

        const activeTodos = this.todos.filter(todo => !todo.completed);  
        this.itemsLeft.textContent = `${activeTodos.length} item${activeTodos.length !== 1 ? 's' : ''} left`;  

        this.toggleAll.style.display = this.todos.length ? 'flex' : 'none';  
        document.querySelector('.todo-footer').style.display = this.todos.length ? 'block' : 'none';  

        this.filters.forEach(filter => {  
            filter.classList.toggle('selected', filter.id === this.filter);  
        });  
    }  
}  

new TodoList();