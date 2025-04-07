export default function Maintenance() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">BethesdaChildCareCenter</h1>
        <p className="text-lg text-gray-700">
          Hey! 👋 The site is currently under <span className="font-semibold text-purple-600">maintenance</span>.
        </p>
        <p className="text-md text-gray-600 mt-2">Kindly check back later. Thank you for your patience.</p>
        <div className="mt-6">
          <span className="inline-block animate-bounce text-purple-500 text-3xl">🔧</span>
        </div>
      </div>
    </div>
  );
}
