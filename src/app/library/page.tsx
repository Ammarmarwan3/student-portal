"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-8">
              <a href="/home" className="flex items-center gap-2 group">
                <img
                  src="https://images.unsplash.com/photo-1764793778223-25365eb4c1c3?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="BAU Logo"
                  className="h-8 w-auto transition-all duration-300 group-hover:scale-105 group-hover:rotate-6"
                />
                <span className="font-semibold text-gray-900 text-base transition-all duration-200 group-hover:scale-105">iConnect</span>
              </a>
              <nav className="hidden md:flex items-center gap-6 text-[13px] text-gray-600">
                <a href="#" className="transition-all duration-200 hover:text-gray-900 hover:scale-105">CAPP</a>
                <a href="/important-notice" className="transition-all duration-200 hover:text-gray-900 hover:scale-105">Important Notice</a>
                <a href="/library" className="text-gray-900 font-medium transition-all duration-200 hover:scale-105">Library</a>
                <a href="/moodle" className="transition-all duration-200 hover:text-gray-900 hover:scale-105">Moodle</a>
                <a href="https://banservices.bau.edu.lb/StudentSelfService/ssb/studentProfile" className="transition-all duration-200 hover:text-gray-900 hover:scale-105" target="_blank" rel="noopener noreferrer">Profile</a>
                <a href="/dashboard" className="transition-all duration-200 hover:text-gray-900 hover:scale-105">X-Files</a>
                <a href="#" className="transition-all duration-200 hover:text-gray-900 hover:scale-105 flex items-center gap-1">
                  Forms
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
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
              <a href="/login" className="p-1.5 text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-110 hover:bg-gray-100 rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Page Title */}
      <div className="bg-white border-b-4 border-blue-600 px-6 py-6">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-3xl font-normal text-gray-900">Library</h1>
        </div>
      </div>

      <main className="max-w-[1400px] mx-auto px-6 py-6">
        {/* Search Section */}
        <Card className="mb-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">MultiSearch</h2>
            <div className="flex gap-2">
              <select className="px-4 py-2 border border-gray-300 rounded-sm bg-white text-sm">
                <option>Keyword</option>
                <option>Title</option>
                <option>Author</option>
              </select>
              <Input
                type="text"
                placeholder="Search articles, books, journals & more"
                className="flex-1 h-10"
              />
              <Button className="bg-slate-800 hover:bg-slate-900 text-white px-8 h-10 rounded-sm transition-all duration-300 hover:scale-105 hover:shadow-md">
                Search
              </Button>
            </div>
            <div className="flex gap-4 mt-3">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded" />
                <span>Full text</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded" />
                <span>Peer Reviewed Articles</span>
              </label>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* E-resources */}
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-3 border-b">
                <CardTitle className="text-base font-semibold">E-resources</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  <a href="#" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-all duration-200 hover:text-blue-800">Online Databases</a>
                  <a href="#" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-all duration-200 hover:text-blue-800">Online Databases Tutorials</a>
                  <a href="#" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-all duration-200 hover:text-blue-800">Open Access</a>
                  <a href="#" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-all duration-200 hover:text-blue-800">ResearchHive</a>
                  <a href="#" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-all duration-200 hover:text-blue-800">E-journals</a>
                  <a href="#" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-all duration-200 hover:text-blue-800">Free Trials</a>
                  <a href="#" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-all duration-200 hover:text-blue-800">Tools</a>
                </nav>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-3 border-b">
                <CardTitle className="text-base font-semibold">Services</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  <a href="#" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-all duration-200 hover:text-blue-800">Ask a Librarian</a>
                  <a href="#" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-all duration-200 hover:text-blue-800">Borrowing</a>
                  <a href="#" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-all duration-200 hover:text-blue-800">E-Booking</a>
                  <a href="#" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-all duration-200 hover:text-blue-800">Onsite Book Checking</a>
                  <a href="#" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-all duration-200 hover:text-blue-800">Inter-campus/Intra Library Loan</a>
                  <a href="#" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-all duration-200 hover:text-blue-800">Inter Library Loan</a>
                  <a href="#" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-all duration-200 hover:text-blue-800">Current Awareness</a>
                  <a href="#" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-all duration-200 hover:text-blue-800">Library Closses</a>
                  <a href="#" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-all duration-200 hover:text-blue-800">Research Guidelines</a>
                  <a href="#" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-all duration-200 hover:text-blue-800">Computers</a>
                  <a href="#" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-all duration-200 hover:text-blue-800">QR Code link</a>
                  <a href="#" className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-all duration-200 hover:text-blue-800">Online Databases Tutorials</a>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-3 border-b">
                <CardTitle className="text-lg font-semibold">BAU Libraries</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <img
                  src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop"
                  alt="BAU Library"
                  className="w-full h-64 object-cover rounded mb-4"
                />
                <p className="text-sm text-gray-700 leading-relaxed text-justify mb-4">
                  Beirut Arab University (BAU) has nine libraries located across its four campuses in Beirut, Debbieh, Tripoli, and Bekaa, occupying a total area of 3,096 square meters within the campuses grounds. These libraries offer a diverse range of information resources, both printed and electronic, including books, journals, theses, dissertations, and multimedia materials. They also house special collections, such as rare books and manuscripts, displayed in the BAU Museum. This collection also includes maps and JAU memory photos.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed text-justify mb-4">
                  BAU Libraries provide users with access to specialized and multidisciplinary databases, as well as open-access resources for all faculties. The libraries are committed to keeping pace with the latest trends and standards by adhering to a set of Key Performance Indicators based on ISO 11620 and ISO 16439, as outlined in their quality manual. Furthermore, BAU Libraries continuously enhance their services through a well-trained staff.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed text-justify">
                  The library is also embedded in ongoing collaboration through memberships and formal agreements with other libraries in Lebanon and with international library associations, enabling the exchange of loan services, interlibrary loan services, and continuous alignment with evolving international best practices and accreditation requirements.
                </p>
              </CardContent>
            </Card>

            {/* Opening Hours */}
            <Card className="mt-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-3 border-b">
                <CardTitle className="text-lg font-semibold">Opening Hours</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Opening Hours (all libraries in all campuses except Medical Sciences Library)</h3>
                      <p className="text-sm text-gray-700 mb-1"><strong>Monday to Friday:</strong> 8:00 a.m. to 4:00 p.m.</p>
                      <p className="text-sm text-gray-600">Kindly note that you can always send your requests to your librarians through email library@bau.edu.lb, and get answers</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Opening Hours (Medical Sciences Library - Beirut Campus)</h3>
                      <p className="text-sm text-gray-700 mb-1"><strong>Monday to Thursday:</strong> 8:00 a.m. to 6:00 p.m.</p>
                      <p className="text-sm text-gray-700"><strong>Friday:</strong> 8:00 a.m. to 4:00 p.m.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* APA Citation Guide */}
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-3 border-b">
                <CardTitle className="text-sm font-semibold">
                  APA 7<sup>th</sup> Edition Citation style Guide
                  <span className="ml-2 px-2 py-0.5 bg-green-500 text-white text-xs rounded">NEW</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <p className="text-xs text-gray-700 mb-3">
                  To get Guidance on how to cite information resources Based on APA 7<sup>th</sup> Edition ( the newest one) please click on the image below:
                </p>
                <div className="bg-orange-500 p-4 rounded mb-3">
                  <div className="text-white text-2xl font-bold">Manual</div>
                </div>
                <p className="text-xs text-gray-600 mb-2">Publication Manual of the American Psychological Association, source:</p>
                <a href="https://shorturl.at/hJkbP" className="text-xs text-blue-600 hover:underline break-all transition-all duration-200 hover:text-blue-800">
                  https://shorturl.at/hJkbP
                </a>
                <div className="mt-3 pt-3 border-t">
                  <p className="text-xs text-gray-600 mb-1">Username: khamissa@lyberia.net.lb</p>
                  <p className="text-xs text-gray-600">Password: Darkredski101</p>
                </div>
              </CardContent>
            </Card>

            {/* Online Library Catalogue */}
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-3 border-b">
                <CardTitle className="text-sm font-semibold">Online library catalogue</CardTitle>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                  </svg>
                </div>
                <p className="text-xs text-blue-600">
                  Library Catalogue is a tool that enable users to check BAU Libraries print collection (Books, Journals, Theses, & Multimedia).
                </p>
              </CardContent>
            </Card>

            {/* ASK a Librarian */}
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-3 border-b">
                <CardTitle className="text-sm font-semibold">ASK a Librarian</CardTitle>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
                  </svg>
                </div>
                <a href="mailto:library@bau.edu.lb" className="text-xs text-blue-600 hover:underline transition-all duration-200 hover:text-blue-800">
                  library@bau.edu.lb
                </a>
              </CardContent>
            </Card>

            {/* Guidelines & Forms */}
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-3 border-b">
                <CardTitle className="text-sm font-semibold">Guidelines & Forms</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <a href="#" className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded transition-all duration-200 hover:scale-105">
                    <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-700">Guidelines</span>
                  </a>
                  <a href="#" className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded transition-all duration-200 hover:scale-105">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-700">Forms</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-3 border-b">
                <CardTitle className="text-sm font-semibold">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                  </svg>
                </div>
                <a href="#" className="text-xs text-blue-600 hover:underline transition-all duration-200 hover:text-blue-800">FAQ</a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 mt-12 py-6">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 flex items-center gap-2">
              <p className="text-sm text-gray-400">BAU - MIS 2025 🎓</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
