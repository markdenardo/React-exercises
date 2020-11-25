import React from 'react';
import ReactDOM from 'react-dom';

const Header =(props)=>{
  console.log('Header props', props)
  return(
    <div>
      {props.course}
    </div>
  )
}
const Content = (props) => {
  console.log('Content props', props)
  return (
    <div>
      <Part name = {props.name} exercises = {props.exercises}/>
      {/* <Part name = {props.parts[1].name} exercises = {props.parts[1].exercises}/>
      <Part name = {props.parts[2].name} exercises = {props.parts[2].exercises}/> */}
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.name}
      {props.exercises}
    </div>
  )
}

const App = () =>{
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return(
    <>
    <h1>
        <Header course={course} />
    </h1>
    <div>
        <Content name={parts[0].name} exercises={parts[0].exercises}/>
        <Content name={parts[1].name} exercises={parts[1].exercises} />
        <Content name={parts[2].name} exercises={parts[2].exercises} />
    </div>
    
    </>
    
  )
}



ReactDOM.render(<App/>, document.getElementById('root'))
