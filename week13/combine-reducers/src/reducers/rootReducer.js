import {combineReducers} from "redux"
import UserName from "./userNameReducer"
import Email from "./emailReducer"

const rootReducer = combineReducers({
    UserName,
    Email
})

export default rootReducer