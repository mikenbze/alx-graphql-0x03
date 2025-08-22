// pages/sentry-example-page.tsx
import { NextPage } from "next";

const SentryExamplePage: NextPage = () => {
  const handleClick = () => {
    // This will deliberately throw an error
    throw new Error("Sentry Frontend Test Error ??");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-red-600 mb-4">
        Sentry Example Page
      </h1>
      <p className="mb-6 text-gray-700">
        Click the button below to throw a test error and send it to Sentry.
      </p>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        Break Things ??
      </button>
    </div>
  );
};

export default SentryExamplePage;
