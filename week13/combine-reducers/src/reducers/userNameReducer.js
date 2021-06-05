const initialState = "user name"

const Username =  (state = initialState, action) =>{
switch (action.type){
    case "CHANGE_USERNAME":
        return ""
    default:
        return state
}

}

export default Username