export default function Guide() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-cyan-400">
          Miscrits Engine Guide
        </h1>

        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          Learn how to use Miscrits Engine for real-time damage tracking and
          accuracy prediction.
        </p>
      </div>

      {/* Video Embed */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-800">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/31nCt-gM6vU"
          title="Miscrits Engine Guide"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <p className="text-center text-slate-500 mt-6 text-sm">
        Pro tip: Set UI Zoom to max before starting the engine.
      </p>
    </div>
  );
}
