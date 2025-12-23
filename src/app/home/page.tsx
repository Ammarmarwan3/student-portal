"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const announcements = [
    "Student Voice 2025 (AArU): Shape the Future of Student Life",
    "Reminder: BAU Course Evaluations for Fall 2025/2026",
    "OSCE Schedule December 2025",
    "The final exam in human rights is scheduled on Saturday 6/12/2025 at 8:30 a.m. to 9:30 a.m., on campus..",
    "Fall Tuition Final Payment Deadline Approaching (November 28)",
    "Med 3 Histo Quiz Roster",
    "Medicine Course Evaluations FALL 2025/2026",
  ];

  const quickLinks = [
    { name: "Calendar", icon: "📅", color: "bg-purple-500" },
    { name: "CAPP", icon: "🌐", color: "bg-blue-500" },
    { name: "Contact Info", icon: "👤", color: "bg-gray-700" },
    { name: "Course\nEvaluation", icon: "📋", color: "bg-blue-600" },
    { name: "Financial Aid", icon: "💰", color: "bg-teal-500" },
    { name: "Graduation\nClearance", icon: "🎓", color: "bg-yellow-600" },
    { name: "Midterm\nGrade", icon: "📧", color: "bg-indigo-600" },
    { name: "Moodle", icon: "📚", color: "bg-orange-600" },
    { name: "Online\nRegistration", icon: "🖥️", color: "bg-orange-500" },
    { name: "Receipt", icon: "🧾", color: "bg-blue-400" },
    { name: "Resources", icon: "📁", color: "bg-yellow-500" },
    { name: "Schedule", icon: "📊", color: "bg-blue-700" },
    { name: "Siblings Info", icon: "🌐", color: "bg-blue-500" },
    { name: "Student\nActivity", icon: "🌿", color: "bg-green-500" },
    { name: "Student Plan", icon: "📱", color: "bg-green-600" },
    { name: "Teams", icon: "👥", color: "bg-purple-600" },
    { name: "گواکەرەکا", icon: "👥", color: "bg-white border-2 border-gray-300 text-gray-700" },
    { name: "طلب رخصة", icon: "🔄", color: "bg-blue-400" },
    { name: "Dean Med\nForm (.docx)", icon: "📘", color: "bg-blue-700" },
    { name: "Grade Change\nForm (.docx)", icon: "📘", color: "bg-blue-800" },
    { name: "Incomplete\nForm (.docx)", icon: "📘", color: "bg-blue-700" },
    { name: "Major Change\nAbsence\nForm (.docx)", icon: "📘", color: "bg-blue-600" },
    { name: "Major Change\nForm (.docx)", icon: "📘", color: "bg-blue-700" },
    { name: "Misapplied\nCitation Form\n(.docx)", icon: "📘", color: "bg-blue-800" },
    { name: "Registration\nForm (.docx)", icon: "📘", color: "bg-blue-600" },
    { name: "Withdrawal\nForm (.doc)", icon: "📘", color: "bg-blue-700" },
  ];

  const guides = [
    { name: "Banner\nOnline\nRegistration", icon: "🌐", color: "bg-blue-500" },
    { name: "Email\nConfiguration\n(Mobile)", icon: "📧", color: "bg-blue-600" },
    { name: "MFA Guide", icon: "🔷", color: "bg-indigo-500" },
    { name: "Moodle App\nSetup", icon: "📱", color: "bg-orange-600" },
    { name: "Moodle Guide\nfor new\nStudents", icon: "📚", color: "bg-orange-600" },
    { name: "Moodle\nTurnitin\n(Student)", icon: "📗", color: "bg-orange-600" },
    { name: "OneDrive\nUpload", icon: "☁️", color: "bg-blue-500" },
    { name: "WiFi Android\n(Video)", icon: "📱", color: "bg-green-500" },
    { name: "WiFi iPhone\n(Video)", icon: "🍎", color: "bg-blue-400" },
    { name: "WiFi Windows\n(Video)", icon: "💻", color: "bg-blue-500" },
  ];

  // Skeleton Loader Component
  const SkeletonCard = ({ height = "h-32" }: { height?: string }) => (
    <Card className="animate-pulse">
      <CardHeader className="border-b border-gray-200 pb-3">
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      </CardHeader>
      <CardContent className={`px-6 py-6 ${height}`}>
        <div className="space-y-3">
          <div className="h-3 bg-gray-200 rounded"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
          <div className="h-3 bg-gray-200 rounded w-4/6"></div>
        </div>
      </CardContent>
    </Card>
  );

  const SkeletonProfile = () => (
    <Card className="animate-pulse">
      <CardHeader className="border-b border-gray-200 pb-3">
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      </CardHeader>
      <CardContent className="px-6 py-6">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full mb-3"></div>
          <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-24 mb-3"></div>
          <div className="w-full space-y-2">
            <div className="h-3 bg-gray-200 rounded"></div>
            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
            <div className="h-3 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const SkeletonIcons = ({ count = 8 }: { count?: number }) => (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex flex-col items-center gap-2 animate-pulse">
          <div className="w-14 h-14 bg-gray-200 rounded-full"></div>
          <div className="h-2 bg-gray-200 rounded w-12"></div>
        </div>
      ))}
    </div>
  );

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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </a>
              <a href="https://login.microsoftonline.com/login.srf?wa=wsignin1.0&wreply=https://outlook.office.com/owa/&login_hint=aaj062@student.bau.edu.lb" className="p-1.5 text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-110 hover:bg-gray-100 rounded" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <button className="p-1.5 text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-110 hover:bg-gray-100 rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
          {/* Left Sidebar */}
          <div className="space-y-6">
            {isLoading ? (
              <>
                <SkeletonProfile />
                <SkeletonCard height="h-20" />
                <SkeletonCard height="h-20" />
              </>
            ) : (
              <div className="animate-fade-in">
                {/* Profile Card */}
                <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 mb-6">
                  <CardHeader className="border-b border-gray-200 pb-3">
                    <CardTitle className="text-base font-semibold flex items-center justify-between">
                      Profile
                      <button className="text-gray-400 hover:text-gray-600 transition-all duration-200 hover:rotate-180">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 py-6">
                    <div className="flex flex-col items-center">
                      <Avatar className="w-24 h-24 mb-3 transition-all duration-300 hover:scale-110 hover:ring-4 hover:ring-blue-200 cursor-pointer">
                        <AvatarImage src="https://images.unsplash.com/photo-1764794654729-8e423a95d7aa?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <AvatarFallback>AJ</AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold text-base mb-2">Ahmad Jebara</h3>
                      <p className="text-sm text-gray-600 mb-3">202600629</p>
                      <div className="w-full space-y-2 text-sm">
                        <p className="text-gray-700">Ahmad Abd Al Rahim Jebara</p>
                        <a href="mailto:aaj062@student.bau.edu.lb" className="text-sm text-blue-600 hover:underline block mt-1 transition-all duration-200 hover:text-blue-800 hover:translate-x-1">
                          aaj062@student.bau.edu.lb
                        </a>
                        <a href="mailto:Ahmedjbara080@gmal.com" className="text-sm text-blue-600 hover:underline block mt-1 transition-all duration-200 hover:text-blue-800 hover:translate-x-1">
                          Ahmedjbara080@gmal.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Digital ID Card */}
                <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 mb-6">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-semibold flex items-center">
                      Your Digital ID
                      <span className="ml-auto px-2 py-0.5 bg-green-500 text-white text-xs rounded-br-lg transform rotate-12 animate-pulse">
                        NEW
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <a href="/digital-id" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-9 rounded-sm transition-all duration-300 hover:scale-105 hover:shadow-md">
                        Digital ID
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                {/* Password Management Card */}
                <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader className="border-b border-gray-200 pb-3">
                    <CardTitle className="text-base font-semibold flex items-center justify-between">
                      Password Management
                      <button className="text-gray-400 hover:text-gray-600 transition-all duration-200 hover:rotate-180">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 py-6">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-9 rounded-sm transition-all duration-300 hover:scale-105 hover:shadow-md">
                      Change Password
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Main Content Area */}
          <div className="space-y-6">
            {isLoading ? (
              <>
                <SkeletonCard height="h-96" />
                <SkeletonCard height="h-64" />
                <SkeletonCard height="h-64" />
              </>
            ) : (
              <div className="animate-fade-in">
                {/* My Announcement Section */}
                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="border-b border-gray-200 pb-3">
                    <CardTitle className="text-base font-semibold flex items-center justify-between">
                      My Announcement
                      <button className="text-gray-400 hover:text-gray-600 transition-all duration-200 hover:rotate-180">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 py-4">
                    <div className="space-y-3">
                      {announcements.map((announcement, index) => (
                        <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0 transition-all duration-200 hover:bg-blue-50 hover:px-2 hover:-mx-2 rounded">
                          <a href="#" className="text-blue-600 hover:underline text-sm transition-all duration-200 hover:text-blue-800 block py-1">
                            {announcement}
                          </a>
                        </div>
                      ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-start gap-2 mt-4 pt-4 border-t border-gray-200">
                      <button className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded text-sm font-medium transition-all duration-200 hover:bg-blue-700 hover:scale-110">
                        1
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded text-sm transition-all duration-200 hover:scale-110">
                        2
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded text-sm transition-all duration-200 hover:scale-110">
                        3
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded text-sm transition-all duration-200 hover:scale-110">
                        4
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded text-sm transition-all duration-200 hover:scale-110">
                        5
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded text-sm transition-all duration-200 hover:scale-110">
                        6
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded text-sm transition-all duration-200 hover:scale-110">
                        &gt;
                      </button>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Links Section */}
                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="border-b border-gray-200 pb-3">
                    <CardTitle className="text-base font-semibold flex items-center justify-between">
                      Quick Links
                      <button className="text-gray-400 hover:text-gray-600 transition-all duration-200 hover:rotate-180">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 py-6">
                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
                      {quickLinks.map((link, index) => (
                        <a
                          key={index}
                          href="#"
                          className="flex flex-col items-center gap-2 group"
                        >
                          <div className={`w-14 h-14 ${link.color} rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-md`}>
                            {link.icon}
                          </div>
                          <span className="text-[10px] text-center leading-tight text-gray-700 whitespace-pre-line">
                            {link.name}
                          </span>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Guides Section */}
                <Card>
                  <CardHeader className="border-b border-gray-200 pb-3">
                    <CardTitle className="text-base font-semibold flex items-center justify-between">
                      Guides
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 py-6">
                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
                      {guides.map((guide, index) => (
                        <a
                          key={index}
                          href="#"
                          className="flex flex-col items-center gap-2 group"
                        >
                          <div className={`w-14 h-14 ${guide.color} rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-md`}>
                            {guide.icon}
                          </div>
                          <span className="text-[10px] text-center leading-tight text-gray-700 whitespace-pre-line">
                            {guide.name}
                          </span>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>BAU - MIS 2025</span>
              <img src="https://images.unsplash.com/photo-1764793778223-25365eb4c1c3?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="BAU" className="h-4" />
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-all duration-300 hover:scale-125 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600 transition-all duration-300 hover:scale-125 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-700 transition-all duration-300 hover:scale-125 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600 transition-all duration-300 hover:scale-125 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
