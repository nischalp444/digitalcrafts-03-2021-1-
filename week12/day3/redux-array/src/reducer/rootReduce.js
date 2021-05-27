const initialState = {
    nameArray: []
}

function rootReducer(state = initialState, action){
    switch(action.type) {
        case "SWITCH_NAMES":
            return {nameArray: [{name: "Joe"}, {name: "Mikael"}]}
        default:
            return state
    }
}
export default rootReducer