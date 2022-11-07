import React from 'react';
import CounterApp from './Counter/counter';
import TodoApp from './Joke/todo';
import QuizApp from './Quiz/quiz';
import TodoApp_2 from './Todo/todo_2';


const App = () => {

  const [mainBtn, setBtn] = React.useState([
    {
      btn: 'CounterApp',
      id: 1
    },{
      btn: 'QuizApp',
      id: 2
    },{
      btn: 'TodoApp',
      id: 3
    }
  ])

  const checkBtn = (item) => {
    if (item.btn == 'CounterApp') {
      setBtn(<CounterApp />)
    }
  }

  const CreateBtn = ({mainBtn, checkBtn}) => {
    return(
      <ul>
        {mainBtn.map(item => 
          <li key={item.id}><button onClick={() => checkBtn(item)}>{item.btn}</button></li>)}
      </ul>
    )
  }

return(
  <div>
    {/* <CreateBtn mainBtn={mainBtn} checkBtn={checkBtn}/> */}
    {/* <CounterApp /> */}
    {/* <QuizApp /> */}
    {/* <TodoApp /> */}
    {/* <TodoApp_2 /> */}
  </div>
)
}

export default App
