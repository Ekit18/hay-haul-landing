import { ValueOf } from "@/lib/utils";

export const ServiceCard: React.FC<{ type: AdvantageType }> = ({ type }) => {
  return (
    <div className="rounded flex flex-col w-full lg:w-1/3 mh-96 shadow-lg">
      <div className="flex flex-col justify-center px-4 items-center text-left mb-12">
        <img src={ImagePath[type]} alt={type} className="w-40 h-50" />
        <h3 className="self-start text-xl font-bold my-4">
          {AdvantageHeader[type]}
        </h3>
        <p>{AdvantageText[type]}</p>
      </div>
      <button className="rounded-b mt-auto bg-primary text-white px-4 py-2">
        <a href="">Try this role</a>
      </button>
    </div>
  );
};

export const ServiceType = {
  BUSINESSMAN: "businessman",
  CARRIER: "carrier",
  FARMER: "farmer",
} as const;
type AdvantageType = ValueOf<typeof ServiceType>;
const ImagePath = {
  [ServiceType.BUSINESSMAN]: "/images/businessman.svg",
  [ServiceType.CARRIER]: "/images/carrier.svg",
  [ServiceType.FARMER]: "/images/farmer.svg",
} as const;
const AdvantageHeader = {
  [ServiceType.BUSINESSMAN]: "Businessman",
  [ServiceType.CARRIER]: "Carrier",
  [ServiceType.FARMER]: "Farmer",
} as const;
const AdvantageText = {
  [ServiceType.BUSINESSMAN]:
    "As a businessman, you have the ability to browse through the products listed by farmers, place bids on desired goods, and establish contracts with farmers.",
  [ServiceType.CARRIER]:
    "As a carrier, you have the capability to view transportation orders from both farmers and businessmen. Take charge of your operations by efficiently managing your drivers and fleet within the system.",
  [ServiceType.FARMER]:
    "As a farmer, you have the ability to showcase and offer your products for procurement by both carriers and businessmen. Seamlessly negotiate and finalize contracts with businessmen, ensuring a secure and efficient partnership.",
} as const;
