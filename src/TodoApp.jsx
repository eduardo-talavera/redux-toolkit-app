import { useState } from "react"
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis"

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1)

    //const { data: todos = [], isLoading } = useGetTodosQuery()

    const { data: todo, isLoading } = useGetTodoQuery(todoId)

    console.log(todo)

    const nextTodo = () => {
        setTodoId( todoId + 1 )
    }

    const previosTodo = () => {
        if (todoId === 1) return
        setTodoId( todoId - 1 )
    }


  return (
    <>
        <h1>Todos - RTK Query</h1>
        <hr />
        <h4> isLoading:  { isLoading ? 'true' : 'false' } </h4>

        <pre> { JSON.stringify(todo) } </pre>

        <button onClick={ previosTodo }>
            Previos Todo
        </button>

        <button onClick={nextTodo}>
            Next Todo
        </button>

        {/* <ul>
            {
                todos.map(({ id, title, completed }) => (
                    <li key={id}>
                        <strong> { completed ? 'Done' : 'Pending' } </strong>
                        { title }
                    </li>
                ))
            }
        </ul> */}
    </>
  )
}
