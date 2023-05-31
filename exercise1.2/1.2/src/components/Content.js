import React from 'react'
import Part from './Part'

const Content = () => {
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Part name={part1} no_of_exercise={exercises1} />
            <Part name={part2} no_of_exercise={exercises2} />
            <Part name={part3} no_of_exercise={exercises3} />
        </div>
        )
    }

export default Content;
