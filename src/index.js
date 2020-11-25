import React from 'react';
import ReactDOM from 'react-dom';

const Header =(props)=>{
  return(
    <div>
      {props.course}
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      {props.title}
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
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
      <div>
        <Header course={course} />
        <Content title={part1} />
        <Total exercises={exercises1} />
      </div>
      <div>
        <Header course={course} />
        <Content title={part2} />
        <Total exercises={exercises2} />
      </div>
      <div>
        <Header course={course} />
        <Content title={part3} />
        <Total exercises={exercises3} />
      </div>
    </>
    
  )
}



ReactDOM.render(<App/>, document.getElementById('root'))
