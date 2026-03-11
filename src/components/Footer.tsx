import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-engineAccent/20 bg-enginePanel">
      <div className="max-w-6xl mx-auto px-6 py-8 flex justify-between text-sm text-white/60">
        <p>© {new Date().getFullYear()} Miscrits Engine</p>

        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-engineAccent">
            Privacy
          </Link>

          <Link to="/support" className="hover:text-engineAccent">
            Support
          </Link>

          <Link to="/terms" className="hover:text-engineAccent">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
