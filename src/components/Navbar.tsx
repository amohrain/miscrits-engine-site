import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="md:block hidden font-semibold text-lg tracking-wide"
        >
          MISCRITS ENGINE
        </Link>

        <div className="flex gap-6 text-sm text-slate-300">
          <Link to="/" className="hover:text-cyan-400">
            Home
          </Link>

          <Link to="/privacy" className="hover:text-cyan-400">
            Privacy
          </Link>

          <Link to="/support" className="hover:text-cyan-400">
            Support
          </Link>

          <Link to="/test" className="hover:text-cyan-400">
            Testing
          </Link>
          <Link to="/walkthrough" className="hover:text-cyan-400">
            Guide
          </Link>
        </div>
      </div>
    </nav>
  );
}
