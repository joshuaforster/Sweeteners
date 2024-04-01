import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import './App.css';
import SweetenerHeaders from "./Headers/SweetenerHeaders";
import Sweeteners from "./MainPages/Sweeteners";
import SweetenerInfo from "./MainPages/SweetenerInfo";
import SweetenersDetail from "./MainPages/SweetenerDetail";
import SafetyDosage from "./MainPages/SafetyDosage";
import Benefits from "./MainPages/Benefits";
import Approval from "./MainPages/approval";
import Myths from "./MainPages/Myths";
import Studies from "./MainPages/Studies";
import Context from "./MainPages/Context";
import Layout from "./Layout/layout";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Sweeteners />} />
          <Route path="/header" element={<SweetenerHeaders />}>
            <Route path=":id" element={<SweetenersDetail />} />
            <Route path=":id/general-info" element={<SweetenerInfo />} />
            <Route path=":id/safety-dosage" element={<SafetyDosage />} />
            <Route path=":id/benefits-uses" element={<Benefits />} />
            <Route path=":id/myths-facts" element={<Myths />} />
            <Route path=":id/studies-references" element={<Studies />} />
            <Route path=":id/comparisons-context" element={<Context />} />
            <Route path=":id/approval" element={<Approval />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
