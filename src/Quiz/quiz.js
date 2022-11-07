import React from 'react';

  const questions = [
    {
      title: 'Кто выиграл TI11',
      variants: ['team secret', 'tundra', 'team spirit'],
      correct: 1
    },
    {
      title: 'Где я родился',
      variants: ['Москва', 'Мурманск', 'Магадан'],
      correct: 2
    },
    {
      title: 'Сколько лет я профессионально  занимался сноубордом',
      variants: ['11', '14', '8'],
      correct: 0
    }
  ]

  const Game = ({step, question, onClickVariant}) => {
    return(
    <div>
      <div>Вопрос {step} из 3</div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) =>
        <li onClick={() => onClickVariant(index)} key={text}>
          <button>{text}</button>
          </li>)}
      </ul>
    </div>
    )
  }
  const Result = ({correct}) => {
    return(
      <div>
        <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
        <a href='/'>
          <button>Попробовать снова</button>
        </a>
      </div>
    )
  }

  const QuizApp = () => {

    const [step, setStep] = React.useState(0);
    const [correct, setCorrect] = React.useState(0);
    const question = questions[step]

    const onClickVariant = (index) => {
      console.log(step, index)
      setStep(step + 1)

      if (index === question.correct) {
        setCorrect(correct + 1)
      }
    }

    return(
    <div>
      <h1>Quiz APP</h1>
      {
        step != questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant}/>
        : <Result correct={correct}/>
      }
    </div>
  )
}

export default QuizApp