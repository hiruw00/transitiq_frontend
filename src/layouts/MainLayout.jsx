export default function MainLayout({ children }) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900">
        {/* You can add Navbar here */}
        {children}
        {/* You can add Footer here */}
      </div>
    );
  }
  