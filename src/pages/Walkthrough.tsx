import WalkthroughStep from "../components/WalkthroughStep";

export default function Walkthrough() {
  const steps = [
    {
      step: 1,
      title: "Start the Engine",
      description:
        "Open Miscrits Engine and tap the gear icon to start it. Make sure you have already granted the 'Display over other apps' permission. The Miscrits game should already be running before starting the engine.",
      //   image: "/walkthrough/start-engine.jpg",
    },
    {
      step: 2,
      title: "Display Over Miscrits",
      description:
        "When the screen casting dialog appears, choose 'A single app' and select the Miscrits application. Do not choose full screen casting, as the engine needs to analyze only the Miscrits window for accurate results.",
      //   image: "/walkthrough/display-over-miscrits.jpg",
    },
    {
      step: 3,
      title: "Enable Drag Mode",
      description:
        "Open the three-dot menu and enable Drag Mode. This allows you to reposition engine elements. For best visibility, move them to the edges of the screen.",
      image: "/walkthrough/enable-drag-mode.jpg",
    },
    {
      step: 4,
      title: "Set Maximum UI Zoom",
      description:
        "Open Miscrits settings, go to the Display tab, and set the UI Zoom Scale to the maximum value. This improves the engine's ability to read information from the screen.",
      image: "/walkthrough/set-ui-zoom.jpg",
    },
    {
      step: 5,
      title: "Calibrate the Engine",
      description:
        "Enable Calibration Mode from the three-dot menu. Ensure the detection boxes and circles match their exact positions in the battle interface. If needed, adjust their placement using the calibration controls. You can spectate a battle, fight bots, or join an arena match while calibrating.",
      image: "/walkthrough/calibrate-engine.jpg",
    },
    {
      step: 6,
      title: "Open Training Mode Calibration",
      description:
        "Press the 'Mode' button to configure Training Mode calibration. Open your Miscrit in Training Mode and switch the display to show bonuses instead of stats.",
      image: "/walkthrough/training-calibration.jpg",
    },
    {
      step: 7,
      title: "Run Calibration Tests",
      description:
        "Run the calibration test to verify that all detection boxes are aligned correctly. Proper calibration ensures smoother battle tracking and more accurate results.",
      //   image: "/walkthrough/run-calibration-test.jpg",
    },
    {
      step: 8,
      title: "Open a Miscrit in Training",
      description:
        "In Training Mode, open the Miscrit you want to add to your team and switch the display to the Bonuses tab.",
      //   image: "/walkthrough/open-miscrit-training.jpg",
    },
    {
      step: 9,
      title: "Add a Miscrit to Your Team",
      description:
        "Open the team panel using the 'P' bubble and tap the '+' button. The engine will scan the currently open Miscrit.",
      //   image: "/walkthrough/add-miscrit-team.jpg",
    },
    {
      step: 10,
      title: "Confirm Miscrit and Relics",
      description:
        "A confirmation dialog will appear. Verify the detected Miscrit and relics. If needed, adjust them before continuing.",
      image: "/walkthrough/confirm-miscrit-relics.jpg",
    },
    {
      step: 11,
      title: "Confirm Stat Bonuses",
      description:
        "Review the detected stat bonuses. You can adjust them using the '+' and '−' buttons. Tapping a stat also allows you to change its color.",
      image: "/walkthrough/confirm-bonuses.jpg",
    },
    {
      step: 12,
      title: "Save the Miscrit",
      description:
        "Once relics and bonuses are verified, tap 'Save' to create the Miscrit. Make sure the health value matches your actual Miscrit before saving.",
      //   image: "/walkthrough/save-miscrit.jpg",
    },
    {
      step: 13,
      title: "Save and Load Teams",
      description:
        "Use the Save Team and Load Team options in the three-dot menu to manage your team configurations.",
      //   image: "/walkthrough/save-load-teams.jpg",
    },
    {
      step: 14,
      title: "Start a Battle",
      description:
        "Make sure your team contains four Miscrits and that Auto Mode is enabled in the three-dot menu before starting a battle.",
      //   image: "/walkthrough/start-battle.jpg",
    },
    {
      step: 15,
      title: "Apply Hits and Misses",
      description:
        "During battle, the engine continuously infers damage values. Confirm hits and misses when prompted. Skipping a few confirmations will not significantly affect results.",
      image: "/walkthrough/apply-hits.jpg",
    },
    {
      step: 16,
      title: "View Enemy Stat Inference",
      description:
        "Icons appearing on enemy Miscrits indicate that the engine has inferred those stats with confidence.",
      image: "/walkthrough/enemy-stat-inference.jpg",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      {/* Header */}

      <div className="text-center mb-16">
        <h1 className="text-4xl font-semibold text-cyan-400">
          How Miscrits Engine Works
        </h1>

        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          Follow these steps to use the engine and understand battle analysis.
        </p>
      </div>

      {/* Steps */}

      <div className="space-y-16">
        {steps.map((s) => (
          <WalkthroughStep
            key={s.step}
            step={s.step}
            title={s.title}
            description={s.description}
            image={s.image}
          />
        ))}
      </div>
    </div>
  );
}
