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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return(
    <>
    <h1>
        <Header course={course} />
    </h1>
    <div>
        <Content part1={part1.name} exercises1={part1.exercises}/>
        <Content part2={part2.name} exercises2={part2.exercises}/>
        <Content part3={part3.name} exercises3={part3.exercises}/>  
    </div>
    
    </>
    
  )
}



ReactDOM.render(<App/>, document.getElementById('root'))
