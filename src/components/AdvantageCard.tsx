import { ValueOf } from "@/lib/utils";

export const AdvantageCard: React.FC<{ type: AdvantageType }> = ({ type }) => {
  return (
    <div className="rounded flex flex-col w-full lg:w-1/3 h-96 shadow-lg justify-center px-4 items-center text-center">
      <img src={ImagePath[type]} alt={type} className="w-20 h-20" />
      <h3 className="text-xl font-bold my-4">{AdvantageHeader[type]}</h3>
      <p>{AdvantageText[type]}</p>
    </div>
  );
};

export const AdvantageType = {
  CUSTOMERS: "customers",
  TIME: "time",
  CARGO: "cargo",
} as const;
type AdvantageType = ValueOf<typeof AdvantageType>;
const ImagePath = {
  [AdvantageType.CUSTOMERS]: "/images/customers.svg",
  [AdvantageType.TIME]: "/images/time.svg",
  [AdvantageType.CARGO]: "/images/cargo.svg",
} as const;
const AdvantageHeader = {
  [AdvantageType.CUSTOMERS]: "> 300 regular customers",
  [AdvantageType.TIME]: "Fast delivery to any location",
  [AdvantageType.CARGO]: "We handle every type cargo!",
} as const;
const AdvantageText = {
  [AdvantageType.CUSTOMERS]:
    "Our software ensures efficient supply chain management, cost reduction, and increased productivity.",
  [AdvantageType.TIME]:
    "Our logistics software guarantees fast delivery to any location, ensuring efficiency in every step of the process.",
  [AdvantageType.CARGO]:
    " Our cutting-edge logistics software is designed to manage diverse cargo with precision.",
} as const;
