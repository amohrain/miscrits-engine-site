export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-6">
      <h1 className="text-4xl font-semibold">Privacy Policy</h1>

      <p>Miscrits Engine does not collect or store personal user data.</p>

      <h2 className="text-2xl font-semibold mt-8">Screen Analysis</h2>

      <p>
        The application analyzes gameplay screen content using on-device OCR to
        detect battle information such as health values and damage numbers.
      </p>

      <p>All processing occurs locally on the user's device.</p>

      <h2 className="text-2xl font-semibold mt-8">Data Collection</h2>

      <p>
        No personal information, account credentials, or identifiable user data
        is collected.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Contact</h2>

      <p>For privacy questions please contact: your-email@example.com</p>
    </div>
  );
}
