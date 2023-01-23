import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import HomePage from "./pages/homepage/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { authRoutes, privateRoutes, publicRoutes } from "./routes";
import ValidateRoute from "./components/ValidateRoute";
import NotFoundPage from "./pages/NotFoundPage";
import AuthLayout from "./components/layout/AuthLayout";
import LobbiesLayout from "./components/layout/LobbiesLayout";
import { useAppSelector } from "./redux/hooks";
import { selectIsAuth } from "./redux/slices/authSlice";
import BasicLayout from "./components/layout/BasicLayout";
import LobbiesTitleProvider from "./contexts/LobbiesTitleProvider";
import CreateLobbyPage from "./pages/CreateLobbyPage";
import GamePage from "./pages/GamePage";
import LobbyPage from "./pages/LobbyPage";
import { QueryClientProvider, QueryClient } from "react-query";
import UserLayout from "./components/layout/UserLayout";

const queryClient = new QueryClient();

const App = () => {
  /**
   * @description
   * isAuth is a boolean that indicates if the user is logged in or not
   */
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Public  : all users can get to these routes */}
          <Route element={<BasicLayout header={false} />}>
            <Route path={publicRoutes.index} element={<HomePage />} />
            <Route path="*" element={<Navigate to={publicRoutes.error} />} />
            <Route path={publicRoutes.error} element={<NotFoundPage />} />
          </Route>

          {/* Auth routes: only the users that are not authorized can get to these routes */}
          <Route element={<ValidateRoute condition={!isAuth} navigate={authRoutes.login} />}>
            <Route path={authRoutes.index} element={<AuthLayout />}>
              <Route index path={authRoutes.login} element={<LoginPage />} />
              <Route path={authRoutes.signup} element={<SignupPage />} />
              <Route path={authRoutes.forgotPassword} element={<ForgotPasswordPage />} />
            </Route>
            {/* Private routes: only the users that are authorized can get to these routes */}
          </Route>
          <Route element={<ValidateRoute condition={isAuth} navigate={authRoutes.login} />}>
            <Route element={<UserLayout />}>
              <Route
                path={privateRoutes.lobbiesRoutes.index}
                element={
                  <LobbiesTitleProvider>
                    <LobbiesLayout />
                  </LobbiesTitleProvider>
                }
              >
                <Route path={privateRoutes.lobbiesRoutes.create} element={<CreateLobbyPage />} />
                <Route path={privateRoutes.lobbiesRoutes.lobby + ":id"} element={<LobbyPage />} />
              </Route>
              <Route path={privateRoutes.game()} element={<GamePage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
