import React from "react";
import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {

    const course = {
        title: 'Half Stack application development',
        parts: [
            {
            name: 'Fundamentals of React',
            exercises: 10,
            },

            {
            name: 'Using props to pass data',
            exercises: 7,
            },

            {
            name: 'State of component',
            exercises: 14
            },

        ]
    }

    const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises

    return(
        <div>
            <Header course={course.title} />
            <Content course={course} />
            <Total total={'Number of exercises ' + total} />
        </div>
    )
}

export default App