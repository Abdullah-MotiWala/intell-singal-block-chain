import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyUser from "./pages/VerifyUser";
import PanelLayout from "./components/PanelComponents/PanelLayout";
import Dashboard from "./pages/Dashboard";
import Plan from "./pages/Plan";
import { Toaster } from "react-hot-toast";
import History from "./pages/History";
import PageNotFound from "./pages/pageNotFound";
import Setting from "./pages/Setting";
import UnderDevelopment from "./pages/UnderDevelopment";
import ActivePackage from "./pages/ActivePackage";
import ScrollToTopButton from "./components/ScrollToTopButton";
import OTP from "./pages/OTP";
function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <main className="w-full flex flex-col items-center bg-gr">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/login" element={<Login />} />
              <Route path="/otp" element={<OTP />} />
              <Route path="/forget-password/" element={<ForgetPassword />} />

              <Route path="/INSIG" element={<UnderDevelopment />} />
              <Route path="/Ai_Platform" element={<UnderDevelopment />} />
              <Route
                path="/update-password/:token"
                element={<UpdatePassword />}
              />
              <Route path="/verify-user/:token" element={<VerifyUser />} />
              <Route path="/panel" element={<PanelLayout />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="plan" element={<Plan />} />
                <Route path="history" element={<History />} />
                <Route path="setting" element={<Setting />} />
                <Route path="packages" element={<ActivePackage />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
              <Route path="*" element={<UnderDevelopment />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
      <div>
        <ScrollToTopButton />
        <Toaster />
      </div>
    </>
  );
}

export default App;
