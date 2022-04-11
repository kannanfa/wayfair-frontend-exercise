import "App.css";
import "style";
import "bootstrap/dist/js/bootstrap.js";
import { ErrorBoundary } from "common/components";
import { Provider } from "react-redux";
import { Storage } from "store/index";
import {App} from "modules/index"
import AppRoutes from "modules/routes";
import { BrowserRouter  } from "react-router-dom";

function bootstrap() {
  return (
    <div className="container-fluid">
      <Provider store={Storage}>
        <ErrorBoundary>
        <BrowserRouter>
            <App> 
              <AppRoutes></AppRoutes>
            </App>
          </BrowserRouter>
        </ErrorBoundary>
      </Provider>
    </div>
  );
}

export default bootstrap;
