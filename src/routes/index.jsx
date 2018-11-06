import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import Dashboard from "layouts/Dashboard/Dashboard.jsx";

var indexRoutes = [
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/dashboard", name: "DashboardPage", component: Dashboard }
];

export default indexRoutes;