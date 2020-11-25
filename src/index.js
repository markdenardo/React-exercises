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
      <Part name = {props.part1} exercises = {props.exercises1}/>
      <Part name={props.part2} exercises={props.exercises2}/>
      <Part name={props.part3} exercises={props.exercises3}/>
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return(
    <>
    <h1>
        <Header course={course} />
    </h1>
    <div>
        <Content part1={part1} exercises1={exercises1}/>
        <Content part2={part2} exercises2={exercises2}/>
        <Content part3={part3} exercises3={exercises3}/>  
    </div>
    
    </>
    
  )
}



ReactDOM.render(<App/>, document.getElementById('root'))
