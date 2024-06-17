import * as React from "react";
import Button from "../ui/Button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import { WaitlistContext } from '@src/components/providers/WaitlistProvider';

export interface IHeroProps { }

const Hero: React.FC<IHeroProps> = (props) => {
  const { open } = React.useContext(WaitlistContext);
  return (
    <section className="h-[100vh] overflow-hidden relative text-white">
      <div className="h-screen rounded-b-full -z-10 bg-primary-900 absolute mx-auto w-full scale-x-[1.4] top-0 inset-x-0" />
      <div className="min-h-[110vh] rounded-full -z-10 bg-white/10 absolute m-auto w-full inset-x-0 -left-60 -top-48 blur-[80px]" />
      <div className="md:pt-48 pt-30 space-y-3 z-10 items-center text-center justify-center flex flex-col">
        <span className="bg-gradient-glassy w-fit lg:px-8 md:px-7 px-5 py-1.5 rounded-full lg:text-base md:text-xs text-2xs">
          Connect, Discover, and Achieve More with Mimic
        </span>
        <h1 className="lg:text-5xl md:text-4xl text-3xl lg:w-6/12 md:w-9/12 w-11/12 leading-normal mx-auto font-bold">
          All-in-One Social Networking App For  real-time interactions
        </h1>
        <p className="lg:w-5/12 md:w-8/12 w-11/12 lg:text-base md:text-sm">
          Experience the ultimate social network with seamless connectivity,
          real-time interactions, and all-in-one task management
        </p>
        <div>
          <Button onClick={open} className="shadow-white/25 shadow-md mt-6 pr-2 py-1.5">
            <div className="flex space-x-3 items-center lg:text-base md:text-sm">
              <span>Join the waitlist</span>
              <div className="lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 grid place-content-center rounded-full bg-white text-black">
                <MoveUpRight width={24} height={24} className="md:w-7 w-5 h-auto" />
              </div>
            </div>
          </Button>
        </div>
        <Image
          src='/hero_illustration.png'
          alt='hero illustration'
          width={830}
          height={564}
          className="absolute bottom-1 left-1/2 -translate-x-1/2"
        />
      </div>
    </section>
  );
};
export default Hero;
