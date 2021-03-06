/**
 * MainContainer - It a layout component used to create base layout for this application 
 * @param {Array.<Component>} {children} - List of child component
 * @returns {Component}
 */
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
