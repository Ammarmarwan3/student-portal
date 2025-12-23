"use client";

export default function ImportantNoticePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-[1400px] mx-auto">
          <a href="/home" className="flex items-center gap-2 w-fit group">
            <img
              src="https://images.unsplash.com/photo-1764793778223-25365eb4c1c3?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="BAU Logo"
              className="h-10 w-auto transition-all duration-300 group-hover:scale-105 group-hover:rotate-6"
            />
            <span className="text-xl font-semibold text-gray-900 transition-all duration-200 group-hover:scale-105">iConnect</span>
          </a>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Notice Card */}
        <div className="bg-white border-2 border-blue-500 rounded-lg shadow-sm p-8 md:p-12 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <h1 className="text-2xl font-semibold text-gray-900 mb-8">
            University Email Policy for New Students
          </h1>

          <div className="space-y-6 text-gray-800">
            <p className="font-semibold">Dear Student,</p>

            <p className="leading-relaxed">
              Welcome to Beirut Arab University! We are excited to have you join our academic community and wish you success in your studies.
            </p>

            <p className="leading-relaxed">
              We would like to take this opportunity to inform you about the university's policy regarding student email accounts. Understanding this policy will ensure you can make the most of your university email during your time here and be prepared for when your access will change.
            </p>

            <div>
              <h2 className="font-bold text-lg mb-3">University Email Policy:</h2>

              <ul className="space-y-3 ml-6">
                <li className="leading-relaxed">
                  <span className="font-bold">Email Account Provision:</span> As a student of Beirut Arab University, you have been provided with a university email account. This email will be your primary means of communication with professors, university staff, and fellow students.
                </li>
                <li className="leading-relaxed">
                  <span className="font-bold">Duration of Email Access:</span> Your university email account is active for the duration of your studies. However, please note that it will be deactivated after your graduation date.
                </li>
                <li className="leading-relaxed">
                  <span className="font-bold">Post-Graduation Deactivation:</span> After graduation, your email account will be deactivated. We recommend that you save any important emails, contacts, or documents before this date.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-lg mb-3">Recommended Actions:</h2>

              <ol className="space-y-3 ml-6 list-decimal">
                <li className="leading-relaxed">
                  <span className="font-bold">Regularly Backup Important Data:</span> Periodically export important emails, contacts, and documents to a personal email account or secure storage.
                </li>
                <li className="leading-relaxed">
                  <span className="font-bold">Notify Your Contacts:</span> Prior to graduation, inform your contacts about your new email address to ensure continuous communication.
                </li>
                <li className="leading-relaxed">
                  <span className="font-bold">Transfer Files:</span> Ensure that all necessary files and documents are transferred to a secure location before your email account is deactivated.
                </li>
              </ol>
            </div>

            <p className="leading-relaxed">
              If you have any questions or need assistance with your email account, please do not hesitate to contact our IT support team at{" "}
              <a href="mailto:support@bau.edu.lb" className="text-blue-600 hover:underline font-medium transition-all duration-200 hover:text-blue-800">
                support@bau.edu.lb
              </a>
              .
            </p>

            <p className="leading-relaxed">
              We look forward to supporting you throughout your academic journey and wish you every success.
            </p>

            <p className="leading-relaxed font-semibold">Best regards,</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12 py-6">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 flex items-center gap-2">
              <p className="text-sm text-gray-600">BAU - MIS 2025</p>
              <span className="text-gray-400">🎓</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.138 20.1625 22.001 16.4125 22.001 12C22.001 6.475 17.526 2 12.001 2Z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110">
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
