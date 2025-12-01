import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LinkButton from "@/components/ui/LinkButton";

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-900 relative isolate flex flex-col items-center">

      {/* Gradient Top */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[140rem] -translate-x-1/2 rotate-30 bg-gradient-to-tr from-pink-400 to-indigo-500 opacity-30"
        />
      </div>

      {/* Top Navigation – same as Landing */}
      <div className="flex justify-between items-center w-full max-w-7xl px-8 py-6">
        <h1 className="text-3xl font-bold text-white">TransitIQ</h1>
        <nav className="flex gap-8">
          <a href="/" className="text-white text-lg font-medium hover:text-blue-400">Home</a>
          <a href="#about" className="text-white text-lg font-medium hover:text-blue-400">About</a>
          <a href="/login" className="text-blue-400 text-lg font-medium">Login</a>
        </nav>
      </div>

      {/* Login Card */}
      <Card className="w-full max-w-md mt-24 bg-gray-800/60 backdrop-blur-xl border border-white/10 shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-3xl text-white">Login</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <Input type="email" placeholder="Enter your email" className="bg-gray-700 text-white border-gray-600" />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Password</label>
            <Input
              type="password"
              placeholder="Enter your password"
              className="bg-gray-700 text-white border-gray-600"
            />
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6">
            Login
          </Button>

          <p className="text-center text-gray-400 text-sm">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-400 hover:underline">
              Register
            </a>
          </p>
        </CardContent>
      </Card>

      {/* Gradient Bottom */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[140rem] -translate-x-1/2 bg-gradient-to-tr from-pink-400 to-indigo-500 opacity-30"
        />
      </div>
    </div>
  );
}
