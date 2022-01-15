import './Todo.css';
import TodoList from '../todo-list/TodoList';

const Todo = () => {

    const todos = [
        { id: 1, title: 'Riki Widiantoro' },
        { id: 2, title: 'Eat' },
        { id: 3, title: 'Code' },
        { id: 4, title: 'Sleep' },
    ]

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList dataTodos={todos} />
        </div>
    )
}

export default Todo;