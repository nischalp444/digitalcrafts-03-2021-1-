import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {
    ADDITION,
    SUBTRACTION
} from "../actions/counterActions"

export default function Counter() {
    const counter = useSelector((state) => state.counter)

    const dispatch = useDispatch()
    
    return (
        <div>
            <h1>Counter</h1>
            <p>{counter}</p>
            <button onClick={() => dispatch({type: ADDITION})}>Addition</button>
            <button onClick={() => dispatch({type: SUBTRACTION})}>SUBTRACTION</button>
        </div>
    )
}
