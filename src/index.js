import React from 'react';
import ReactDOM from 'react-dom';

const Header =(props)=>{
  console.log('Header props', props)
  return(
    <div>
      <h1>{props.course}</h1> 
    </div>
  )
}
const Content = (props) => {
  console.log('Content props', props)
  return (
    <div>
      <ul>{props.parts[0].name}</ul>
      <ul>{props.parts[1].name}</ul>
      <ul>{props.parts[2].name}</ul>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>

    </div>
  )
}

const Total = (props) => {
  console.log('Total props', props)
  return (
    <div>
      <ul>{props.parts[0].exercises}</ul>
      <ul>{props.parts[1].exercises}</ul>
      <ul>{props.parts[2].exercises}</ul>
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
      <div>
        <Header course={course} />
        <Content parts={parts} />
        <Total parts={parts} />
      </div>
    </>
    
  )
}



ReactDOM.render(<App/>, document.getElementById('root'))
