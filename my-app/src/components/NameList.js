import React from 'react'

function NameList() {
    const persons = [
        {
            id:1,
            name:'sai',
            age:30
        },
        {
            id:2,
            name:'swap',
            age:33
        },
        {
            id:3,
            name:'vihan',
            age:40
        },
        
    ]
    // const name = ['A', 'B', 'C'];
    const personList = persons.map(person=>(
        <h2>{person.name}</h2>
    ))
    return (
        <div>{personList}</div>
    )
}

export default NameList
