interface Props {
  step: number;
  title: string;
  description: string;
  image?: string;
}

export default function WalkthroughStep({
  step,
  title,
  description,
  image,
}: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
      {/* Image */}
      {image && (
        <div className="mb-6">
          <img
            src={image}
            alt={title}
            className="rounded-md w-full border border-slate-800"
          />
        </div>
      )}

      {/* Step Header */}

      <div className="flex items-center gap-3 mb-4">
        <div className="bg-cyan-400 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center">
          {step}
        </div>

        <h3 className="text-xl font-semibold text-cyan-400">{title}</h3>
      </div>

      {/* Description */}

      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}
