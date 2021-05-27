import React from 'react'
import {useSelector, useDispatch} from "react-redux"

export default function Name() {

    const nameChanger = useSelector(state => state.name)

    const dispatch = useDispatch()

    return (
        <div>
            <h1>Hello World</h1>
            <p> {nameChanger} </p>
            <button onClick={() => dispatch({type: "CHANGE_NAME"})}>Change your name to Joe</button>
        </div>
    )
}
