import React from 'react'
import {useDispatch, useSelector} from "react-redux"

export default function Greeting() {
    const dispatch = useDispatch()
    const fakeData = useSelector((state) => state.fakeData)
    return (
        <div>
            <h1>Hello Redux</h1>
            <p>{fakeData}</p>
        </div>
    )
}
