import React from "react";

const UpcomingSchedule = () => {
  return (
    <div className="flex flex-col gap-4">
      <h4>The Upcoming Schedule</h4>
      <div className="flex flex-col gap-3 ">
        <p className="days">On Thursday</p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="appointment-card w-full md:w-max bg-white p-4 rounded-3xl flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between gap-6">
              <p className="text-base font-semibold">Health checkup Complete</p>
              <img
                src="/images/arm-img.png"
                alt="arm"
                title="arm"
                className="w-[10%]"
              />
            </div>
            <p className="text-xs font-normal">11:00 AM</p>
          </div>
          <div className="appointment-card w-full md:w-max bg-white p-4 rounded-3xl flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between gap-6">
              <p className="text-base font-semibold">Ophthalmologist</p>
              <img
                src="/images/eye-img.png"
                alt="eye"
                title="Eye"
                className="w-[15%]"
              />
            </div>
            <p className="text-xs font-normal">14:00 PM</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 ">
        <p className="days">On Saturday</p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="appointment-card w-full md:w-max bg-white p-4 rounded-3xl flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between gap-6">
              <p className="text-base font-semibold">Cardiologist</p>
              <img
                src="/images/heart-img.png"
                alt="heart"
                title="Heart"
                className="w-[10%]"
              />
            </div>
            <p className="text-xs font-normal">12:00 AM</p>
          </div>
          <div className="appointment-card w-full md:w-max bg-white p-4 rounded-3xl flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between gap-6">
              <p className="text-base font-semibold">Nuriologist</p>
              <img
                src="/images/doctor-icon.png"
                alt="doctor"
                title="Doctor"
                className="w-[12%]"
              />
            </div>
            <p className="text-xs font-normal">16:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
