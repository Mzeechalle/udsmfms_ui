import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import "./Assets/css/styles.css";
import { useAuth } from "./Authentication/auth-context";

const TITLE = "UDSM-FMS";
const preloading = () => (
  <div class="lds-dual-ring"></div>
);

const PanelLayout = React.lazy(() => import("./Views/PanelLayout"));
const Login = React.lazy(() => import("./Views/Login"));

const TestingView = React.lazy(() => import("./Views/TestingView"));
const Dashboard = React.lazy(() => import("./Components/Dashboard"));

function App() {

  const { isLoggedIn } = useAuth();
  return (
    <div className="App">
      <>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
      </>
      <HashRouter>
        <Suspense fallback={preloading()}>
          <Switch>
            <Route
              path="/"
              name="app"
              render={() => {
                if(isLoggedIn || localStorage.getItem("isLoggedIn")){
                    return <PanelLayout/>;
                }else{
                    return <Login/>
                }
            } }
            />
          </Switch>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
