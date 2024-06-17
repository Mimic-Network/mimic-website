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
    <section className="flex flex-col items-center space-y-10 py-8">
      <h1 className="text-5xl font-bold text-primary-900">
        Frequently Asked Questions
      </h1>
      <Accordion
        type="single"
        collapsible
        className="w-7/12 flex flex-col gap-5"
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
      <div className="bg-primary-900/10 flex w-10/12 justify-between items-center py-5 px-20 rounded-xl">
        <div className="flex flex-col space-y-1.5">
          <h2 className="text-xl font-bold text-primary-900 ">
            Still have questions?
          </h2>
          <p className="text-base text-secondary-900">
            Cant find the answers you are looking for or you&apos;ve got more
            questions? reach out to us today
          </p>
        </div>
        <Button onClick={() => push("/contact")}>Contact Us</Button>
      </div>
    </section>
  );
};
export default FAQ;
