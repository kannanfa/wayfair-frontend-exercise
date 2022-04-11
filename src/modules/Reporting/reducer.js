import { fromJS, Map } from 'immutable';
import { GET_USER_INFO_REQUEST,GET_USER_INFO_FAIURE,GET_USER_INFO_SUCCESS  } from 'modules/Reporting/action';


export function Report(state=Map(), action){
    switch(action.type){
        case GET_USER_INFO_REQUEST:
            return state.setIn([action.loginId, 'info',], Map({
                "isLoading":true
            }));
        case GET_USER_INFO_SUCCESS:
            return state.setIn([action.loginId, 'info', "isLoading"], false)
                        .setIn([action.loginId, 'info', "data"], fromJS(action.response));
        case GET_USER_INFO_FAIURE:
            return state.setIn([action.loginId, 'info', "isLoading"], false)
                        .setIn([action.loginId, 'info', "error"],fromJS(action.data));
        default:
            return state;
    }
}