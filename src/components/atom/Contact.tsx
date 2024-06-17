import * as React from "react";
import { Poppins } from "next/font/google";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Label } from "@src/components/ui/Label";
import { Input } from "@src/components/ui/Input";
import { Textarea } from "@src/components/ui/TextArea";
import Button from "@src/components/ui/Button";

export interface IContactProps {}

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin", "latin-ext"],
});
const CHANNELS = [
  {
    icon: Mail,
    title: "Email us",
    value: "infor@mimic.com",
    href: "mailto:infor@mimic.com",
  },
  {
    icon: Phone,
    title: "Phone number",
    value: "+234 92764781",
    href: "tel:+23492764781",
  },
  {
    icon: MapPin,
    value: "901 N Pitt Str., Suite 170 Alexandria, VA 22314, USA",
  },
];
const SOCIALS = [
  {
    icon: "facebook-light.svg",
    href: "https://facebook.com",
  },
  {
    icon: "twitter.svg",
    light: true,
    href: "https://twitter.com",
  },
  {
    icon: "instagram-light.svg",
    href: "https://instagram.com",
  },
];
const Contact: React.FC<IContactProps> = (props) => {
  return (
    <section>
      <div className="data-true:bg-transparent pt-12">
        <div className="md:w-10/12 w-11/12 flex flex-col items-start mx-auto space-y-12">
          <div className="space-y-2 flex flex-col items-start">
            <span className="bg-black/10 py-1.5 px-5 text-xs rounded-full w-fit">
              Contact us
            </span>
            <h2 className="lg:text-5xl md:text-4xl text-2xl leading-snug lg:w-7/12 font-bold text-secondary-800">
              Get in Touch with Mimic
            </h2>
            <p className={`lg:w-7/12 lg:text-base text-sm leading-loose ${poppins.className}`}>
              We&apos;d love to hear from you! Whether you have questions,
              feedback, or need assistance, our team is here to help. Reach out
              to us through any of the following methods
            </p>
          </div>
          <div
            className={`flex lg:flex-col flex-col w-full mt-12 lg:border-[0.5px] border-primary-900 rounded-3xl ${poppins.className} overflow-clip items-center`}
          >
            <div className="flex rounded-3xl flex-col bg-primary-900 lg:basis-5/12 w-full py-18 text-white md:pl-18 pl-10 space-y-28">
              <div className="flex flex-col space-y-10">
                <h3 className="flex flex-col space-y-4 text-4xl font-semibold tracking-tight">
                  Get in touch
                </h3>
                <div className="flex flex-col space-y-6">
                  {CHANNELS.map((channel, index) => (
                    <div key={index} className="flex items-center space-x-5">
                      <div className="w-16 h-16 grid place-content-center bg-white/[0.08] rounded-full">
                        <channel.icon className="w-8 h-8" />
                      </div>
                      <div>
                        {channel.title && (
                          <h4 className="text-sm opacity-50 font-normal uppercase tracking-wide">
                            {channel.title}
                          </h4>
                        )}
                        {channel.href ? (
                          <Link
                            href={channel.href}
                            className="text-xl font-semibold"
                          >
                            {channel.value}
                          </Link>
                        ) : (
                          <p className="max-w-64 font-semibold">
                            {channel.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-0.5 w-8 bg-white" />
                  <p>Connect with us:</p>
                </div>
                <div className="flex space-x-2">
                  {SOCIALS.map((social, index) => (
                    <Link href={social.href} key={index} target="_blank">
                      <div
                        data-true={social.light}
                        className={`w-12 h-12 grid place-content-center rounded-md data-true:bg-white bg-white/[0.08]`}
                      >
                        <Image
                          src={`/socials/${social.icon}`}
                          width={24}
                          height={24}
                          alt={social.icon}
                          className="w-6 h-auto"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <form className="lg:px-15 py-15 lg:py-0 lg:basis-7/12 w-full flex flex-col space-y-6">
              <div className={"flex gap-4 w-full"}>
                <div className="basis-6/12 flex flex-col space-y-4">
                  <Label>Name</Label>
                  <Input placeholder="Full name" />
                </div>
                <div className="basis-6/12 flex flex-col space-y-4">
                  <Label>Email</Label>
                  <Input placeholder="Email addresss" />
                </div>
              </div>
              <div className="w-full flex flex-col space-y-4">
                <Label>Subject</Label>
                <Input placeholder="Subject" />
              </div>
              <div className="w-full flex flex-col space-y-4">
                <Label>Message</Label>
                <Textarea cols={30} rows={10} placeholder="Type your message" />
              </div>
              <Button className="bg-primary-900 w-fit rounded-md">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
