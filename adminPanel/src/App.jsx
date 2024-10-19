import Layout from "./comman/Layout";
import Dashboard from "./page/Dashboard";
import LoginPage from "./page/LoginPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route element={<Layout />}>
          <Route path="Dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
