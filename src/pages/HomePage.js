import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../navigation/routes";

// pages
import Presentation from "./Presentation";
import Upgrade from "./Upgrade";
import DashboardOverview from "./dashboard/DashboardOverview";

import InvoiceMaster from "./Invoice/InvoiceMaster";
import InvoiceList from "./Invoice/InvoiceList";

import PaymentModule from "./PaymentModule";
import Signin from "./examples/Signin";
import Signup from "./examples/Signup";
import ForgotPassword from "./examples/ForgotPassword";
import ResetPassword from "./examples/ResetPassword";
import Lock from "./examples/Lock";
import NotFoundPage from "./examples/NotFound";
import ServerError from "./examples/ServerError";
import AddYear from "./Years/AddYear";
import YearList from "./Years/YearList";
import EditYear from "./Years/EditYear";
import AddBank from "./Bank/AddBank";
import AddCompany from "./company/AddCompany";



// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          {" "}
          <Preloader show={loaded ? false : true} /> <Component {...props} />{" "}
        </>
      )}
    />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem("settingsVisible") === "false" ? false : true;
  };

  const [showSettings, setShowSettings] = useState(
    localStorageIsSettingsVisible
  );

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem("settingsVisible", !showSettings);
  };

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Preloader show={loaded ? false : true} />
          <Sidebar />

          <main className="content">
            <Navbar />
            <Component {...props} />
            <Footer
              toggleSettings={toggleSettings}
              showSettings={showSettings}
            />
          </main>
        </>
      )}
    />
  );
};

export default () => (
  <Switch>
    <RouteWithLoader
      exact
      path={Routes.Presentation.path}
      component={Presentation}
    />
    <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
    <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
    <RouteWithLoader
      exact
      path={Routes.ForgotPassword.path}
      component={ForgotPassword}
    />
    <RouteWithLoader
      exact
      path={Routes.ResetPassword.path}
      component={ResetPassword}
    />
    <RouteWithLoader exact path={Routes.Lock.path} component={Lock} />
    <RouteWithLoader
      exact
      path={Routes.NotFound.path}
      component={NotFoundPage}
    />
    <RouteWithLoader
      exact
      path={Routes.ServerError.path}
      component={ServerError}
    />

    {/* pages */}
    <RouteWithSidebar
      exact
      path={Routes.DashboardOverview.path}
      component={DashboardOverview}
    />
    <RouteWithSidebar exact path={Routes.Upgrade.path} component={Upgrade} />
  
    <RouteWithSidebar
      exact
      path={Routes.InvoiceMaster.path}
      component={InvoiceMaster}
    />

    <RouteWithSidebar
      exact
      path={Routes.InvoiceList.path}
      component={InvoiceList}
    />

    <RouteWithSidebar
      exact
      path={Routes.PaymentModule.path}
      component={PaymentModule}
    />
    <RouteWithSidebar exact path={Routes.AddYear.path} component={AddYear} />
    <RouteWithSidebar exact path={Routes.YearList.path} component={YearList} />
    <RouteWithSidebar exact path={Routes.EditYear.path} component={EditYear} />
    <RouteWithSidebar exact path={Routes.AddBank.path} component={AddBank} />
    <RouteWithSidebar
      exact
      path={Routes.AddCompany.path}
      component={AddCompany}
    />
    <Redirect to={Routes.NotFound.path} />
  </Switch>
);
