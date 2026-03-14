import { Users, Download } from "lucide-react";

export default function Testers() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      {/* Header */}

      <div className="text-center">
        <h1 className="text-4xl font-semibold text-cyan-400">
          Join the Miscrits Engine Beta Testing
        </h1>

        <p className="text-slate-400 mt-4 max-w-xl mx-auto">
          Help test the app before public release. Follow the steps below to
          join the testing program and install the app.
        </p>
      </div>

      {/* Steps */}

      <div className="mt-16 space-y-10">
        {/* Step 1 */}

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <Users className="text-cyan-400" size={22} />

            <h2 className="text-xl font-semibold">
              Step 1 — Join the Tester Group
            </h2>
          </div>

          <p className="text-slate-400 mb-6">
            Join the Google Group used to manage test access.
          </p>

          <a
            href="https://groups.google.com/g/miscrits-engine-testing"
            target="_blank"
            className="inline-block bg-cyan-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-cyan-300 transition"
          >
            Join Tester Group
          </a>
        </div>

        {/* Step 2 */}

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <Download className="text-cyan-400" size={22} />

            <h2 className="text-xl font-semibold">
              Step 2 — Install the Test App
            </h2>
          </div>

          <p className="text-slate-400 mb-6">
            After joining the group, use the link below to access the testing
            version of Miscrits Engine on Google Play.
          </p>

          <a
            href="https://play.google.com/store/apps/details?id=com.amohrain.miscritsengine"
            target="_blank"
            className="inline-block bg-cyan-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-cyan-300 transition"
          >
            Install Test App
          </a>
        </div>
      </div>

      {/* Note */}

      <p className="text-slate-500 text-sm text-center mt-12">
        Make sure you are logged into Google Play with the same email used to
        join the tester group.
      </p>
    </div>
  );
}
