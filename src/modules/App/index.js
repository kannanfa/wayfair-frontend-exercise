import { useDispatch } from "react-redux";
import { getUserInfo, getNavigationInfo } from "modules/App/action";
import { useEffect } from "react";
import { UserContextProvider } from "common/context";
import 'modules/App/style.css'
import {SideNavContainer, NavBarContainer, MainContainer } from "modules/App/Containers";

const App = ({children}) =>{
  const userInfo = {loginId:"safavieh", name:"safavieh"};
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getUserInfo(userInfo.loginId))
      dispatch(getNavigationInfo(userInfo.loginId))
    },[])

    return <div className="row">
            <UserContextProvider value={userInfo}>
              <SideNavContainer></SideNavContainer>
                <MainContainer>
                <NavBarContainer></NavBarContainer>
                <div className="col-12">
                  {children}
                </div>
                </MainContainer>
                
            </UserContextProvider>
            </div>
}


export default App;