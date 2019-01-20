import React from "react"
import ReactDOM from "react-dom"

function MyInfo() {
  return (
    <div>
      <h1>Jacob Cavazos</h1>
      <p>This is a paragraph about me...</p>
      <ul>
        <li>Japan</li>
        <li>Turkey</li>
        <li>Nordic Countries</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<MyInfo />, document.getElementById("root"))