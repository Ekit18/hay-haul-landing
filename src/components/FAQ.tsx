import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const accordionItems = [
  {
    question:
      "What criteria and parameters can be used to select a carrier for my goods?",
    answer:
      "The criteria and parameters used to select a carrier for your goods are based on the type of goods, the distance to be covered, and the delivery time. We also consider the carrier's reputation and the cost of the service.",
  },
  {
    question:
      "What info can a businessman see about my goods and how can they reach me for a contract?",
    answer:
      "The businessman can view the type of goods, the quantity, the delivery time, and the delivery location.",
  },
  {
    question:
      "What is the process for managing my drivers and vehicles through this carrier software?",
    answer:
      "The process for managing your drivers and vehicles through this carrier software is simple. You can add, edit, and delete drivers and vehicles. You can also assign drivers to vehicles and track their movements in real-time. You can also view the performance of your drivers and vehicles and generate reports to help you make informed decisions.",
  },
  {
    question:
      "How can I display my goods for transport and attract the attention of businessmen?",
    answer:
      "You can display your goods for transport by creating an account on our platform and providing detailed information about your goods. You can also upload images of your goods to attract the attention of businessmen. You can also use our marketing tools to promote your goods and attract the attention of businessmen.",
  },
  {
    question:
      "What are the possibilities to negotiate and conclude contracts with businessmen in this software?",
    answer:
      "The possibilities to negotiate and conclude contracts with businessmen in this software are endless. You can negotiate the terms of the contract with the businessman and reach an agreement that is beneficial to both parties. You can also use our contract management tools to create, edit, and manage contracts with businessmen. You can also use our e-signature feature to sign contracts electronically and securely. You can also use our payment gateway to receive payments from businessmen.",
  },
];

const FAQ: React.FC = () => {
  return (
    <div
      id="faq"
      className="flex items-center justify-center text-center xl:text-start"
    >
      <div className="w-full px-4 flex-col items-center justify-center gap-40 md:px-0 md:w-4/6 mt-10">
        <h3 className="text-xl md:text-2xl font-bold">
          Frequently asked questions
        </h3>
        <span className="md:text-xl text-md mt-4 block">
          Here you'll find common questions about our service along with their
          answers.
        </span>
        <Accordion type="single" collapsible className="w-full mt-4">
          {accordionItems.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export { FAQ };
