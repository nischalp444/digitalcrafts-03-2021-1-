import React from 'react'
import {useSelector, useDispatch} from "react-redux"


export default function counter(props) {
    // const counter = useSelector ((state) => state.counter)

    // const dispatch = useDispatch()

    return (
        <div>
            <h1>Counter</h1>
            {/* <p>{props.counter}</p>
            <button onClick={()=>dispatch({ type:"ADD"})}>Add</button>
            <button onClick={()=>dispatch({ type:"SUBSTRACT"})}>Substract</button> */}
        </div>
    )
}
