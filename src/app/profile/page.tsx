"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-indigo-700 text-white px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-1 transition-all duration-200 hover:scale-110 hover:bg-white/10 rounded">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M8 12h8M12 8v8"/>
              </svg>
              <span className="text-lg font-medium">ellucian</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-1 transition-all duration-200 hover:scale-110 hover:bg-white/10 rounded">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </button>
            <button className="p-1 transition-all duration-200 hover:scale-110 hover:bg-white/10 rounded">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://images.unsplash.com/photo-1764794654729-8e423a95d7aa?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <AvatarFallback>AJ</AvatarFallback>
              </Avatar>
              <span className="text-sm">Ahmad Abd Al Rahim Jabara</span>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex items-center gap-2 text-sm">
          <a href="/home" className="text-blue-600 hover:underline transition-all duration-200 hover:text-blue-800">Student</a>
          <span>•</span>
          <span className="text-blue-600">Student Profile</span>
        </div>
      </div>

      {/* Page Title */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-normal text-gray-900">Student Profile - Ahmad Abd Al Rahim Jabara (202600629)</h1>
      </div>

      {/* Term Selector Bar */}
      <div className="bg-gray-800 px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <label className="text-white text-sm">Term:</label>
          <select className="bg-gray-700 text-white px-3 py-1 text-sm rounded border border-gray-600">
            <option>Fall 2025 / 2026 Current term</option>
          </select>
        </div>
        <div className="flex items-center gap-6 text-white text-sm">
          <span>Standing: Good Standing, as of Fall 2025 / 2026</span>
          <span className="bg-red-600 px-2 py-1 rounded">Registration Notices: 4</span>
          <span className="bg-red-600 px-2 py-1 rounded">Holds: 2</span>
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-64 bg-gray-800 min-h-screen text-white">
          <div className="p-6">
            <Avatar className="w-40 h-40 mx-auto mb-4 bg-gray-900">
              <AvatarImage src="https://i.pravatar.cc/300?img=12" />
              <AvatarFallback className="bg-gray-900 text-gray-400 text-6xl">👤</AvatarFallback>
            </Avatar>
            <p className="text-center text-sm">
              <a href="#" className="text-blue-300 hover:underline transition-all duration-200 hover:text-blue-200">Ahmad Abd Al Rahim Jabara</a>
            </p>
          </div>

          <nav className="space-y-1">
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700 transition-all duration-200 hover:scale-105">Curriculum and Courses</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700 transition-all duration-200 hover:scale-105">Prior Education and Testing</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700 transition-all duration-200 hover:scale-105">Additional Links</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700 transition-all duration-200 hover:scale-105">Degree Evaluation</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700 transition-all duration-200 hover:scale-105">Academic Transcript</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700 transition-all duration-200 hover:scale-105">Registration</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700 transition-all duration-200 hover:scale-105">Student Schedule</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700 transition-all duration-200 hover:scale-105">View Application to Graduate</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700 transition-all duration-200 hover:scale-105">Week at a Glance</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700 transition-all duration-200 hover:scale-105">Registration and Planning</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700 transition-all duration-200 hover:scale-105">View Grades</a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Bio Information */}
            <div className="bg-white p-6 rounded shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">Bio Information</h2>
              <div className="space-y-2 text-sm">
                <div className="grid grid-cols-2">
                  <span className="font-semibold text-gray-700">Email:</span>
                  <a href="mailto:aaj062@student.bau.edu.lb" className="text-blue-600 hover:underline transition-all duration-200 hover:text-blue-800">aaj062@student.bau.edu.lb</a>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-semibold text-gray-700">ID:</span>
                  <span>Not Provided</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-semibold text-gray-700">Gender:</span>
                  <span>Male</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-semibold text-gray-700">Date of Birth:</span>
                  <span>01/24</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-semibold text-gray-700">Ethnicity:</span>
                  <span>Not Provided</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-semibold text-gray-700">Race:</span>
                  <span>Not Provided</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-semibold text-gray-700">Citizen:</span>
                  <span>Yes</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-semibold text-gray-700">Citizenship:</span>
                  <span>LEBANESE</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-semibold text-gray-700">Emergency Contact:</span>
                  <span>Not Provided</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-semibold text-gray-700">Emergency Phone:</span>
                  <span>Not Provided</span>
                </div>
              </div>
            </div>

            {/* Curriculum */}
            <div className="bg-white rounded shadow-sm row-span-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="border-b border-gray-200 p-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">CURRICULUM</h2>
                <button className="text-gray-500 hover:text-gray-700 transition-all duration-200 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 15l7-7 7 7"/>
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <div className="flex gap-2 mb-4">
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded transition-all duration-300 hover:scale-105 hover:shadow-md">Primary</button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 text-sm rounded hover:bg-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-md">Secondary</button>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-2">
                    <span className="font-semibold text-gray-700">Degree:</span>
                    <span>Bachelor of Medicine & Surgery</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-semibold text-gray-700">Study Path:</span>
                    <span>Not Provided</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-semibold text-gray-700">Level:</span>
                    <span>Undergraduate</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-semibold text-gray-700">Program:</span>
                    <span>Bachelor in Medicine & Surgery</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-semibold text-gray-700">College:</span>
                    <span>Medicine</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-semibold text-gray-700">Major:</span>
                    <span>Medicine & Surgery</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-semibold text-gray-700">Department:</span>
                    <span>Med Prog</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-semibold text-gray-700">Concentration:</span>
                    <span>Not Provided</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-semibold text-gray-700">Minor:</span>
                    <span>Not Provided</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-semibold text-gray-700">Concentration:</span>
                    <span>Not Provided</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-semibold text-gray-700">Admit Type:</span>
                    <span>Standard</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-semibold text-gray-700">Admit Term:</span>
                    <span>Fall 2025 / 2026</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="font-semibold text-gray-700">Catalog Term:</span>
                    <span>Fall 2025 / 2026</span>
                  </div>
                </div>
              </div>
            </div>

            {/* General Information */}
            <div className="bg-white p-6 rounded shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h2 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
                General Information
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M12 8v4m0 4h.01"/>
                </svg>
              </h2>
              <div className="space-y-2 text-sm">
                <div className="grid grid-cols-2">
                  <span className="font-semibold text-gray-700">Level:</span>
                  <span>Undergraduate</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-semibold text-gray-700">Class:</span>
                  <span>First Year Medicine</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-semibold text-gray-700">Status:</span>
                  <span>Active</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-semibold text-gray-700">Student Type:</span>
                  <span>New First Time</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-semibold text-gray-700">Residency:</span>
                  <span>lebanese</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-semibold text-gray-700">Campus:</span>
                  <span>Beirut</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-semibold text-gray-700">Catalog Term/Period:</span>
                  <span>Fall 2025 / 2026</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-semibold text-gray-700">Matriculated Term:</span>
                  <span>Not Provided</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-semibold text-gray-700">Last Term Attended:</span>
                  <span>None</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-semibold text-gray-700">Leave of Absence:</span>
                  <span>Not Provided</span>
                </div>
              </div>
            </div>

            {/* Graduation Information */}
            <div className="bg-white p-6 rounded shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">Graduation Information</h2>
              <div className="space-y-2 text-sm">
                <div className="grid grid-cols-2">
                  <span className="font-semibold text-gray-700">Graduation Applications:</span>
                  <span>None</span>
                </div>
              </div>
            </div>

            {/* Advisors */}
            <div className="bg-white p-6 rounded shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">Advisors</h2>
              <div className="space-y-2 text-sm">
                <div className="grid grid-cols-2">
                  <span className="font-semibold text-gray-700">Primary / Major</span>
                  <a href="#" className="text-blue-600 hover:underline transition-all duration-200 hover:text-blue-800">Salah Mohammad Issam Malaie</a>
                </div>
              </div>
            </div>
          </div>

          {/* Registered Courses */}
          <div className="bg-white rounded shadow-sm mt-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="border-b border-gray-200 p-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">REGISTERED COURSES</h2>
              <button className="text-gray-500 hover:text-gray-700 transition-all duration-200 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 15l7-7 7 7"/>
                </svg>
              </button>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="text-xs font-semibold text-gray-700">Course Title</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700">Details</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700">CRN</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700">Hours</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700">Registration Status</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700">Instructor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-sm">Life Cycle</TableCell>
                    <TableCell className="text-sm">FABL 201 1</TableCell>
                    <TableCell className="text-sm">
                      <a href="#" className="text-blue-600 hover:underline transition-all duration-200 hover:text-blue-800">10787</a>
                    </TableCell>
                    <TableCell className="text-sm">5</TableCell>
                    <TableCell className="text-sm">**Registered**</TableCell>
                    <TableCell className="text-sm">
                      <a href="#" className="text-blue-600 hover:underline transition-all duration-200 hover:text-blue-800">Ramadan Mahmoud El ..</a>
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-gray-50">
                    <TableCell className="text-sm">Introduction to Personal Health</TableCell>
                    <TableCell className="text-sm">HESC 004 1</TableCell>
                    <TableCell className="text-sm">
                      <a href="#" className="text-blue-600 hover:underline transition-all duration-200 hover:text-blue-800">11722</a>
                    </TableCell>
                    <TableCell className="text-sm">1</TableCell>
                    <TableCell className="text-sm">**Registered**</TableCell>
                    <TableCell className="text-sm">
                      <a href="#" className="text-blue-600 hover:underline transition-all duration-200 hover:text-blue-800">Hiba Al Rahman Youssef ..</a>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="p-4 bg-gray-50 text-sm text-gray-700">
                <span className="font-semibold">Total Hours |</span> Registered Hours: 6 | Billing Hours: 14 | CEU Hours: 0 | Min Hours: 0 | Max Hours: 18
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
