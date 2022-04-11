import { Routes , Route, BrowserRouter  } from "react-router-dom";

const AppRoutes = () => {
  return (
    
      <Routes>
        <Route
          path="/v/sales_dashboard/index"
          element={<div className="alert alert-primary" role="alert"> Welcome to Sales Dashboard</div>}
        />
        <Route
          path="/"
          element={<div className="alert alert-primary" role="alert"> Welcome to Home Page</div>}
        />
        <Route
          path="/v/forecast/index/"
          element={<div className="alert alert-primary" role="alert"> Welcome to Sales Dashboard</div>}
        />
        <Route path="*" element={<div className="alert alert-warning" role="alert"> Page under construction</div>} />
      </Routes>
  );
};

export default AppRoutes;
