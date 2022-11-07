import React, { useState } from 'react';

type Todo = {
  id: number,
  name: string,
  description: string,
  checked: boolean
}

interface HeaderProps {
  todoCount: number
}

interface TodoPanelProps {
  addTodo: ({name, description}: Omit<Todo, 'checked'|'id'>) => void;
}

const HeaderTodo: React.FC<HeaderProps> = ({todoCount}) => {
  return(
    <div>Todo List <b>{todoCount}</b></div>
  )
}

const DefaultTodo = {
  name: '',
  description: ''
}

const TodoPanel:React.FC<TodoPanelProps> = ({addTodo}) => {
  const [todo, setTodo] = React.useState(DefaultTodo)
    console.log(todo)
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setTodo({...todo, [name]:value});
  }

  return(
    <div>
      <div>
        name
      </div>
      <div>
        <input type="text" id='name' value={todo.name} name='name' onChange={onChange}/>
      </div>
      <div>
        description
      </div>
      <div>
      <input type="text" id='description' value={todo.description} name='description' onChange={onChange}/>
      </div>
      <button onClick={() => addTodo({name: todo.name, description: todo.description})}>ADD</button>
    </div>
  )
}

const TodoList = [
  {id: 1, name: 'task 1', description: 'description 1', checked: false},
  {id: 2, name: 'task 2', description: 'description 2', checked: false},
  {
    id: 3,
    name: 'task 3',
    description: 'Lorem one two tree',
    checked: true
  }
]

const TodoApp_2 = () => {
  const [todos, setTodos] = React.useState(TodoList);

  const addTodo = ({name, description}: Omit<Todo, 'checked'|'id'>) => {
    setTodos([...todos, {id:todos[todos.length - 1].id + 1, description, name, checked:false}])
  };

  console.log('todos, setTodos', todos, setTodos)

  return(
    <div>
      <HeaderTodo todoCount={todos.length}/>
      <TodoPanel addTodo={addTodo}/>
    </div>
  )
}


export default TodoApp_2