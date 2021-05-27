const initialState = {
    counter: 0,
    userName: "",
    address: {}
}

function rootReducer(state = initialState, action){

    //Switch statement is a function that recievees a parameter
    //it will let you handle multiple scenerios
    switch(action.type){
        case "ADD":
            return {counter: state.counter + 1}
            break
        case "SUBSTRACT":
            return {counter: state.counter - 1}
            break
        default:
            return state

    }

}
export default rootReducer