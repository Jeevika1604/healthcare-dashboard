import {
  ArrowUpDown,
  CalendarDays,
  ChartLine,
  LayoutDashboard,
  MessageCircleMore,
  Phone,
  Settings,
  SquarePlus,
} from "lucide-react";
import React from "react";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-[#f5f8ff] p-6 z-50 transition-transform duration-300 shadow-md ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:static md:translate-x-0 md:shadow-none`}
    >
      <h1 className="logo mb-8 text-2xl font-bold">
        Health<span className="text-primary">care.</span>
      </h1>
      <div className="flex flex-col gap-10 justify-between h-full">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="list-title text-sm font-semibold text-gray-500">
              General
            </p>
            <ul className="flex flex-col gap-5">
              <li className="active-menu flex items-center gap-2">
                <LayoutDashboard /> Dashboard
              </li>
              <li className="menu-item flex items-center gap-2">
                <ArrowUpDown /> History
              </li>
              <li className="menu-item flex items-center gap-2">
                <CalendarDays /> Calendar
              </li>
              <li className="menu-item flex items-center gap-2">
                <SquarePlus /> Appointment
              </li>
              <li className="menu-item flex items-center gap-2">
                <ChartLine /> Statistics
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className="list-title text-sm font-semibold text-gray-500">
              Tools
            </p>
            <ul className="flex flex-col gap-5">
              <li className="menu-item flex items-center gap-2">
                <MessageCircleMore /> Chat
              </li>
              <li className="menu-item flex items-center gap-2">
                <Phone /> Support
              </li>
            </ul>
          </div>
          <div className="mb-auto">
            <ul>
              <li className="menu-item flex items-center gap-2">
                <Settings /> Settings
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Close button (mobile only) */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:hidden text-gray-600"
      >
        ✕
      </button>
    </div>
  );
};

export default Sidebar;
