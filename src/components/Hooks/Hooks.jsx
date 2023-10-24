import React, { useState } from 'react'

export default function Hooks(props) {

    const [usres, setusres] = useState([
        { name: "Muhammad", leader: true },
        { name: "Hendawy", leader: false },
        { name: "Abdullah", leader: false },
        { name: "Sayeh", leader: true },
    ])

    const [isValid, setisValid] = useState(true)

    function toggle (){
        setisValid(!isValid)
    }
    
    return (
        <>
            {(isValid) ? <ul>
                {usres.map((user, index) => (
                    (user.leader) && <li key={index}>{user.name}</li>
                ))}
            </ul> : <ul>
                {usres.map((user, index) => (
                    (!user.leader) && <li key={index}>{user.name}</li>
                ))}
            </ul>}
            
            <button onClick={toggle}>Click</button>
        </>
    )
}
