import React from "react";
import { SideNavbar } from "common/components";
import { UserContext } from "common/context";
import { List } from "immutable";
import { useContext } from "react";
import { useSelector } from "react-redux";


const SideNavBarContainer = () =>{

    const userInfo = useContext(UserContext);
    const value = useSelector(state => state.getIn(['App', userInfo.loginId,'menu'], List()));
    const { data =[], isLoading = false, error = null } = value.toJS()
    const sideBarClass = isLoading ? "col-lg-1 col-md-1 col-sm-2 sidelayout loading" : "col-auto sidelayout"


   return <div className={sideBarClass} >
            {!isLoading && <SideNavbar data={data} isLoading={isLoading}></SideNavbar>}
    </div>
}

export default SideNavBarContainer;