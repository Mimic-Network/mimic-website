import * as React from "react";
import Button from "./ui/Button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";

export interface IHeroProps { }

const Hero: React.FC<IHeroProps> = (props) => {
  return (
    <section className="h-[100vh] overflow-hidden relative text-white">
      <div className="h-screen rounded-b-full -z-10 bg-primary-900 absolute mx-auto w-full scale-x-[1.4] top-0 inset-x-0" />
      <div className="min-h-[110vh] rounded-full -z-10 bg-white/10 absolute m-auto w-full inset-x-0 -left-60 -top-48 blur-[80px]" />
      <div className="pt-48 space-y-3 z-10 items-center text-center justify-center flex flex-col">
        <span className="bg-gradient-glassy w-fit px-8 py-1.5 rounded-full">
          Connect, Discover, and Achieve More with Mimic
        </span>
        <h1 className="text-5xl w-6/12 leading-normal mx-auto font-semibold">
          All-in-One Social Networking App For real-time interactions
        </h1>
        <p className="w-5/12">
          Experience the ultimate social network with seamless connectivity,
          real-time interactions, and all-in-one task management
        </p>
        <div>
          <Button className="shadow-white/25 shadow-md mt-6">
            <div className="flex space-x-3 items-center">
              <span>Join the waitlist</span>
              <div className="w-12 h-12 grid place-content-center rounded-full bg-white text-black">
                <MoveUpRight width={24} height={24} className="w-7 h-auto" />
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
