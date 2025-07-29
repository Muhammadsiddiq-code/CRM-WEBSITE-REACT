// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
// import Overview from "./pages/Overview";
import Analytics from "./pages/Analytics";
import Ecommerce from "./pages/Ecommerce";
import Crypto from "./pages/Crypto";
import Account from "./pages/Account";
import Chart1 from "./ui/Chart1";
// qolgan sahifalar...

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ padding: "20px", width: "100%" }}>
          <Routes>
            {/* <Route path="/overview" element={<Overview />} /> */}
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/account" element={<Account />} />
            {/* qolgan route'lar ham shu tarzda */}
          </Routes>
        </div>
      </div>
    </Router>

  );
};

export default App;
