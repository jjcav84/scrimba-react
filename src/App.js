import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

function App() {
    const itemComponents = todosData.map(item => <TodoItem key={item.id} text={item.text} />)
    return (
        <div className="todo-list">
            {itemComponents}
        </div>
    )
}

export default App