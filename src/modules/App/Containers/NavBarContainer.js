
import { Dropdown, Navbar } from "common/components";
import { UserContext } from "common/context";
import { List } from "immutable";
import { useContext } from "react";
import { useSelector } from "react-redux";

const NavBarContainer = () =>{

    const userInfo = useContext(UserContext);
    const value = useSelector(state => state.getIn(['App', userInfo.loginId,'userinfo'], List()));
    const { data =[], isLoading = false, error = null } = value.toJS()
    const navBarClass = isLoading ? "col-12 p-0 navBarlayout loading" : "col-12 p-0"

    return <div className={navBarClass}>
                {!isLoading && <Navbar data={data} >
                          <Dropdown  {...data}></Dropdown>

                </Navbar> }
            </div>
}

export default NavBarContainer;