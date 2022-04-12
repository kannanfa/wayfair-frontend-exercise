import { useDispatch } from "react-redux";
import { getUserInfo, getNavigationInfo } from "modules/App/action";
import { useEffect } from "react";
import { UserContextProvider } from "common/context";
import 'modules/App/style.css'
import {SideNavContainer, NavBarContainer, MainContainer } from "modules/App/Containers";

/**
 * APP - For the app module main file 
 * @param {Array.<Component>} {children} - Child components
 * @param {Context} UserContextProvider - User context is used to share the context data with all the child component 
 * @param {Component} SideNavContainer - Used to load the multi tire naviagation menu 
 * @param {Component} NavBarContainer - Used to load the top navigation bar
 * @returns {Component} 
 */
const App = ({children}) =>{
  const userInfo = {loginId:"safavieh", name:"safavieh"};

    // Use dispatch is used here to call the API 
    const dispatch = useDispatch();

    // use effects are used to trigger the API call 
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