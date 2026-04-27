export default function Privacy() {
  const effectiveDate = "April 27, 2026";
  const contactEmail = "abhishek181920@gmail.com";

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-8 text-gray-200">
      <header>
        <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
        <p className="mt-2 text-sm opacity-50">Last Updated: {effectiveDate}</p>
      </header>

      <section>
        <p>
          Miscrits Engine ("we," "our," or "us") is committed to protecting your
          privacy. This policy explains how we handle information when you use
          our mobile application.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
          Data Collection & Usage
        </h2>
        <p>
          To provide features such as gem rewards and account synchronization,
          we use <strong>Firebase (Google LLC)</strong> for authentication.
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>
            <strong>Authentication Data:</strong> Email address and a unique
            User ID (UID). This is used to secure your rewards and sync
            progress.
          </li>
          <li>
            <strong>Device Identifiers:</strong> We collect the Google
            Advertising ID (AAID) via Google AdMob for advertising and analytics
            purposes.
          </li>
        </ul>
      </section>

      {/* NEW SECTION REQUIRED FOR ADMOB COMPLIANCE */}
      <section>
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
          Data Sharing
        </h2>
        <p>
          We do not sell your personal information. However, we share certain
          <strong> Device Identifiers</strong> with{" "}
          <strong>Google AdMob</strong> and its advertising partners to serve
          personalized ads, limit ad frequency, and prevent fraudulent activity.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
          Screen Analysis (OCR)
        </h2>
        <p>
          The application analyzes gameplay screen content using on-device OCR
          to detect battle information such as health values and damage numbers.
        </p>
        <p className="mt-2">
          <strong>All processing occurs locally on the user's device.</strong>{" "}
          We do not record, store, or transmit screen content or images to our
          servers.
        </p>
      </section>

      {/* EXPANDED FOR GOOGLE PLAY ACCOUNT DELETION COMPLIANCE */}
      <section id="deletion">
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
          Account & Data Deletion
        </h2>
        <p>
          We respect your right to control your data. You can request the
          permanent deletion of your account and all associated data (including
          email, UID, and game progress) through either of the following
          methods:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>
            <strong>In-App:</strong> Navigate to the Settings menu and select
            "Delete Account."
          </li>
          <li>
            <strong>Email Request:</strong> Send an email to
            <a href={`mailto:${contactEmail}`} className="text-blue-400">
              {" "}
              {contactEmail}{" "}
            </a>
            with the subject "Account Deletion Request." Please include your
            registered email.
          </li>
        </ul>
        <p className="mt-4 italic">
          Once requested, your data will be permanently deleted from our
          databases within 7 business days.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Contact</h2>
        <p>
          For privacy questions or concerns, please contact:{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="text-blue-400 hover:underline"
          >
            {contactEmail}
          </a>
        </p>
      </section>
    </div>
  );
}
