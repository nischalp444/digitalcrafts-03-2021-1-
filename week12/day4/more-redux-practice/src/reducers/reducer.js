import {INSERT_FAKE_JOE } from "../action-types/action-types"
const initialState = {
    fakeData: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INSERT_OBJECT":
            return {fakeData: [{username: "Joe", height: "7.1"}]
    }
    default:
        return state
}
}