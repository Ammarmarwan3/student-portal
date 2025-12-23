"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-8">
              <a href="/home" className="flex items-center gap-2 hover:opacity-80 transition-all duration-300 hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1764793778223-25365eb4c1c3?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="BAU Logo"
                  className="h-8 w-auto transition-transform duration-300 hover:rotate-6"
                />
                <span className="font-semibold text-gray-900 text-base">iConnect</span>
              </a>
              <nav className="hidden md:flex items-center gap-6 text-[13px] text-gray-600">
                <a href="#" className="hover:text-gray-900 transition-all duration-200 hover:scale-105">CAPP</a>
                <a href="/important-notice" className="hover:text-gray-900 transition-all duration-200 hover:scale-105">Important Notice</a>
                <a href="/library" className="hover:text-gray-900 transition-all duration-200 hover:scale-105">Library</a>
                <a href="/moodle" className="hover:text-gray-900 transition-all duration-200 hover:scale-105">Moodle</a>
                <a href="https://banservices.bau.edu.lb/StudentSelfService/ssb/studentProfile" className="hover:text-gray-900 transition-all duration-200 hover:scale-105" target="_blank" rel="noopener noreferrer">Profile</a>
                <a href="/dashboard" className="hover:text-gray-900 transition-all duration-200 hover:scale-105">X-Files</a>
                <a href="#" className="hover:text-gray-900 transition-all duration-200 hover:scale-105 flex items-center gap-1">
                  Forms
                  <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://login.microsoftonline.com/login.srf?wa=wsignin1.0&wreply=https://outlook.office.com/owa/&login_hint=aaj062@student.bau.edu.lb" className="p-1.5 text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-110 hover:bg-gray-100 rounded" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="https://login.microsoftonline.com/login.srf?wa=wsignin1.0&wreply=https://outlook.office.com/owa/&login_hint=aaj062@student.bau.edu.lb" className="p-1.5 text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-110 hover:bg-gray-100 rounded" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </a>
              <a href="/login" className="p-1.5 text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-110 hover:bg-gray-100 rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 py-6">
        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Cumulative GPA Card */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 flex items-center gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Cumulative GPA</div>
              <div className="text-4xl font-bold text-yellow-500">2.78</div>
            </div>
          </div>

          {/* Current Semester GPA Card */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 flex items-center gap-4">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Current Semester GPA</div>
              <div className="text-4xl font-bold text-yellow-500">2.78</div>
            </div>
          </div>

          {/* Earned Credits Card */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 flex items-center gap-4">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Earned Credits</div>
              <div className="text-4xl font-bold text-cyan-600">13</div>
            </div>
          </div>

          {/* Remaining Payments Card */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 flex items-center gap-4">
            <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-rose-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Remaining Payments LBP</div>
              <div className="text-3xl font-bold text-rose-600">0</div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="space-y-4">
          {/* Profile Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Student Profile Card */}
            <div className="bg-white border border-gray-200 rounded-sm">
              <div className="p-6 flex flex-col items-center text-center">
                <Avatar className="w-40 h-40 mb-4 border-4 border-gray-100">
                  <AvatarImage src="https://images.unsplash.com/photo-1764794654729-8e423a95d7aa?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Student" />
                  <AvatarFallback className="bg-gray-200 text-gray-600 text-3xl">AA</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold text-gray-900 mb-0.5">Ahmad Abd Al Rahim</h3>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Jabara</h3>
                <p className="text-sm text-gray-600 mb-0.5">Medicine-BEI</p>
                <p className="text-xs text-gray-500 mb-2">Bachelor in Medicine & Surgery</p>
                <p className="text-sm text-blue-600 hover:underline cursor-pointer mb-4">aaj062@student.bau.edu.lb</p>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-12 h-9 rounded-sm font-normal">
                  Active
                </Button>
              </div>
            </div>

            {/* Personal Info Card */}
            <div className="lg:col-span-2 bg-white border border-gray-200 rounded-sm">
              <div className="border-b border-gray-200 px-5 py-3 bg-gray-50">
                <h3 className="text-base font-semibold text-gray-900">Personal Info</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <div className="text-xs font-semibold text-gray-600 mb-1">Student ID</div>
                    <div className="text-sm text-gray-900">202060629</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-600 mb-1">First Name</div>
                    <div className="text-sm text-gray-900">Ahmad</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-600 mb-1">Middle Name</div>
                    <div className="text-sm text-gray-900">Abd Al Rahim</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-600 mb-1">Last Name</div>
                    <div className="text-sm text-gray-900">Jabara</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-600 mb-1">Arabic Full Name</div>
                    <div className="text-sm text-gray-900">أحمد عبد الرحيم جبارة</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-600 mb-1">Gender</div>
                    <div className="text-sm text-gray-900">Male</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-600 mb-1">Nationality</div>
                    <div className="text-sm text-gray-900">LEBANESE</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-600 mb-1">Marital Status</div>
                    <div className="text-sm text-gray-900">Single</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white border border-gray-200 rounded-sm">
            <div className="border-b border-gray-200 px-5 py-3 bg-gray-50">
              <h3 className="text-base font-semibold text-gray-900">Contact Info</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
                <div>
                  <div className="text-xs font-semibold text-gray-600 mb-1">Address</div>
                  <div className="text-sm text-gray-900">Main Road Abed Rahim J</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-600 mb-1">Phone Number</div>
                  <div className="text-sm text-gray-900">00000000</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-600 mb-1">Mobile Number</div>
                  <div className="text-sm text-gray-900">76946299</div>
                </div>
              </div>
            </div>
          </div>

          {/* Private Personal Info */}
          <div className="bg-white border border-gray-200 rounded-sm">
            <div className="border-b border-gray-200 px-5 py-3 bg-gray-50">
              <h3 className="text-base font-semibold text-gray-900">Private Personal Info</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <div className="text-xs font-semibold text-gray-600 mb-1">Date Of Birth</div>
                  <div className="text-sm text-gray-900">24/03/2006</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-600 mb-1">Place Of Birth</div>
                  <div className="text-sm text-gray-900">Jeb Jenir</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-600 mb-1">Mother Name</div>
                  <div className="text-sm text-gray-900">Noura Jabara</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-600 mb-1">Record No.</div>
                  <div className="text-sm text-gray-900">Jeb Jenir 120</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-600 mb-1">SSN</div>
                  <div className="text-sm text-gray-900">-</div>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-white border border-gray-200 rounded-sm">
            <div className="border-b border-gray-200 px-5 py-3 bg-gray-50 flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-900">Schedule</h3>
              <div className="flex items-center gap-2">
                <Badge className="bg-emerald-600 hover:bg-emerald-600 text-white text-xs font-normal px-3 py-1">
                  Total registered credits: 13
                </Badge>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white h-7 px-3 text-xs font-normal rounded-sm">
                  Courses - Falls - Exam Dates
                </Button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50 border-b border-gray-200">
                    <TableHead className="text-xs font-semibold text-gray-700 h-9">CRN</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9">Course</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9">Title</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9 text-center">credits</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9 text-center">Section</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9 text-center">Code</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9 text-center">Type</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9">Time</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9 text-center">Mon</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9 text-center">Tue</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9 text-center">Wed</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9 text-center">Thur</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9 text-center">Fri</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-gray-200">
                    <TableCell className="text-xs text-gray-900 py-2">10787</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">FAIBL201</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">Life Cycle</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center">5</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center">1</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center">RE</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center">Lecture</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">0801 to 1400</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center">X</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center"></TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center"></TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center"></TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center"></TableCell>
                  </TableRow>
                  <TableRow className="bg-gray-50 border-b border-gray-200">
                    <TableCell className="text-xs text-gray-900 py-2">10787</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">FAIBL201</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">Life Cycle</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center">5</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center">1</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center">RE</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center">Lecture</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">0801 to 1400</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center"></TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center">X</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center"></TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center"></TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center"></TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-200">
                    <TableCell className="text-xs text-gray-900 py-2">10787</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">FAIBL201</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">Life Cycle</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center">5</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center">1</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center">RE</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center">Lecture</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">0801 to 1600</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center"></TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center"></TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center">X</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center"></TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center"></TableCell>
                  </TableRow>
                  <TableRow className="bg-gray-50 border-b border-gray-200">
                    <TableCell className="text-xs text-gray-900 py-2">10787</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">FAIBL201</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">Life Cycle</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center">5</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center">1</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center">RE</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center">Lecture</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">0801 to 1400</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center"></TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center"></TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center"></TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center">X</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center"></TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-200">
                    <TableCell className="text-xs text-gray-900 py-2">11722</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">HESC004</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">Int. to Personal Health</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center">1</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center">1</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center">RE</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center">Lecture</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">1401 to 1500</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center"></TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center"></TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center"></TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center">X</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2 text-center"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Academic History */}
          <div className="bg-white border border-gray-200 rounded-sm">
            <div className="border-b border-gray-200 px-5 py-3 bg-gray-50 flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-900">Academic History</h3>
              <Button variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-50 hover:text-rose-700 h-7 px-4 text-xs font-normal rounded-sm">
                Request
              </Button>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50 border-b border-gray-200">
                    <TableHead className="text-xs font-semibold text-gray-700 h-9">Term</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9">Course</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9">Title</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9">Credits</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9">Level</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9">Grade</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9">SGPA</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9">IND</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-8 text-sm text-gray-500">
                      No Grades Available
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Academic Path */}
          <div className="bg-white border border-gray-200 rounded-sm">
            <div className="border-b border-gray-200 px-5 py-3 bg-gray-50">
              <h3 className="text-base font-semibold text-gray-900">Academic Path</h3>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50 border-b border-gray-200">
                    <TableHead className="text-xs font-semibold text-gray-700 h-9">Term</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9">Faculty</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9">Department</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9">Program</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-gray-200">
                    <TableCell className="text-xs text-gray-900 py-2">202610</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">Medicine</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">Medicine</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">Bachelor in Medicine & Surgery</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Receipts */}
          <div className="bg-white border border-gray-200 rounded-sm">
            <div className="border-b border-gray-200 px-5 py-3 bg-gray-50">
              <h3 className="text-base font-semibold text-gray-900">Receipts</h3>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50 border-b border-gray-200">
                    <TableHead className="text-xs font-semibold text-gray-700 h-9">Date</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9">Receipts</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9">Amount</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9">Description</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9">Details</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-700 h-9">Term</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-gray-200">
                    <TableCell className="text-xs text-gray-900 py-2">28/04/2025</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">25175770</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">3000 $</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">Dollar Payment</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2"></TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">Fall 2025 / 2026</TableCell>
                  </TableRow>
                  <TableRow className="bg-gray-50 border-b border-gray-200">
                    <TableCell className="text-xs text-gray-900 py-2">20/01/2025</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">25153031</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">50 $</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">Dollar Payment</TableCell>
                    <TableCell className="text-xs text-gray-900 py-2"></TableCell>
                    <TableCell className="text-xs text-gray-900 py-2">Fall 2025 / 2026</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Payments Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Payments LBP */}
            <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">
              <div className="bg-cyan-600 px-5 py-3">
                <h3 className="text-sm font-semibold text-white">Payments: Remaining Payments: 0</h3>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 border-b border-gray-200">
                      <TableHead className="text-xs font-semibold text-gray-700 h-9">Term</TableHead>
                      <TableHead className="text-xs font-semibold text-gray-700 h-9">Charges</TableHead>
                      <TableHead className="text-xs font-semibold text-gray-700 h-9">Payment</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-b border-gray-200">
                      <TableCell className="text-xs text-gray-900 py-2">202610</TableCell>
                      <TableCell className="text-xs text-gray-900 py-2">243,141,000</TableCell>
                      <TableCell className="text-xs text-gray-900 py-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                          <span>243,141,000</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Payments USD */}
            <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">
              <div className="bg-cyan-600 px-5 py-3">
                <h3 className="text-sm font-semibold text-white">Payments USD: Remaining Payments: 0</h3>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 border-b border-gray-200">
                      <TableHead className="text-xs font-semibold text-gray-700 h-9">Term</TableHead>
                      <TableHead className="text-xs font-semibold text-gray-700 h-9">Charges</TableHead>
                      <TableHead className="text-xs font-semibold text-gray-700 h-9">Payment</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-b border-gray-200">
                      <TableCell className="text-xs text-gray-900 py-2">202610</TableCell>
                      <TableCell className="text-xs text-gray-900 py-2">5,116</TableCell>
                      <TableCell className="text-xs text-gray-900 py-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                          <span>5,116</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          {/* Holds, Probation, Warnings Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Holds */}
            <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">
              <div className="bg-rose-600 px-5 py-3">
                <h3 className="text-sm font-semibold text-white">Holds</h3>
              </div>
              <div className="p-5">
                <div className="border-b border-gray-200 pb-2 mb-3">
                  <div className="text-xs font-semibold text-gray-700">Description</div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-gray-900">Papers Missing-Hold</div>
                </div>
              </div>
            </div>

            {/* Probation */}
            <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">
              <div className="bg-emerald-600 px-5 py-3">
                <h3 className="text-sm font-semibold text-white">Probation</h3>
              </div>
              <div className="p-5">
                <div className="border-b border-gray-200 pb-2 mb-3">
                  <div className="text-xs font-semibold text-gray-700">Term</div>
                </div>
                <div className="text-xs text-gray-500">No Probation Reported</div>
              </div>
            </div>

            {/* Warnings */}
            <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">
              <div className="bg-rose-600 px-5 py-3">
                <h3 className="text-sm font-semibold text-white">Warnings</h3>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 border-b border-gray-200">
                      <TableHead className="text-xs font-semibold text-gray-700 h-8">Cause</TableHead>
                      <TableHead className="text-xs font-semibold text-gray-700 h-8">Section</TableHead>
                      <TableHead className="text-xs font-semibold text-gray-700 h-8">Warning</TableHead>
                      <TableHead className="text-xs font-semibold text-gray-700 h-8">Term</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-b border-gray-200">
                      <TableCell className="text-xs text-gray-900 py-1.5">FAIBL201</TableCell>
                      <TableCell className="text-xs text-gray-900 py-1.5">Attendance First Warning</TableCell>
                      <TableCell className="text-xs text-gray-900 py-1.5"></TableCell>
                      <TableCell className="text-xs text-gray-900 py-1.5">202610</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-200">
                      <TableCell className="text-xs text-gray-900 py-1.5">BLAW201</TableCell>
                      <TableCell className="text-xs text-gray-900 py-1.5">Attendance First Warning</TableCell>
                      <TableCell className="text-xs text-gray-900 py-1.5"></TableCell>
                      <TableCell className="text-xs text-gray-900 py-1.5">202610</TableCell>
                    </TableRow>
                    <TableRow className="bg-gray-50 border-b border-gray-200">
                      <TableCell className="text-xs text-gray-900 py-1.5">HESC004</TableCell>
                      <TableCell className="text-xs text-gray-900 py-1.5">Attendance First Warning</TableCell>
                      <TableCell className="text-xs text-gray-900 py-1.5"></TableCell>
                      <TableCell className="text-xs text-gray-900 py-1.5">202610</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-200">
                      <TableCell className="text-xs text-gray-900 py-1.5">COHI2003</TableCell>
                      <TableCell className="text-xs text-gray-900 py-1.5">Attendance First Warning</TableCell>
                      <TableCell className="text-xs text-gray-900 py-1.5"></TableCell>
                      <TableCell className="text-xs text-gray-900 py-1.5">202610</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 mt-12 py-6">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">BAU - MIS 2025 🎓</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.138 20.1625 22.001 16.4125 22.001 12C22.001 6.475 17.526 2 12.001 2Z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
