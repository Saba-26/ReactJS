import React from 'react'

function NameList() {
    const persons=[{
        id:1,
        name:'Bruce',
        age:'30',
        skill:'React'
    },
    {
        id:2,
        name:'Diana',
        age:'28',
        skill:'Angular'
    },
    {
        id:3,
        name:'Lee',
        age:'26',
        skill:'Java'
    },]

    const personList=persons.map(person => <h2>I am {person.name}, I am {person.age} years old and i have {person.skill} skill</h2>)
    return <div>{personList}</div>
}

export default NameList