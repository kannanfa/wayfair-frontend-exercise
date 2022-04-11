import { Outlet } from "react-router-dom"
const MainContainer = ({ children }) => {
  return (
    <div className="col p-0">
      <div className="row">
        <div className="col-12" style={{ minHeight: "100vh" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
