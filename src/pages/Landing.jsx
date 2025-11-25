import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">TransitIQ</h1>
        <div className="flex gap-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
          <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-24 px-4">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Smart Bus Transportation for Sri Lanka
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl">
          AI-powered route intelligence, trip planning, and real-time travel assistance.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            to="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Continue as User
          </Link>

          <Link
            to="/login"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
          >
            Admin / Staff Login
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mt-24 bg-gray-100 py-16 px-8">
        <h3 className="text-3xl font-bold text-center mb-6">About TransitIQ</h3>
        <p className="text-center max-w-2xl mx-auto text-gray-700">
          TransitIQ integrates AI to enhance public transportation by providing 
          real-time delay prediction, smart trip planning, and personalized 
          travel guidance for both local passengers and tourists.
        </p>
      </section>
    </div>
  );
}
