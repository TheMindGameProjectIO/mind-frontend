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
import LobbiesLayout from "./components/layout/LobbiesLayout";
import { useAppSelector } from "./redux/hooks";
import { selectIsAuth } from "./redux/slices/authSlice";
import BasicLayout from "./components/layout/BasicLayout";

const App = () => {
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public  : all users can get to these routes */}
        <Route element={<BasicLayout header={false} />}>
          <Route path={publicRoutes.index} element={<HomePage />} />
          <Route path="*" element={<Navigate to={publicRoutes.error} />} />
          <Route path={publicRoutes.error} element={<NotFoundPage />} />
        </Route>

        {/* Auth routes: only the users that are not authorized can get to these routes */}
        <Route element={<ValidateRoute condition={!isAuth} navigate={publicRoutes.error} />}>
          <Route path={authRoutes.index} element={<AuthLayout />}>
            <Route index path={authRoutes.login()} element={<LoginPage />} />
            <Route path={authRoutes.signup()} element={<SignupPage />} />
            <Route path={authRoutes.forgotPassword()} element={<ForgotPasswordPage />} />
          </Route>
        </Route>

        {/* Private routes: only the users that are authorized can get to these routes */}
        <Route element={<ValidateRoute condition={isAuth} navigate={publicRoutes.error} />}>
          <Route element={<LobbiesLayout />}>
            <Route path={privateRoutes.lobbies} element={<LobbiesPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
