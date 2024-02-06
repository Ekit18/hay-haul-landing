import React from "react";
import { AdvantageCard, AdvantageType } from "./AdvantageCard";

const Advantages: React.FC = () => {
  return (
    <div
      id="advantages"
      className="flex items-center justify-center text-center xl:text-start"
    >
      <div className="w-full px-4 flex-col items-center justify-center gap-40 md:px-0 md:w-3/4 mt-10">
        <div>
          <h3 className="text-xl md:text-2xl font-bold">
            What's our advantage?
          </h3>
          <span className="md:text-xl text-md mt-4 block">
            Hay Haul is amazing Ukrainian software for logistics! We offer an
            incredibly wide range of logistics services to efficiently and
            reliably manage supply, providing optimal solutions that perfectly
            meet our customers' needs!
          </span>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="flex gap-4 mx-auto flex-wrap lg:flex-nowrap justify-center">
            {Object.values(AdvantageType).map((advantageType) => (
              <AdvantageCard type={advantageType} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Advantages };
