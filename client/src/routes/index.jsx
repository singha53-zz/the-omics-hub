import LandingPage from "views/LandingPage.jsx";
import LoginPage from "views/LoginPage.jsx";

var indexRoutes = [
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "/login-page", name: "LoginPage", component: LoginPage }
];

export default indexRoutes;