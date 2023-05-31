import React from 'react'
import Part from './Part'

const Content = () => {

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

    return (
        <div>
            <Part name={parts[0].name} exercises={parts[0].exercises}/>
            <Part name={parts[1].name} exercises={parts[1].exercise} />
            <Part name={parts[2].name} exercises={parts[2].exercises} />
        </div>
        )
    }

export default Content;
