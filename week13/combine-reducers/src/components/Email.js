import React from 'react'
import {useDispatch, useSelector} from "react-redux"


export default function Email() {
    const dispatch = useDispatch()
    const email = useSelector((state)=> state.Email)
    return (
        <div>
            <h1> Email</h1>
            <p>{email}</p>
            <input type="text"></input>
            <button onClick={() => email(dispatch)}>Submit</button>
        </div>
    )
}
