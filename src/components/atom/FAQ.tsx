import * as React from "react";
import {
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
  Accordion,
} from "../ui/Accordion";
import Button from "../ui/Button";
import { useRouter } from "next/router";

export interface IFAQProps {}

const FAQS = [
  {
    question: "How do I create a profile on Mimic?",
    answer:
      "To create a profile, download the Mimic app from the App Store or Google Play, open the app, and sign up with your email or social media account. Follow the prompts to personalize your profile with your interests, hobbies, and preferences",
  },
  {
    question: "How do I create a profile on Mimic?",
    answer: "",
  },
  {
    question: "How do I connect with new friends on Mimic?",
  },
  {
    question: "How do I go live or host a public video call?",
  },
  {
    question: "Is my data secure on Mimic?",
  },
  {
    question: "How can I track my profile's performance?",
    answer: "By click",
  },
  {
    question: "How can I manage my tasks and to-do lists?",
  },
  {
    question: "How can I book a call session ?",
  },
  {
    question: "What are Giftmojis and how do I use them?",
  },
  {
    question: "How do I report inappropriate behavior or block a user?",
  },
];
const FAQ: React.FC<IFAQProps> = (props) => {
  const id = React.useId();
  const { push } = useRouter();
  return (
    <section className="flex flex-col md:items-center md:space-y-10 space-y-6 pt-8 pb-12">
      <h1 className="lg:text-5xl md:text-4xl text-2xl w-11/12 mx-auto md:w-auto md:mx-0 font-bold text-primary-900">
        Frequently Asked Questions
      </h1>
      <Accordion
        type="single"
        collapsible
        className="lg:w-7/12 md:w-10/12 w-11/12 mx-auto flex flex-col gap-5"
      >
        {FAQS.map((faq, index) => (
          <AccordionItem
            value={`item-${index}-${id}`}
            key={`item-${index}-${id}`}
            className="bg-grey-200 px-6 border rounded-xl border-primary-900/10 h-fit text-secondary-900"
          >
            <AccordionTrigger className="text-base font-medium text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-grey-700 text-left text-sm">
              {faq.answer || "This section is under construction."}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="bg-primary-900/10 flex md:flex-row flex-col md:w-10/12 w-11/12 mx-auto md:mx-0 justify-between md:items-center md:py-5 lg:px-20 md:px-9 px-6 py-4 rounded-xl md:space-y-0 space-y-6">
        <div className="flex flex-col space-y-1.5 lg:basis-auto md:basis-8/12">
          <h2 className="lg:text-xl text-base font-bold text-primary-900 ">
            Still have questions?
          </h2>
          <p className="lg:text-base text-sm text-secondary-900">
            Cant find the answers you are looking for or you&apos;ve got more
            questions? reach out to us today
          </p>
        </div>
        <Button className="text-base md:text-sm w-fit px-12 md:px-8" onClick={() => push("/contact")}>Contact Us</Button>
      </div>
    </section>
  );
};
export default FAQ;
