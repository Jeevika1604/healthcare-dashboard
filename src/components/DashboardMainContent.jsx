import Header from "./Header";
import DashboardOverview from "./DashboardOverview";
import CalendarView from "./CalendarView";
import { Plus } from "lucide-react";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";


const DashboardMainContent = () => {

  return (
    <>
      {/* Menu Button (mobile only) */}
   
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className=" pt-6 flex flex-col gap-6">
        <Header />
        <DashboardOverview />
        <ActivityFeed />
      </div>
      <div className="sidebar flex flex-col gap-6">
        <div className="flex gap-2 justify-end items-end">
          <div className="flex gap-4 justify-end items-center">
            <img
              src="/images/profile-img.png"
              alt="profile-img"
              title="Profile"
              className="profile"
            />
            <Plus size={40} className="add-icon" />
          </div>
        </div>
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
    </>
  );
};

export default DashboardMainContent;
