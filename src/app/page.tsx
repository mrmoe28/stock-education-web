export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Stock Education Web
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          Learn about stock trading and investment strategies
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/signin"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Sign In
          </a>
          <a
            href="/signin"
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
          >
            Sign Up
          </a>
        </div>
      </div>
    </main>
  )
}