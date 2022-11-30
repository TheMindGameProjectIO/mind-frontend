import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import HomePage from "./pages/homepage/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { authRoutes } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={authRoutes.index}>
          <Route index element={<LoginPage />} />
          <Route path={authRoutes.signup} element={<SignupPage />} />
          <Route path={authRoutes.forgotPassword} element={<ForgotPasswordPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;