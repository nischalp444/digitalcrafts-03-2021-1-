import React from 'react'
import {useDispatch, useSelector} from "react-redux"


export default function Username() {
    const dispatch = useDispatch()
    const username = useSelector((state)=> state.Username)
    return (
        <div>
            <h1>UserName</h1>
            <p>{username}</p>
            <input type="text"></input>
            <button onClick={() => username(dispatch)}>Submit</button>
        </div>
    )
}
