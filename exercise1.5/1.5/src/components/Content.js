import React from 'react'
import Part from './Part'

const Content = () => {

    const course = {
        name: 'Half Stack application development',
        parts: [
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
    }

    return (
        <div>
            <Part name={course.parts[0].name} exercises={course.parts[0].exercises}/>
            <Part name={course.parts[1].name} exercises={course.parts[1].exercise} />
            <Part name={course.parts[2].name} exercises={course.parts[2].exercises} />
        </div>
        )
    }

export default Content;
