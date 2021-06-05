const initialState = "email"

const email =  (state = initialState, action) =>{
switch (action.type){
    case "CHANGE_EMAIL":
        return ""
    default:
        return state
}

}

export default email