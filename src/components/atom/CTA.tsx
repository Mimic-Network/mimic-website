import Image from "next/image";
import * as React from "react";
import Button from "../ui/Button";
import { MoveUpRight } from "lucide-react";
import { AbstractLeft, AbstractMiddle, AbstractRight } from "../icons";
import { WaitlistContext } from '@src/components/providers/WaitlistProvider';

export interface ICTAProps {}

const CTA: React.FC<ICTAProps> = (props) => {
  const { open } = React.useContext(WaitlistContext);
  return (
    <section className="bg-primary-900 pt-4 relative">
      <div className="flex w-10/12 mx-auto text-white items-center z-10">
        <div className="flex-1 flex-col space-y-10 z-10">
          <div className="flex flex-col space-y-3.5">
            <div>
              <h2 className="text-5xl font-semibold w-10/12 leading-snug tracking-wide">
                Secure your Own Spot Now!
              </h2>
            </div>
            <p className="leading-8 font-medium">
              Be among the first to experience the future of social networking
              with Mimic! Sign up for our waitlist today and get early access to
              groundbreaking features that connect you with local businesses,
              new friends, and engaging live experiences.
            </p>
          </div>
          <Button onClick={open} className="shadow-white/25 shadow-md mt-6 pr-2 py-1.5 w-fit">
            <div className="flex space-x-3 items-center w-fit">
              <span>Join the waitlist</span>
              <div className="w-12 h-12 grid place-content-center rounded-full bg-white text-black">
                <MoveUpRight width={24} height={24} className="w-7 h-auto" />
              </div>
            </div>
          </Button>
        </div>
        <div className="flex-1 z-10">
          <Image
            src="/cta_illustration.png"
            alt="home about illustration"
            width={654}
            height={659}
          />
        </div>
      </div>
      <AbstractLeft className="absolute h-full left-0 inset-y-0" />
      <AbstractMiddle className="absolute h-full inset-x-0 m-auto inset-y-0" />
      <AbstractRight className="absolute h-full right-0 inset-y-0 -z-0" />
    </section>
  );
};
export default CTA;
