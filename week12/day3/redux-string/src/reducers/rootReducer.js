const initialState = {
    name: "Nischal"
}

function rootReducer(state = initialState, action){

    switch (action.type){
        case "CHANGE_NAME":
            return {name: "Joe"}
        default:
            return state
    }
}

export default rootReducer