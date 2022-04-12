import { fromJS, Map } from 'immutable';
import { GET_USER_INFO_REQUEST,GET_USER_INFO_FAIURE,GET_USER_INFO_SUCCESS, GET_NAVIGATION_INFO_REQUEST,GET_NAVIGATION_INFO_FAIURE,GET_NAVIGATION_INFO_SUCCESS  } from 'modules/App/action';


export function App(state=Map(), action){
    switch(action.type){
        case GET_USER_INFO_REQUEST:
            return state.setIn([action.loginId, 'userinfo',], Map({
                "isLoading":true
            }));
        case GET_USER_INFO_SUCCESS:
            return state.setIn([action.loginId, 'userinfo', "isLoading"], false)
                        .setIn([action.loginId, 'userinfo', "data"], fromJS(action.response));
        case GET_USER_INFO_FAIURE:
            return state.setIn([action.loginId, 'userinfo', "isLoading"], false)
                        .setIn([action.loginId, 'userinfo', "error"],fromJS(action.error));
        case GET_NAVIGATION_INFO_REQUEST:
            return state.setIn([action.loginId, 'menu'], Map({
                "isLoading":true
            }));
        case GET_NAVIGATION_INFO_SUCCESS:
            return state.setIn([action.loginId, 'menu', "isLoading"], false)
                        .setIn([action.loginId, 'menu', "data"], fromJS(action.response));
        case GET_NAVIGATION_INFO_FAIURE:
            return state.setIn([action.loginId, 'menu', "isLoading"], false)
                        .setIn([action.loginId, 'menu', "error"],fromJS(action.error));
        default:
            return state;
    }
}