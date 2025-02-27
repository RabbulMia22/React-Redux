import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodos from './components/AddTodos'
import Todos from './components/Todos'
// import UpdateTodo from './components/UpdateTodo'

function App() {
  

  return (
    <>
      <h1>Hello world</h1>
      <AddTodos />
      <Todos />
      {/* <UpdateTodo /> */}
    </>
  )
}

export default App
