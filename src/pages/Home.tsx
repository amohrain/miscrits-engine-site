import { Link } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";
import { Activity, ScanText, Sparkles, Cpu, Settings } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* HERO */}

      <section className="py-24 flex flex-col items-center text-center">
        {/* Rotating Gear */}

        <div className="mb-10">
          <Settings
            size={180}
            className="
              text-cyan-400
              animate-slow-spin
              drop-shadow-[0_0_25px_rgba(34,211,238,0.8)]
            "
            strokeWidth={1.6}
          />
        </div>

        {/* Title */}

        <h1 className="text-4xl sm:text-5xl font-bold text-cyan-400 tracking-wide">
          MISCRITS ENGINE
        </h1>

        <p className="mt-6 text-slate-400 max-w-xl mx-auto">
          A battle companion for World of Miscrits. Analyze combat data, detect
          damage, and gain insights into abilities in real time.
        </p>

        <div className="mt-10">
          <Link
            to="/testers"
            className="bg-cyan-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-cyan-300 transition"
          >
            Join Beta Testing
          </Link>
        </div>
      </section>

      {/* FEATURES */}

      <section className="py-16">
        <h2 className="text-3xl text-center font-semibold mb-12">
          Engine Modules
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Activity size={20} />}
            title="Damage Tracking"
            description="Track battle damage and health changes in real time."
          />

          <FeatureCard
            icon={<ScanText size={20} />}
            title="OCR Parsing"
            description="Reads battle text directly from gameplay using OCR."
          />

          <FeatureCard
            icon={<Sparkles size={20} />}
            title="Ability Insight"
            description="Understand Miscrit abilities and battle effects."
          />

          <FeatureCard
            icon={<Cpu size={20} />}
            title="Local Processing"
            description="All analysis runs locally on your device."
          />
        </div>
      </section>
    </div>
  );
}
