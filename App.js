import React from 'react'
import Todo from './Todo'
import TodoList from './TodoList'
import Number from './Number'
import Api from './Api'

function App() {
  return (
    <div>
      <IngIng 
        title="Name"
        value="Isoon"
      />
      <IngIng
        title="Sur-name"
        value="Phtphst"
      />
      <IngIng
        title="Age"
        value="200"
      />

      <Todo></Todo>
      <TodoList></TodoList>
      <Number></Number>
      <Api></Api>
    </div>
  )
}

export default App

function IngIng({title, value}) {
  return (
    <div>
      {title}: <strong>{value}</strong>
    </div>
  )
}