"use client";

import { useState } from "react";

export default function PersonalHealthPage() {
  const [generalOpen, setGeneralOpen] = useState(true);
  const [units1to4Open, setUnits1to4Open] = useState(false);
  const [units5to8Open, setUnits5to8Open] = useState(false);
  const [units9to11Open, setUnits9to11Open] = useState(false);
  const [topic4Open, setTopic4Open] = useState(false);
  const [midterm1Open, setMidterm1Open] = useState(false);
  const [midterm2Open, setMidterm2Open] = useState(false);
  const [finalOpen, setFinalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-300">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-8">
              <span className="font-semibold text-gray-900 text-base">BAU Moodle</span>
              <nav className="flex items-center gap-6 text-sm">
                <a href="/moodle" className="text-gray-600 hover:text-gray-900 transition-all duration-200">Home</a>
                <a href="/moodle" className="text-gray-600 hover:text-gray-900 transition-all duration-200">Dashboard</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-200">My courses</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-1.5 text-gray-600 hover:text-gray-900 transition-all duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <button className="p-1.5 text-gray-600 hover:text-gray-900 transition-all duration-200">
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
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex max-w-[1600px] mx-auto">
        {/* Left Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-4">
            {/* Close button */}
            <div className="flex items-center justify-between mb-4">
              <button className="text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </button>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              {/* General Section */}
              <div>
                <button
                  onClick={() => setGeneralOpen(!generalOpen)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded transition-all duration-200 ${
                    generalOpen ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span>General</span>
                  <svg className={`w-4 h-4 transition-transform ${generalOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {generalOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200">Announcements</a>
                    <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200">Course resources</a>
                  </div>
                )}
              </div>

              {/* Units 1 to 4 */}
              <div>
                <button
                  onClick={() => setUnits1to4Open(!units1to4Open)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200"
                >
                  <span>Units 1 to 4</span>
                  <svg className={`w-4 h-4 transition-transform ${units1to4Open ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {units1to4Open && (
                  <div className="ml-4 mt-1 space-y-1">
                    <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200">Units 1 to 4</a>
                  </div>
                )}
              </div>

              {/* Units 5 to 8 */}
              <div>
                <button
                  onClick={() => setUnits5to8Open(!units5to8Open)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200"
                >
                  <span>Units 5 to 8</span>
                  <svg className={`w-4 h-4 transition-transform ${units5to8Open ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {units5to8Open && (
                  <div className="ml-4 mt-1 space-y-1">
                    <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200">Units 5 to 8</a>
                  </div>
                )}
              </div>

              {/* Units 9 to 11 */}
              <div>
                <button
                  onClick={() => setUnits9to11Open(!units9to11Open)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200"
                >
                  <span>Units 9 to 11</span>
                  <svg className={`w-4 h-4 transition-transform ${units9to11Open ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {units9to11Open && (
                  <div className="ml-4 mt-1 space-y-1">
                    <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200">Units 9 to 11</a>
                  </div>
                )}
              </div>

              {/* Topic 4 */}
              <div>
                <button
                  onClick={() => setTopic4Open(!topic4Open)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200"
                >
                  <span>Topic 4</span>
                  <svg className={`w-4 h-4 transition-transform ${topic4Open ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Midterm 1 */}
              <div>
                <button
                  onClick={() => setMidterm1Open(!midterm1Open)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200"
                >
                  <span>Midterm 1</span>
                  <svg className={`w-4 h-4 transition-transform ${midterm1Open ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {midterm1Open && (
                  <div className="ml-4 mt-1 space-y-1">
                    <a href="/moodle/personal-health/midterm-1" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200 truncate">Midterm 1 Personal Health</a>
                  </div>
                )}
              </div>

              {/* Midterm 2 */}
              <div>
                <button
                  onClick={() => setMidterm2Open(!midterm2Open)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200"
                >
                  <span>Midterm 2</span>
                  <svg className={`w-4 h-4 transition-transform ${midterm2Open ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {midterm2Open && (
                  <div className="ml-4 mt-1 space-y-1">
                    <a href="/moodle/personal-health/midterm-2" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200 truncate">Midterm 2 Personal Health</a>
                  </div>
                )}
              </div>

              {/* Final */}
              <div>
                <button
                  onClick={() => setFinalOpen(!finalOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200"
                >
                  <span>Final</span>
                  <svg className={`w-4 h-4 transition-transform ${finalOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {finalOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    <a href="/moodle/personal-health/final" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200 truncate">Final Personal Health</a>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-normal text-gray-900 mb-6">Int. to Personal Health Fall 25 26</h1>

          {/* Tabs */}
          <div className="flex items-center gap-6 border-b border-gray-300 mb-8">
            <button className="px-4 py-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600">Course</button>
            <button className="px-4 py-3 text-sm text-gray-600 hover:text-gray-900 transition-all duration-200">Participants</button>
            <button className="px-4 py-3 text-sm text-gray-600 hover:text-gray-900 transition-all duration-200">Grades</button>
            <button className="px-4 py-3 text-sm text-gray-600 hover:text-gray-900 transition-all duration-200">Competencies</button>
          </div>

          {/* General Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <button className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                General
              </button>
              <button className="text-sm text-blue-600 hover:underline">Collapse all</button>
            </div>

            <div className="space-y-4 ml-7">
              {/* Announcements */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <a href="#" className="text-blue-600 hover:underline text-sm transition-all duration-200">Announcements</a>
              </div>

              {/* Course resources */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <a href="#" className="text-blue-600 hover:underline text-sm block mb-2 transition-all duration-200">Course resources</a>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p>References Book <a href="#" className="text-blue-600 hover:underline">here</a></p>
                    <p>WhatsApp link <a href="#" className="text-blue-600 hover:underline">here</a></p>
                    <p>Research study</p>
                    <p>Course Layout <a href="#" className="text-blue-600 hover:underline">here</a></p>
                    <p>HESC 004 Midterm Exam I Grades <a href="#" className="text-blue-600 hover:underline">Here</a></p>
                    <p>HESC 004 Midterm Exam II Grades <a href="#" className="text-blue-600 hover:underline">Here</a></p>
                    <p>Prefinal Grades 60%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Units 1 to 4 */}
          <div className="mb-8">
            <button className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Units 1 to 4
            </button>

            <div className="ml-7">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <a href="#" className="text-blue-600 hover:underline text-sm transition-all duration-200">Units 1 to 4</a>
              </div>
              <div className="text-sm text-gray-700 space-y-1 ml-11">
                <p>Unit 1 Introduction <a href="#" className="text-blue-600 hover:underline">here</a></p>
                <p>Unit 2 Psychological Health <a href="#" className="text-blue-600 hover:underline">here</a></p>
                <p>Unit 3 Personal Stress management <a href="#" className="text-blue-600 hover:underline">here</a> recorded lecture <a href="#" className="text-blue-600 hover:underline">here</a></p>
                <p>Unit 4 Fitness recorded lecture <a href="#" className="text-blue-600 hover:underline">here</a> recorded lecture <a href="#" className="text-blue-600 hover:underline">here</a></p>
              </div>
            </div>
          </div>

          {/* Units 5 to 8 */}
          <div className="mb-8">
            <button className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Units 5 to 8
            </button>

            <div className="ml-7">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <a href="#" className="text-blue-600 hover:underline text-sm transition-all duration-200">Units 5 to 8</a>
              </div>
              <div className="text-sm text-gray-700 space-y-1 ml-11">
                <p>Unit 5 Personal Nutrition <a href="#" className="text-blue-600 hover:underline">here</a> recorded <a href="#" className="text-blue-600 hover:underline">here</a></p>
                <p>Unit 6 Weight control <a href="#" className="text-blue-600 hover:underline">here</a> Recorded lecture <a href="#" className="text-blue-600 hover:underline">here</a></p>
                <p>Unit 7 Sexuality and relationships <a href="#" className="text-blue-600 hover:underline">here</a> recorded lecture <a href="#" className="text-blue-600 hover:underline">here</a></p>
                <p>Unit 8 Preventing infectious diseases <a href="#" className="text-blue-600 hover:underline">here</a> recorded lecture <a href="#" className="text-blue-600 hover:underline">here</a></p>
              </div>
            </div>
          </div>

          {/* Units 9 to 11 */}
          <div className="mb-8">
            <button className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Units 9 to 11
            </button>

            <div className="ml-7">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <a href="#" className="text-blue-600 hover:underline text-sm transition-all duration-200">Units 9 to 11</a>
              </div>
              <div className="text-sm text-gray-700 space-y-1 ml-11">
                <p>Unit 9 Major diseases <a href="#" className="text-blue-600 hover:underline">here</a> recorded <a href="#" className="text-blue-600 hover:underline">here</a></p>
                <p>Unit 10 Drug abuse <a href="#" className="text-blue-600 hover:underline">here</a> recorded <a href="#" className="text-blue-600 hover:underline">here</a></p>
                <p>Unit 11 Protecting health, environment and aging <a href="#" className="text-blue-600 hover:underline">here</a> recorded <a href="#" className="text-blue-600 hover:underline">here</a></p>
              </div>
            </div>
          </div>

          {/* Topic 4 */}
          <div className="mb-8">
            <button className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Topic 4
            </button>
          </div>

          {/* Midterm 1 */}
          <div className="mb-8">
            <button className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Midterm 1
            </button>

            <div className="space-y-4 ml-7">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <a href="/moodle/personal-health/midterm-1" className="text-blue-600 hover:underline text-sm transition-all duration-200">Midterm 1 Personal Health</a>
              </div>
            </div>
          </div>

          {/* Midterm 2 */}
          <div className="mb-8">
            <button className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Midterm 2
            </button>

            <div className="space-y-4 ml-7">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <a href="/moodle/personal-health/midterm-2" className="text-blue-600 hover:underline text-sm transition-all duration-200">Midterm 2 Personal Health</a>
              </div>
            </div>
          </div>

          {/* Final */}
          <div className="mb-8">
            <button className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Final
            </button>

            <div className="space-y-4 ml-7">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <a href="/moodle/personal-health/final" className="text-blue-600 hover:underline text-sm transition-all duration-200">Final Personal Health</a>
              </div>
            </div>
          </div>
        </main>

        {/* Help Button */}
        <button className="fixed bottom-6 right-6 w-12 h-12 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
          <span className="text-xl">?</span>
        </button>
      </div>
    </div>
  );
}
