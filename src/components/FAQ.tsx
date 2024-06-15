import * as React from "react";
import { AccordionContent, AccordionTrigger, AccordionItem, Accordion } from "./ui/Accordion";

export interface IFAQProps { }

const FAQ: React.FC<IFAQProps> = (props) => {
  const id = React.useId();
  const faqs = React.useMemo(
    () => [
      {
        question: "What’s BossyPay App?",
        answer:
          "BossyPay is a free, secure and easy way to pay other people in your neighbourhood.",
      },
      {
        question: "How BossyPay works?",
        answer: "",
      },
      {
        question: "How to activate BossyPay account?",
      },
      {
        question: "How to connect my credit card?",
      },
      {
        question: "What should I do when I forgot my pin?",
      },
      {
        question: "How to change password?",
        answer: "By click",
      },
      {
        question: "Is BossyPay available for everyone?",
        answer: "No, BossyPay is only available for people in Nigeria.",
      },
      {
        question: "Can I send my money to others by ID?",
      },
    ],
    []
  );
  return (
    <section className="flex flex-col items-center space-y-6">
      <h1 className="text-5xl font-bold text-primary-900">
        Frequently Asked Questions
      </h1>
      <Accordion
        type="single"
        collapsible
        className="w-7/12 grid grid-cols-1 lg:gap-12 md:gap-6 gap-4"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            value={`item-${index}-${id}`}
            key={`item-${index}-${id}`}
            className="bg-grey-200 px-6 py-4 border-0 rounded-2xl h-fit"
          >
            <AccordionTrigger className="text-xl font-medium text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-grey-700 text-left text-lg">
              {faq.answer || "This section is under construction."}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
export default FAQ;
