import {createAction} from 'store/helper';
import {Http} from 'common/utils'


export const GET_USER_INFO_REQUEST = "GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIURE = "GET_USER_INFO_FAIURE";


export const getUserInfoRequest = createAction(GET_USER_INFO_REQUEST, 'loginId');
export const getUserInfoSuccess = createAction(GET_USER_INFO_SUCCESS, 'loginId', 'response');
export const getUserInfoFailure = createAction(GET_USER_INFO_FAIURE, 'loginId', 'error');


export const getUserInfo = (loginId) => {
    return (dispatch) =>{
        dispatch(getUserInfoRequest(loginId));
        Http.get("/useinfo.json").then((res)=>{
            const {data} = res
            dispatch(getUserInfoSuccess(loginId, data));
        }).catch((error)=>{
            dispatch(getUserInfoFailure(loginId, error));
        })
    }
}
