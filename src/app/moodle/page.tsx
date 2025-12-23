"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MoodlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-300">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-8">
              <span className="font-semibold text-gray-900 text-base">BAU Moodle</span>
              <nav className="flex items-center gap-6 text-sm">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-200">Home</a>
                <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-3 font-medium">Dashboard</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-200">My courses</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-1.5 text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-110">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <button className="p-1.5 text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-110">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </button>
              <button className="flex items-center gap-1 px-2 py-1 text-gray-700 hover:bg-gray-100 rounded transition-all duration-200">
                <span className="text-sm font-medium">AJ</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="flex items-center gap-2 ml-4">
                <span className="text-sm text-gray-600">Edit mode</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-6 py-8">
        <h1 className="text-3xl font-normal text-gray-900 mb-8">Dashboard</h1>

        {/* Timeline Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Timeline</h2>
          <div className="flex items-center gap-4 mb-6">
            <select className="px-4 py-2 border border-gray-300 rounded text-sm bg-white hover:bg-gray-50 transition-all duration-200">
              <option>Next 7 days</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded text-sm bg-white hover:bg-gray-50 transition-all duration-200">
              <option>Sort by dates</option>
            </select>
            <input
              type="text"
              placeholder="Search by activity type or name"
              className="flex-1 px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
          </div>

          {/* No Activities */}
          <div className="bg-white border border-gray-200 rounded-lg p-12 flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <p className="text-gray-500 text-sm">No activities require action</p>
          </div>
        </div>

        {/* Recently Accessed Courses */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recently accessed courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Course 1 */}
            <a href="/moodle/life-cycle" className="group">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-32 bg-gradient-to-br from-teal-400 to-teal-600 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)`
                    }}></div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-blue-600 hover:underline mb-1 group-hover:text-blue-800 transition-colors">Life Cycle</h3>
                  <p className="text-xs text-gray-500">Medicine</p>
                </div>
              </Card>
            </a>

            {/* Course 2 */}
            <a href="/moodle/personal-health" className="group">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-32 bg-gradient-to-br from-purple-400 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)`
                    }}></div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-blue-600 hover:underline mb-1 group-hover:text-blue-800 transition-colors">Int. to Personal Health Fall 25 26</h3>
                  <p className="text-xs text-gray-500">Health Sciences</p>
                </div>
              </Card>
            </a>
          </div>
        </div>

        {/* Calendar Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Calendar</h2>
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <select className="px-4 py-2 border border-gray-300 rounded text-sm bg-white hover:bg-gray-50 transition-all duration-200">
                <option>All courses</option>
              </select>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-all duration-300 hover:scale-105">
                New event
              </Button>
            </div>

            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm transition-all duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                November
              </button>
              <h3 className="text-lg font-semibold">December 2025</h3>
              <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm transition-all duration-200">
                January
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="border border-gray-200 rounded">
              {/* Day Headers */}
              <div className="grid grid-cols-7 border-b border-gray-200">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <div key={day} className="p-3 text-center text-sm font-semibold text-gray-700 border-r border-gray-200 last:border-r-0">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7">
                {/* Week 1 */}
                {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                  <div key={`w1-${day}`} className="aspect-square p-2 border-r border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="text-sm text-gray-700">{day}</div>
                  </div>
                ))}

                {/* Week 2 */}
                {[8, 9, 10, 11, 12, 13, 14].map((day) => (
                  <div key={`w2-${day}`} className="aspect-square p-2 border-r border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="text-sm text-gray-700">{day}</div>
                  </div>
                ))}

                {/* Week 3 */}
                {[15, 16, 17, 18, 19, 20, 21].map((day) => (
                  <div key={`w3-${day}`} className={`aspect-square p-2 border-r border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer ${day === 15 ? 'relative' : ''}`}>
                    {day === 15 ? (
                      <div className="flex items-center justify-center h-full">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-sm text-white font-medium">{day}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="text-sm text-gray-700">{day}</div>
                    )}
                  </div>
                ))}

                {/* Week 4 */}
                {[22, 23, 24, 25, 26, 27, 28].map((day) => (
                  <div key={`w4-${day}`} className="aspect-square p-2 border-r border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="text-sm text-gray-700">{day}</div>
                  </div>
                ))}

                {/* Week 5 */}
                {[29, 30, 31].map((day) => (
                  <div key={`w5-${day}`} className="aspect-square p-2 border-r border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="text-sm text-gray-700">{day}</div>
                  </div>
                ))}
                {[1, 2, 3, 4].map((day) => (
                  <div key={`w5-next-${day}`} className="aspect-square p-2 border-r border-b border-gray-200 bg-gray-50">
                    <div className="text-sm text-gray-400">{day}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar Footer */}
            <div className="mt-4 text-sm text-blue-600 flex items-center gap-2">
              <a href="#" className="hover:underline transition-all duration-200">Full calendar</a>
              <span className="text-gray-400">•</span>
              <a href="#" className="hover:underline transition-all duration-200">Import or export calendars</a>
            </div>
          </Card>
        </div>

        {/* Help Button */}
        <button className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
          <span className="text-xl">?</span>
        </button>
      </main>
    </div>
  );
}
