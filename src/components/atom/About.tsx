import { Check } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import Button from "../ui/Button";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";

export interface IAboutProps {
  hideLearnMore?: boolean;
}
const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin","latin-ext"],
});
const FEATURES = [
  "Discover local businesses and events with ease.",
  "Connect with new friends through personalized recommendations",
  "Go live and interact with your followers in real-time",
  "Manage your tasks efficiently with our to-do list feature",
];
const About: React.FC<IAboutProps> = (props) => {
  const { push, prefetch } = useRouter();
  React.useEffect(() => {
    prefetch("/about");
  }, [prefetch]);
  return (
    <section className="flex w-10/12 mx-auto text-secondary-900 py-28">
      <div className="flex-1 flex-col space-y-10">
        <div className="flex flex-col space-y-3.5">
          <div>
            <span className="bg-black/10 py-1.5 px-5 text-xs rounded-full">
              About Mimic
            </span>
            <h2 className="text-5xl font-semibold w-10/12 leading-snug text-primary-900">
              The Futuristic Platform for Social Networking
            </h2>
          </div>
          <p className={`leading-8 ${poppins.className}`}>
            Mimic is a cutting-edge social networking platform designed to
            connect users through shared interests, live interactions, and
            dynamic event discovery. Our mission is to provide a seamless and
            engaging experience, empowering users to explore, connect, and grow
            together.
          </p>
        </div>
        <div className={`flex flex-col space-y-5 ${poppins.className}`}>
          {FEATURES.map((feature) => (
            <div key={feature} className="flex">
              <div className="bg-black text-primary-900 rounded-full p-2 mr-3 bg-primary-900/10">
                <Check />
              </div>
              <p className="font-medium my-2">{feature}</p>
            </div>
          ))}
        </div>
        {props.hideLearnMore && (
          <Button onClick={() => push("/about")} className="w-fit">
            Learn more
          </Button>
        )}
      </div>
      <div className="flex-1">
        <Image
          src="/home_about_illustration.png"
          alt="home about illustration"
          width={570}
          height={550}
        />
      </div>
    </section>
  );
};
export default About;
