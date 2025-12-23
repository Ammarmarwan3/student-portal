"use client";

import { useState } from "react";

export default function LifeCyclePage() {
  const [generalOpen, setGeneralOpen] = useState(true);
  const [histologyOpen, setHistologyOpen] = useState(false);
  const [newSection1Open, setNewSection1Open] = useState(false);
  const [newSection2Open, setNewSection2Open] = useState(false);
  const [newSection3Open, setNewSection3Open] = useState(false);

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
                    <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200">Student Guide</a>
                  </div>
                )}
              </div>

              {/* Histology Section */}
              <div>
                <button
                  onClick={() => setHistologyOpen(!histologyOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200"
                >
                  <span className="truncate">histology cell membrane le...</span>
                  <svg className={`w-4 h-4 transition-transform flex-shrink-0 ${histologyOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Quiz 1 Section */}
              <div>
                <button
                  onClick={() => setNewSection1Open(!newSection1Open)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200"
                >
                  <span>Quiz 1 Section</span>
                  <svg className={`w-4 h-4 transition-transform ${newSection1Open ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {newSection1Open && (
                  <div className="ml-4 mt-1 space-y-1">
                    <a href="/moodle/life-cycle/quiz-1-fabl" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200 truncate">Quiz 1 FABL 201 For All Stude...</a>
                    <a href="/moodle/life-cycle/quiz-1-cohd" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200 truncate">Quiz 1 COHD For All Students</a>
                  </div>
                )}
              </div>

              {/* Quiz 2 Section */}
              <div>
                <button
                  onClick={() => setNewSection2Open(!newSection2Open)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200"
                >
                  <span>Quiz 2 Section</span>
                  <svg className={`w-4 h-4 transition-transform ${newSection2Open ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {newSection2Open && (
                  <div className="ml-4 mt-1 space-y-1">
                    <a href="/moodle/life-cycle/quiz-2-fabl" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200 truncate">Quiz 2 FABL 201 (For All Stud...</a>
                    <a href="/moodle/life-cycle/quiz-2-cohd" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200 truncate">Quiz 2 COHD For All Students</a>
                  </div>
                )}
              </div>

              {/* Final Section */}
              <div>
                <button
                  onClick={() => setNewSection3Open(!newSection3Open)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200"
                >
                  <span>Final Section</span>
                  <svg className={`w-4 h-4 transition-transform ${newSection3Open ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {newSection3Open && (
                  <div className="ml-4 mt-1 space-y-1">
                    <a href="/moodle/life-cycle/final-fabl" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200 truncate">Final FABL 201 For All Students</a>
                    <a href="/moodle/life-cycle/final-cohd" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-all duration-200 truncate">Final COHD For All Students</a>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-normal text-gray-900 mb-6">Life Cycle</h1>

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

              {/* Student Guide */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div>
                  <a href="#" className="text-blue-600 hover:underline text-sm block mb-2 transition-all duration-200">Student Guide</a>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p className="mb-2">This guide aims to provide the student with:</p>
                    <p>1. The learning Objectives for each Class</p>
                    <p>2. The assessment Methods and Grade distributions</p>
                    <p>3. The essential references and textbooks</p>
                    <p>4. Other relevant information</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Histology Section */}
          <div className="mb-8">
            <button className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              histology cell membrane lecture
            </button>

            <div className="ml-7">
              <a href="#" className="text-blue-600 hover:underline text-sm transition-all duration-200">BAU cell membrane 2025 med 1.pptx</a>
            </div>
          </div>

          {/* Quiz 1 Section */}
          <div className="mb-8">
            <button className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Quiz 1 Section
            </button>

            <div className="space-y-4 ml-7">
              {/* Quiz 1 FABL */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-pink-100 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <a href="/moodle/life-cycle/quiz-1-fabl" className="text-blue-600 hover:underline text-sm block mb-1 transition-all duration-200">Quiz 1 FABL 201 For All Students</a>
                  <p className="text-xs text-gray-600"><span className="font-semibold">Opened:</span> Monday, 22 September 2025, 8:00 AM  <span className="font-semibold ml-4">Closed:</span> Monday, 22 September 2025, 8:40 AM</p>
                </div>
              </div>

              {/* Quiz 1 COHD */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-pink-100 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <a href="/moodle/life-cycle/quiz-1-cohd" className="text-blue-600 hover:underline text-sm block mb-1 transition-all duration-200">Quiz 1 COHD For All Students</a>
                  <p className="text-xs text-gray-600"><span className="font-semibold">Opened:</span> Thursday, 25 September 2025, 8:00 AM  <span className="font-semibold ml-4">Closed:</span> Thursday, 25 September 2025, 8:40 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quiz 2 Section */}
          <div className="mb-8">
            <button className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Quiz 2 Section
            </button>

            <div className="space-y-4 ml-7">
              {/* Quiz 2 FABL */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-pink-100 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <a href="/moodle/life-cycle/quiz-2-fabl" className="text-blue-600 hover:underline text-sm block mb-1 transition-all duration-200">Quiz 2 FABL 201 (For All Students)</a>
                  <p className="text-xs text-gray-600 mb-1"><span className="font-semibold">Opened:</span> Monday, 6 October 2025, 8:00 AM  <span className="font-semibold ml-4">Closed:</span> Monday, 6 October 2025, 9:05 AM</p>
                  <p className="text-xs text-gray-600">25 Questions are for 30 minutes and 15 Marks</p>
                </div>
              </div>

              {/* Quiz 12COHD */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-pink-100 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <a href="/moodle/life-cycle/quiz-2-cohd" className="text-blue-600 hover:underline text-sm block mb-1 transition-all duration-200">Quiz 2 COHD For All Students</a>
                  <p className="text-xs text-gray-600 mb-1"><span className="font-semibold">Opened:</span> Thursday, 9 October 2025, 8:00 AM  <span className="font-semibold ml-4">Closed:</span> Thursday, 9 October 2025, 9:05 AM</p>
                  <p className="text-xs text-gray-600">25 Questions are for 30 minutes and 15 Marks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Section */}
          <div className="mb-8">
            <button className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Final Section
            </button>

            <div className="space-y-4 ml-7">
              {/* Final FABL */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-pink-100 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <a href="/moodle/life-cycle/final-fabl" className="text-blue-600 hover:underline text-sm block mb-1 transition-all duration-200">Final FABL 201 For All Students</a>
                </div>
              </div>

              {/* Final COHD */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-pink-100 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <a href="/moodle/life-cycle/final-cohd" className="text-blue-600 hover:underline text-sm block mb-1 transition-all duration-200">Final COHD For All Students</a>
                </div>
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
