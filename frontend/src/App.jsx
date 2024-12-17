import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ConnectUs from "./pages/ConnectUs";
import WocRegister from "./pages/WocRegister";
import UnauthorizedAccess from "./components/UnauthorizedAccess";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connect-us" element={<ConnectUs />} />
        <Route path="/woc-register" element={<WocRegister />} />
        <Route path="/login" element={<UnauthorizedAccess />} />
      </Routes>
    </div>
  )
}

export default App