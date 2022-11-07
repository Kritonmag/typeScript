import React, { useState } from 'react';

// interface TodosProps {
//   id: number,
//   title: string,
//   status: boolean
// }

const Todos = ({todos, delItem, statusItem}) => {
  return(
    <ul>
      {todos.map(item => (
        <li key={item.id}>
          {item.title}
          <button onClick={() => delItem(item.id)}>Del</button>
          <button onClick={() => statusItem(item.id)}>Done</button>
        </li>
      ))}
    </ul>
  )
}

const AddTodo = ({todo, setTodos}) => {

  const [value, setValue] = useState('')

  function saveTodo() {
    setTodos(
      [...todo, {
        id: value,  
        title: value,
        status: true
      }]
    )
    setValue('')
  }
  return(
    <div>
      <input placeholder='ADD TODO' value={value} onChange={(e) => setValue(e.target.value)}/>
      <button onClick={saveTodo}>Add todo</button>
    </div>
  )
}

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'walk a dog',
      status: false
    },{
      id: 2,
      title: 'creat app',
      status: false
    }, {
      id: 3,
      title: 'whath TV',
      status: false
    }
  ]);

const delItem = (id) => {
  let newTodo = [...todos].filter(item => item.id!=id)
  setTodos(newTodo)
}

const statusItem = (id) => {
  let newTodo = [...todos].filter(item => {
    if (item.id == id) {
      item.status = !item.status
    }
    if ( item.status == true) {
      item.title = item.title + ' DONE'
    }
    return item
  })
  setTodos(newTodo)
}

console.log(todos)

  return(
    <div>
      <h1>Joke APP</h1>
      <Todos
       todos={todos}
       setTodos={setTodos}
       delItem={delItem}
       statusItem={statusItem}
       />
       <AddTodo 
       setTodos={setTodos}
       todo={todos}
       />
    </div>
  )
}

export default TodoApp