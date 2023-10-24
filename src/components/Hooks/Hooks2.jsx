import React, { useEffect, useState } from 'react'

export default function Hooks2(props) {
    const [family, setfamily] = useState([
        { name: "Muhmmad", gender: "male" },
        { name: "Belal", gender: "male" },
        { name: "Abdularhaman", gender: "male" },
        { name: "Sondos", gender: "female" }
    ])
    const [valid, setvalid] = useState(true);
    var [count, setCount] = useState(0);

    useEffect(() => {
        setCount(count+1); // i noticed increment every time i write because useEffect(() => {},[]) work in mount
        setfamily([...family, { name: "eman", gender: "female" }]);
    }, [])



    function toggle() {
        setvalid(!valid);

    }

    return (
        <>
            <div>
                <p>Count: {count}</p>
            </div>
            <div>
                {(valid) ?
                    <ul>
                        {/* {family.map((ele) => ((ele.gender == "male" && <li>{ele.name}</li>)))} */}
                        {family.map((ele) => {
                            if (ele.gender == "male") {
                                return <li>{ele.name}</li>;
                            }
                        }
                        )}
                    </ul> : <ul>
                        {family.map((ele) => (ele.gender == "female" && <li>{ele.name}</li>))}
                    </ul>}
            </div>
            <button onClick={() => { toggle() }} > click</button>
        </>
    )
}
