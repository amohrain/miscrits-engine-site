import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";
import Terms from "./pages/Terms";
import Testers from "./pages/Testers";
import Walkthrough from "./pages/Guide";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white flex flex-col">
        <Navbar />

        <main className="flex-1 engine-grid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/support" element={<Support />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/testers" element={<Testers />} />
            <Route path="/walkthrough" element={<Walkthrough />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
