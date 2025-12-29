f"use client";

export default function FinalPersonalHealthPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-[1600px] mx-auto px-8">
          <span className="font-semibold text-gray-900 text-base">BAU Moodle</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-8 py-8">
        <div className="flex gap-8">
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Int. to Personal Health Fall 25 26</h1>

            {/* Exam Info */}
            <div className="space-y-3 mb-8 text-sm text-gray-700">
              <p>Attempts allowed: 1</p>
              <p>To attempt this Exam you need to know the Exam password</p>
              <p>This Exam has been configured so that students may only attempt it using the Safe Exam Browser.</p>
              <p>Time limit: 1 hour 30 mins</p>
            </div>

            {/* Final Grade */}
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Your final grade for this Exam is 79.00/100.00.
            </h2>

            {/* Your Attempts */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your attempts</h3>

            {/* Attempt 1 */}
            <div className="bg-gray-100 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Attempt 1</h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Status</span>
                  <span className="text-gray-900">Finished</span>
                </div>
                <div></div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Started</span>
                  <span className="text-gray-900">Thursday, 4 December 2025, 8:00 AM</span>
                </div>
                <div></div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Completed</span>
                  <span className="text-gray-900">Thursday, 4 December 2025, 9:30 AM</span>
                </div>
                <div></div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Duration</span>
                  <span className="text-gray-900">1 hour 30 mins</span>
                </div>
                <div></div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Marks</span>
                  <span className="text-gray-900">79.00/100.00</span>
                </div>
                <div></div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Grade</span>
                  <span className="text-gray-900">79.00 out of 100.00 (79%)</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-4">Review not permitted</p>
            </div>

            <p className="text-sm text-gray-700 mb-8">No more attempts are allowed</p>

            {/* Back Button */}
            <a
              href="/moodle/personal-health"
              className="inline-block bg-gray-400 hover:bg-gray-500 text-white font-medium px-6 py-2.5 rounded transition-all duration-200"
            >
              Back to the course
            </a>
          </div>

          {/* Right Sidebar - Calculator */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white border border-gray-300 rounded-lg overflow-hidden sticky top-8">
              <div className="bg-gray-200 px-4 py-3 border-b border-gray-300">
                <h3 className="font-semibold text-gray-900">Calculator</h3>
              </div>
              <div className="p-4">
                {/* Calculator Display */}
                <div className="bg-gray-800 text-white text-right text-2xl font-mono p-4 mb-4 rounded">
                  0
                </div>

                {/* Calculator Buttons */}
                <div className="grid grid-cols-4 gap-2">
                  {/* Row 1 */}
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 rounded transition-all duration-200">
                    AC
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 rounded transition-all duration-200">
                    DEL
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 rounded transition-all duration-200">
                    ÷
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 rounded transition-all duration-200">
                    *
                  </button>

                  {/* Row 2 */}
                  <button className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-semibold py-3 rounded transition-all duration-200">
                    1
                  </button>
                  <button className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-semibold py-3 rounded transition-all duration-200">
                    2
                  </button>
                  <button className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-semibold py-3 rounded transition-all duration-200">
                    3
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 rounded transition-all duration-200">
                    +
                  </button>

                  {/* Row 3 */}
                  <button className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-semibold py-3 rounded transition-all duration-200">
                    4
                  </button>
                  <button className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-semibold py-3 rounded transition-all duration-200">
                    5
                  </button>
                  <button className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-semibold py-3 rounded transition-all duration-200">
                    6
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 rounded transition-all duration-200">
                    -
                  </button>

                  {/* Row 4 */}
                  <button className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-semibold py-3 rounded transition-all duration-200">
                    7
                  </button>
                  <button className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-semibold py-3 rounded transition-all duration-200">
                    8
                  </button>
                  <button className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-semibold py-3 rounded transition-all duration-200">
                    9
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 rounded row-span-2 transition-all duration-200">
                    =
                  </button>

                  {/* Row 5 */}
                  <button className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-semibold py-3 rounded transition-all duration-200">
                    .
                  </button>
                  <button className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-semibold py-3 rounded transition-all duration-200">
                    0
                  </button>
                  <button className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-semibold py-3 rounded transition-all duration-200">

                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
