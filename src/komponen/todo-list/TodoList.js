import './TodoList.css'

const TodoList = (props) => {
    return (
        <div>
            <ul>
                {/* menggunakan {} karena dalam JSX tidak mendukung logika */}
                {
                    props.dataTodos.map((todo) => {
                        // { id: 1, title: objek }
                        return <li key={todo.id}>{todo.title}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList;