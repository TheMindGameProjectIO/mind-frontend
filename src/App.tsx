import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import HomePage from "./pages/homepage/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { authRoutes, privateRoutes, publicRoutes } from "./routes";
import ValidateRoute from "./components/ValidateRoute";
import NotFoundPage from "./pages/NotFoundPage";
import LobbiesPage from "./pages/LobbiesPage";
import AuthLayout from "./components/layout/AuthLayout";

// TODO: This is a temporary solution. We need to create auth store or context and keep this state there.
export const auth: boolean = true;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes: all users can get to these routes */}
        <Route path={publicRoutes.index} element={<HomePage />} />
        <Route path="*" element={<Navigate to={publicRoutes.error} />} />
        <Route path={publicRoutes.error} element={<NotFoundPage />} />

        {/* Auth routes: only the users that are not authorized can get to these routes */}
        <Route element={<ValidateRoute condition={!auth} navigate={publicRoutes.error} />}>
          <Route path={authRoutes.index} element={<AuthLayout />}>
            <Route index path={authRoutes.login()} element={<LoginPage />} />
            <Route path={authRoutes.signup()} element={<SignupPage />} />
            <Route path={authRoutes.forgotPassword()} element={<ForgotPasswordPage />} />
          </Route>
        </Route>

        {/* Private routes: only the users that are authorized can get to these routes */}
        <Route element={<ValidateRoute condition={auth} navigate={publicRoutes.error} />}>
          <Route path={privateRoutes.lobbies} element={<LobbiesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
