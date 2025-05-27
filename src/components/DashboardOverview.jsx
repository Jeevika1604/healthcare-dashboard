import { ChevronDown, ScanLine, ZoomIn } from "lucide-react";
import React from "react";

const DashboardOverview = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2>Dashboard</h2>
        <p className="flex items-center gap-1 dropdown">
          This Week <ChevronDown size={18} />
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full h-full">
        <div className="col-span-2">
          <div className="card h-full ">
            <div className="flex itens-end justify-end ">
              <ZoomIn color="#a3a7ad" />
            </div>
            <div  className=" relative ">
              <img
                src="/images/human-body.png"
                alt="Human body"
                title="Human Body"
                className="human-body-img mx-auto"
               
              />
              <div className="absolute top-1/6 right-[8%] rounded-md flex gap-2 justify-center items-center heart-btn">
                <img
                  src="/images/heart-img.png"
                  alt="heart"
                  title="Heart"
                  className="w-[15%]"
                />
                Healthy Heart
              </div>
              <div className="absolute bottom-[26%] left-0 flex items-center justify-center">
                <p className="rounded-md flex gap-2 justify-center items-center leg-btn">
                <img
                  src="/images/leg-img.png"
                  alt="heart"
                  title="Heart"
                  className="w-[15%]"
                />
                Healthy leg
                </p>
                <ScanLine color="#2f3299" size={44}/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <div className="card flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img
                src="/images/lungs-img.png"
                alt="lungs"
                title="Lungs"
                className="card-img"
              />
              <h6 className="card-title">Lungs</h6>
            </div>
            <p className="card-date">Date: 26 Oct 2021</p>
            <div className="lungs-progress-bar">
              <div></div>
            </div>
          </div>
          <div className="card flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img
                src="/images/teeth-img.png"
                alt="teeth"
                title="Teeth"
                className="card-img"
              />
              <h6 className="card-title">Teeth</h6>
            </div>
            <p className="card-date">Date: 26 Oct 2021</p>
            <div className="teeth-progress-bar">
              <div></div>
            </div>
          </div>
          <div className="card flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img
                src="/images/bone-img.png"
                alt="bone"
                title="Bone"
                className="card-img"
              />
              <h6 className="card-title">Bone</h6>
            </div>
            <p className="card-date">Date: 26 Oct 2021</p>
            <div className="bone-progress-bar">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
