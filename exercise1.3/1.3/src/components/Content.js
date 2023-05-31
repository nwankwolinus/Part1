import React from 'react'
import Part from './Part'

const Content = () => {

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
    
    return (
        <div>
            <Part name={part1.name} exercises={part1.exercises}/>
            <Part name={part2.name} exercises={part2.exercises} />
            <Part name={part3.name} exercises={part3.exercises} />
        </div>
        )
    }

export default Content;
