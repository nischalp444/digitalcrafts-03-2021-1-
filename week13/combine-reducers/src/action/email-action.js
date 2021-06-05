import CHANGE_EMAIL from "../action-types/email-action"

export const email = (dispatch) =>{
    return dispatch({
        type: CHANGE_EMAIL
    })
}