export default function DigitalIDPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Digital ID Card */}
      <div className="w-full max-w-md bg-[#004494] rounded-lg shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 hover:scale-105">
        {/* Header with BAU Logo and decorative elements */}
        <div className="relative h-32 flex items-center justify-center">
          {/* Decorative circles */}
          <div className="absolute right-8 top-4">
            <div className="w-16 h-16 border-2 border-white/30 rounded-full"></div>
          </div>
          <div className="absolute right-4 top-8">
            <div className="w-20 h-20 border-2 border-white/20 rounded-full"></div>
          </div>

          {/* BAU Logo - Top Left */}
          <div className="absolute top-4 left-4 z-10">
            <img
              src="https://images.unsplash.com/photo-1764793778223-25365eb4c1c3?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="BAU Logo"
              className="h-12 w-auto"
            />
          </div>
        </div>

        {/* Student Photo */}
        <div className="flex justify-center -mt-6 relative z-20">
          <div className="w-32 h-32 rounded-full border-4 border-white bg-white overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1764794654729-8e423a95d7aa?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Student Photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Student Information */}
        <div className="text-center text-white px-6 pb-6">
          <h2 className="text-xl font-bold mt-4 mb-1">Ahmad Jebara</h2>
          <p className="text-lg font-semibold mb-3">202600629</p>
          <p className="text-sm mb-6 opacity-90">eaj062@student.bau.edu.lb</p>

          {/* QR Code */}
          <div className="bg-white p-4 rounded-lg inline-block">
            <svg className="w-40 h-40" viewBox="0 0 200 200">
              {/* QR Code pattern - simplified representation */}
              <rect x="0" y="0" width="200" height="200" fill="white"/>

              {/* Top-left position marker */}
              <rect x="10" y="10" width="60" height="60" fill="black"/>
              <rect x="20" y="20" width="40" height="40" fill="white"/>
              <rect x="30" y="30" width="20" height="20" fill="black"/>

              {/* Top-right position marker */}
              <rect x="130" y="10" width="60" height="60" fill="black"/>
              <rect x="140" y="20" width="40" height="40" fill="white"/>
              <rect x="150" y="30" width="20" height="20" fill="black"/>

              {/* Bottom-left position marker */}
              <rect x="10" y="130" width="60" height="60" fill="black"/>
              <rect x="20" y="140" width="40" height="40" fill="white"/>
              <rect x="30" y="150" width="20" height="20" fill="black"/>

              {/* Random data pattern */}
              <rect x="80" y="10" width="10" height="10" fill="black"/>
              <rect x="100" y="10" width="10" height="10" fill="black"/>
              <rect x="90" y="20" width="10" height="10" fill="black"/>
              <rect x="110" y="20" width="10" height="10" fill="black"/>
              <rect x="80" y="30" width="10" height="10" fill="black"/>
              <rect x="100" y="30" width="10" height="10" fill="black"/>

              <rect x="10" y="80" width="10" height="10" fill="black"/>
              <rect x="30" y="80" width="10" height="10" fill="black"/>
              <rect x="50" y="80" width="10" height="10" fill="black"/>
              <rect x="20" y="90" width="10" height="10" fill="black"/>
              <rect x="40" y="90" width="10" height="10" fill="black"/>
              <rect x="60" y="90" width="10" height="10" fill="black"/>

              <rect x="80" y="80" width="10" height="10" fill="black"/>
              <rect x="100" y="80" width="10" height="10" fill="black"/>
              <rect x="120" y="80" width="10" height="10" fill="black"/>
              <rect x="90" y="90" width="10" height="10" fill="black"/>
              <rect x="110" y="90" width="10" height="10" fill="black"/>

              <rect x="140" y="80" width="10" height="10" fill="black"/>
              <rect x="160" y="80" width="10" height="10" fill="black"/>
              <rect x="180" y="80" width="10" height="10" fill="black"/>
              <rect x="150" y="90" width="10" height="10" fill="black"/>
              <rect x="170" y="90" width="10" height="10" fill="black"/>

              <rect x="80" y="100" width="10" height="10" fill="black"/>
              <rect x="100" y="100" width="10" height="10" fill="black"/>
              <rect x="120" y="100" width="10" height="10" fill="black"/>
              <rect x="140" y="100" width="10" height="10" fill="black"/>
              <rect x="160" y="100" width="10" height="10" fill="black"/>
              <rect x="180" y="100" width="10" height="10" fill="black"/>

              <rect x="90" y="110" width="10" height="10" fill="black"/>
              <rect x="110" y="110" width="10" height="10" fill="black"/>
              <rect x="130" y="110" width="10" height="10" fill="black"/>
              <rect x="150" y="110" width="10" height="10" fill="black"/>
              <rect x="170" y="110" width="10" height="10" fill="black"/>

              <rect x="80" y="130" width="10" height="10" fill="black"/>
              <rect x="100" y="130" width="10" height="10" fill="black"/>
              <rect x="120" y="130" width="10" height="10" fill="black"/>
              <rect x="140" y="130" width="10" height="10" fill="black"/>
              <rect x="160" y="130" width="10" height="10" fill="black"/>

              <rect x="90" y="140" width="10" height="10" fill="black"/>
              <rect x="110" y="140" width="10" height="10" fill="black"/>
              <rect x="130" y="140" width="10" height="10" fill="black"/>
              <rect x="150" y="140" width="10" height="10" fill="black"/>
              <rect x="170" y="140" width="10" height="10" fill="black"/>
              <rect x="190" y="140" width="10" height="10" fill="black"/>

              <rect x="80" y="150" width="10" height="10" fill="black"/>
              <rect x="100" y="150" width="10" height="10" fill="black"/>
              <rect x="120" y="150" width="10" height="10" fill="black"/>
              <rect x="140" y="150" width="10" height="10" fill="black"/>
              <rect x="160" y="150" width="10" height="10" fill="black"/>
              <rect x="180" y="150" width="10" height="10" fill="black"/>

              <rect x="90" y="160" width="10" height="10" fill="black"/>
              <rect x="110" y="160" width="10" height="10" fill="black"/>
              <rect x="130" y="160" width="10" height="10" fill="black"/>
              <rect x="150" y="160" width="10" height="10" fill="black"/>
              <rect x="170" y="160" width="10" height="10" fill="black"/>

              <rect x="80" y="170" width="10" height="10" fill="black"/>
              <rect x="100" y="170" width="10" height="10" fill="black"/>
              <rect x="120" y="170" width="10" height="10" fill="black"/>
              <rect x="140" y="170" width="10" height="10" fill="black"/>
              <rect x="160" y="170" width="10" height="10" fill="black"/>
              <rect x="180" y="170" width="10" height="10" fill="black"/>

              <rect x="90" y="180" width="10" height="10" fill="black"/>
              <rect x="110" y="180" width="10" height="10" fill="black"/>
              <rect x="130" y="180" width="10" height="10" fill="black"/>
              <rect x="150" y="180" width="10" height="10" fill="black"/>
              <rect x="170" y="180" width="10" height="10" fill="black"/>
            </svg>
          </div>

          {/* Footer */}
          <p className="text-xs mt-6 opacity-75">www.bau.edu.lb</p>
        </div>
      </div>
    </div>
  );
}
