import React from "react";
import { SideNavbar } from "common/components";
import { UserContext } from "common/context";
import { List } from "immutable";
import { useContext } from "react";
import { useSelector } from "react-redux";


/**
 * SideNavBarContainer - It a layout component used to create base layout for side navbar
 * @param {Array.<Component>} {children} - List of child component
 * @param {Function} useContext - Used to access the user info from user context
 * @returns {Component}
 */

const SideNavBarContainer = () =>{

    const userInfo = useContext(UserContext);
    const value = useSelector(state => state.getIn(['App', userInfo.loginId,'menu'], List()));
    const { data =[], isLoading = false, error = null } = value.toJS()
    const sideBarClass = isLoading ? "col-lg-1 col-md-1 col-sm-2 sidelayout loading" : "col-auto sidelayout"


   return <div className={sideBarClass} >
            {!isLoading && error && <div className="alert alert-warning" role="alert"> {error?.message}! Unable to load Navigation bar</div>}
            {!isLoading && !error && <SideNavbar data={data} isLoading={isLoading}></SideNavbar>}
    </div>
}

export default SideNavBarContainer;