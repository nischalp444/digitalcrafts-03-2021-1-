import React from 'react'

export default function component2(props) {
    return (
        <div>
            <h1>Counter</h1>
            <p>{props.counter}</p>
            <button conClick={()=>props.setCounter(props.counter +1)}>Add</button>
            <button conClick={()=>props.setCounter(props.counter -1)}>Substract</button>
        </div>
    )
}
