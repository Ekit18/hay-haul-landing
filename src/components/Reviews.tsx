import React from "react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Reviews: React.FC = () => {
  return (
    <div id="reviews" className="flex justify-center flex-col items-center ">
      <div className="flex justify-center w-4/6 flex-col items-center">
        <h3 className="text-xl md:text-2xl font-bold mt-5 text-start self-start">
          Reviews
        </h3>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-10/12 mt-10"
        >
          <CarouselPrevious className="absolute top-0 hover:bg-primary" />
          <CarouselNext className="absolute top-0 hover:bg-primary" />
          <CarouselContent>
            {TestReviews.map((review, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/2 ">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <ReviewCardContent review={review} />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export { Reviews };

const TestReviews = [
  {
    imagePath: "/images/review1.png",
    name: "Andrew Rolnik",
    position: "Farmer",
    text: "This software has become our trusted ally in managing our agricultural operations. The ability to display our goods for transport and conclude contracts with businessmen has made the process as transparent and efficient as possible. Thanks to this tool, we are confident of reliable support from our business partners and convenient management of the entire marketing process of our products",
  },
  {
    imagePath: "/images/review2.png",
    name: "Helen Delovaya",
    position: "Businesswoman",
    text: "“This software has given me complete control over the logistics of my business. I can easily view farmers' goods, bid and sign contracts, all in one place. Efficient management of deliveries and choosing the right carriers have been key to the success of my business. Very grateful for such a convenient and intuitive tool”",
  },
  {
    imagePath: "/images/review2.png",
    name: "Helen Delovaya",
    position: "Businesswoman",
    text: "“This software has given me complete control over the logistics of my business. I can easily view farmers' goods, bid and sign contracts, all in one place. Efficient management of deliveries and choosing the right carriers have been key to the success of my business. Very grateful for such a convenient and intuitive tool”",
  },
] as const;

const ReviewCardContent: React.FC<{ review: (typeof TestReviews)[number] }> = ({
  review: { imagePath, name, position, text },
}) => (
  <div className="flex flex-col items-center">
    <img
      src={imagePath}
      alt="reviewer"
      className="object-cover w-20 h-20 rounded-full"
    />
    <h3 className="text-lg font-bold">{name}</h3>
    <p className="text-sm text-gray-500">{position}</p>
    <p className="text-sm">{text}</p>
  </div>
);
