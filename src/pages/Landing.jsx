import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import LinkButton from "@/components/ui/LinkButton";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">

      {/* Hero Section */}
      <section className="relative isolate px-6 pt-14 lg:px-8 py-20 sm:py-32 lg:py-40">
        {/* Gradient Shapes Top */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-32 -z-10 transform-gpu overflow-hidden blur-2xl sm:-top-64"
        >
          <div
            style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
            className="relative left-[50%] aspect-[1155/678] w-[72rem] -translate-x-1/2 rotate-30 bg-gradient-to-tr from-pink-400 to-indigo-500 opacity-30"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex justify-between items-center max-w-7xl mx-auto mb-12">
          <h1 className="text-3xl font-bold text-white">TransitIQ</h1>
          <nav className="flex gap-6 text-lg font-medium">
            <a href="/" className="hover:text-blue-400">Home</a>
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="/login" className="hover:text-blue-400">Login</a>
          </nav>
        </div>
  {/* Announcement Bar */}
  <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              Announcing our new AI itinerary planner!{' '}
              <a href="#" className="font-semibold text-indigo-400">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

        {/* Hero Text & Buttons */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Smart Bus Transportation & Itinerary Planning
          </h1>
          <p className="mt-4 text-gray-300 text-lg sm:text-xl">
            AI-powered route intelligence, smart trip planning, and real-time travel assistance for locals and tourists.
          </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
            <LinkButton to="/login" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Continue as User
            </LinkButton>
            <LinkButton to="/login" size="lg" variant="secondary">
              Admin / Staff Login
            </LinkButton>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-8rem)] -z-10 transform-gpu overflow-hidden blur-2xl sm:top-[calc(100%-16rem)]"
        >
          <div
            style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
            className="relative left-[50%] aspect-[1155/678] w-[72rem] -translate-x-1/2 bg-gradient-to-tr from-pink-400 to-indigo-500 opacity-30"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-800 py-12 px-8">
        <h3 className="text-3xl font-bold text-center mb-6">About TransitIQ</h3>
        <p className="text-center max-w-2xl mx-auto text-gray-300">
          TransitIQ integrates AI to enhance public transportation with real-time delay prediction, smart trip planning, and personalized guidance.
        </p>

        {/* Feature Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gray-700">
            <CardHeader>
              <CardTitle>AI Delay Prediction</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Predict bus delays in real-time and plan your trips better.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-gray-700">
            <CardHeader>
              <CardTitle>Itinerary Planner</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Get day-wise travel plans and suggestions tailored to your preferences.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-gray-700">
            <CardHeader>
              <CardTitle>Rewards & Loyalty</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Earn points for bookings, feedback, and frequent travel.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
