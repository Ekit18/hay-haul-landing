import React from "react";
import { ServiceCard, ServiceType } from "./ServiceCard";
// import { AdvantageType, AdvantagesCard } from "./AdvantagesCard";

const Services: React.FC = () => {
  return (
    <div
      id="services"
      className="flex items-center justify-center text-center xl:text-start"
    >
      <div className="w-full px-4 flex-col items-center justify-center gap-40 md:px-0 md:w-3/4 ">
        <div>
          <h1 className="mt-10 mb-4 text-xl md:text-2xl font-bold">Services</h1>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="flex gap-4 mx-auto lg:flex-nowrap flex-wrap justify-center">
            {Object.values(ServiceType).map((serviceType) => (
              <ServiceCard type={serviceType} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Services };
