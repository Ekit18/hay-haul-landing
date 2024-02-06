import { Button } from "@/components/ui/button";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-center text-center xl:text-start xl:h-[90vh] min-h-max">
      <div className="w-full px-4 flex items-center justify-center gap-40 md:px-0 md:w-4/6 mt-10">
        <div className="w-full lg:w-10/12 xl:w-6/12">
          <h1 className="text-2xl md:text-3xl font-medium">
            <span className="text-secondary text-4xl md:text-5xl font-bold">
              Logistics marketplace in Ukraine{" "}
            </span>
            for shipments from 50 kg to 100 tonnes!
          </h1>
          <p className="mt-4 text-md md:text-xl">
            Lower your transport costs and optimise your logistics
          </p>
          <Button className="mt-4 w-[260px] hover:bg-secondary">
            <a href="">Try our product</a>
          </Button>
        </div>
        <div className="hidden w-6/12 min-[1130px]:hidden xl:block">
          <img src="/images/Truck.svg" alt="delivery cart" />
        </div>
      </div>
    </div>
  );
};

export { Header };
