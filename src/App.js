import React from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./data/todosData"

function App() {
    const itemComponents = todosData.map(item => <TodoItem key={item.id} text={item.text} />)
    return (
        <div className="todo-list">
            {itemComponents}
        </div>
    )
}

export default App