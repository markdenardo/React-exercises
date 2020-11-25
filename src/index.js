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
  
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      {/* {props.part} */}
      <Part part={part1}/>
      <Total exercises={exercises1} />
      <Part part = {part2}/>
      <Total exercises={exercises2} />
      <Part part = {part3}/>
      <Total exercises={exercises3} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.part}{props.exercises}
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
  const course = 'Half Stack Application Development'

  return(
    <>
    <h1>
        <Header course={course} />
    </h1>
    <div>
        <Content />
    </div>
    
      {/* <div>
        <Header course={course} />
        <Content part={part1} />
        <Total exercises={exercises1} />
      </div>
      <div>
        <Header course={course} />
        <Content part={part2} />
        <Total exercises={exercises2} />
      </div>
      <div>
        <Header course={course} />
        <Content part={part3} />
        <Total exercises={exercises3} />
      </div> */}
    </>
    
  )
}



ReactDOM.render(<App/>, document.getElementById('root'))
