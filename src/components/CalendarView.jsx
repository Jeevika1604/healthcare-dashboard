import { MoveLeft, MoveRight } from "lucide-react";
import React from "react";

const CalendarView = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h5>October 2021</h5>
        <div className="flex gap-2 items-center">
          <MoveLeft color="#2f3299" />
          <MoveRight color="#2f3299" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 jusstify-between items-center">
        <div className="flex flex-col items-center justify-center gap-1.5">
          <p className="text-xs font-bold text-[#2f3299] p-1">Mon</p>
          <p className="text-xl font-bold text-[#2f3299] p-1">25</p>
          <p className="text-xs font-medium text-[#2f3299] p-1">10:00 </p>
          <p className="text-xs font-medium text-[#2f3299] p-1">11:00 </p>
          <p className="text-xs font-medium text-[#2f3299] p-1">12:00 </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1.5 bg-[#e9f1fb] rounded-xl py-2">
          <p className="text-xs font-bold text-[#2f3299] p-1">Tue</p>
          <p className="text-xl font-bold text-[#2f3299] p-1">26</p>
          <p className="text-xs font-medium text-[#2f3299] p-1">08:00 </p>
          <p className="text-xs font-medium bg-[#2f3299] text-white rounded-md p-1 px-2">
            09:00{" "}
          </p>
          <p className="text-xs font-medium text-[#2f3299] p-1">10:00 </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1.5">
          <p className="text-xs font-bold text-[#2f3299] p-1">Wed</p>
          <p className="text-xl font-bold text-[#2f3299] p-1">27</p>
          <p className="text-xs font-medium text-[#2f3299] p-1">12:00 </p>
          <p className="text-xs font-medium text-[#2f3299] p-1">-- </p>
          <p className="text-xs font-medium text-[#2f3299] p-1">13:00 </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1.5">
          <p className="text-xs font-bold text-[#2f3299] p-1">Thurs</p>
          <p className="text-xl font-bold text-[#2f3299] p-1">28</p>
          <p className="text-xs font-medium text-[#2f3299] p-1">10:00 </p>
          <p className="text-xs font-medium text-white bg-[#a3a8d0] p-1 px-2 rounded-md">
            11:00{" "}
          </p>
          <p className="text-xs font-medium text-[#2f3299] p-1">--</p>
        </div>{" "}
        <div className="flex flex-col items-center justify-center gap-1.5 w-full">
          <p className="text-xs font-bold text-[#2f3299] p-1">Sat</p>
          <p className="text-xl font-bold text-[#2f3299] p-1">30</p>
          <p className="text-xs font-medium text-[#2f3299] p-1">12:00</p>
          <p className="text-xs font-medium text-[#2f3299] p-1">14:00 </p>
          <p className="text-xs font-medium text-[#2f3299] p-1">15:00</p>
        </div>
        <div className="flex items-center justify-center col-span-2">
          <div className="flex flex-col items-center justify-center gap-1.5">
            <p className="text-xs font-bold text-[#2f3299] p-1">Sun</p>
            <p className="text-xl font-bold text-[#2f3299]  p-1">31</p>
            <p className="text-xs font-medium text-white bg-[#a3a8d0]  p-1 px-2 pe-5 rounded-s-md">
              09:00{" "}
            </p>
            <p className="text-xs font-medium text-[#2f3299] p-1">10:00 </p>
            <p className="text-xs font-medium text-[#2f3299] p-1">11:00 </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1.5">
            <p className="text-xs font-bold text-[#2f3299] p-1">Mon</p>
            <p className="text-xl font-bold text-[#2f3299] p-1">25</p>
            <p className="text-xs font-medium text-white bg-[#a3a8d0] p-1 px-2 ps-5 rounded-e-md">
              10:00{" "}
            </p>
            <p className="text-xs font-medium text-[#2f3299] p-1">11:00 </p>
            <p className="text-xs font-medium text-[#2f3299] p-1">12:00 </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="dentist-card w-full md:w-[70%] bg-white p-4 rounded-3xl flex flex-col gap-2 w-full">
          <div className="flex items-center justify-between">
            <p className="text-white text-base font-semibold">Dentist</p>
            <img
              src="/images/teeth-img.png"
              alt="teeth"
              title="Teeth"
              className="w-[15%]"
            />
          </div>
          <div className="">
            <p className="timings">09:00 - 11:00</p>
            <p className="doctor-name">Dr. Cameron Williamsons</p>
          </div>
        </div>
        <div className="appointment-card  bg-white p-4 rounded-3xl flex flex-col gap-2 w-full">
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold">Physiotherapy Appointment</p>
            <img
              src="/images/arm-img.png"
              alt="arm"
              title="arm"
              className="w-[10%]"
            />
          </div>
          <div className="">
            <p className="text-xs font-normal">09:00 - 11:00</p>
            <p className="text-xs font-normal">Dr. Cameron Williamsons</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
