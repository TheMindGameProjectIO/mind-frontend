import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import HomePage from "./pages/homepage/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { authRoutes, publicRoutes, privateRoutes } from "./routes";
import GamePage from "./pages/GamePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={publicRoutes.index} element={<HomePage />} />
        <Route path={authRoutes.index}>
          <Route index element={<LoginPage />} />
          <Route path={authRoutes.signup} element={<SignupPage />} />
          <Route path={authRoutes.forgotPassword} element={<ForgotPasswordPage />} />
        </Route>
        <Route path={privateRoutes.game} element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;