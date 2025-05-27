import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardMainContent from './DashboardMainContent';
import { Menu } from 'lucide-react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Mobile Menu Button */}
      <button
        className="xl:hidden fixed top-4 left-4 z-40 "
        onClick={() => setSidebarOpen(true)}
      >
        <Menu />
      </button>

      {/* Sidebar */}
      <div className="xl:block hidden fixed top-0 left-0 h-full ">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 z-40 h-full transition-transform bg-white shadow-md xl:hidden ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar onClose={() => setSidebarOpen(false)} isOpen={sidebarOpen} />
      </div>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-[#00000099] z-30 xl:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="xl:ml-[20%] p-6">
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default Dashboard;
