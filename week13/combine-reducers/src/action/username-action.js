import CHANGE_USERNAME from "../action-types/username-action"


export const username = (dispatch) =>{
    return dispatch({
        type: CHANGE_USERNAME
    })
}