"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Check for exact credentials
    if (username === "202600629" && password === "A123j456") {
      router.push("/home");
    } else {
      setError("Invalid ID or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1764793278756-437ae7c70375?q=80&w=2261&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
      </div>

      {/* Sign Up Link */}
      <div className="absolute top-6 right-8 z-20">
        <a href="#" className="text-white font-medium transition-all duration-200 hover:scale-110">
          Sign Up
        </a>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              BAU Portal
            </h1>
            <p className="text-white text-sm drop-shadow-md">Sign in to start your session</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="ID or Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full h-12 px-4 pr-12 bg-white/90 backdrop-blur-sm border-0 rounded text-gray-800 placeholder:text-gray-500 transition-all duration-200 focus:scale-105"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>

            <div className="relative">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full h-12 px-4 pr-12 bg-white/90 backdrop-blur-sm border-0 rounded text-gray-800 placeholder:text-gray-500 transition-all duration-200 focus:scale-105"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z"/>
                </svg>
              </div>
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Let me in
            </Button>
          </form>
        </div>
      </div>

      {/* Footer Links */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white">
            <a href="#" className="transition-all duration-200 hover:scale-105">Published Grades</a>
            <a href="#" className="transition-all duration-200 hover:scale-105">Course Offering</a>
            <a href="#" className="transition-all duration-200 hover:scale-105">Registration Time</a>
            <a href="#" className="transition-all duration-200 hover:scale-105">Register</a>
            <a href="#" className="transition-all duration-200 hover:scale-105">Calendar</a>
            <a href="#" className="transition-all duration-200 hover:scale-105">Forgot my password</a>
            <a href="#" className="transition-all duration-200 hover:scale-105">Support</a>
          </div>
        </div>
      </div>
    </div>
  );
}
