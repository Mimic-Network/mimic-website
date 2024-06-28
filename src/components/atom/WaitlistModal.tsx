import * as React from "react";
import { WaitlistContext } from "@src/components/providers/WaitlistProvider";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@src/components/ui/Sheet";
import Image from "next/image";
import { Label } from "@src/components/ui/Label";
import { Input } from "@src/components/ui/Input";
import Button from "@src/components/ui/Button";
import { X } from "lucide-react";
import { addDetailsToWaitList } from "@src/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@src/components/ui/Tooltip";
import { Description } from 'jackspeak';

export interface IWaitlistModalProps {}


const DESCRIPTIONS = {
  "Spot": "Find local businesses and events, get info, navigate maps, and stay updated with trending spots.",
  "Meet new friends": "Connect with like-minded people, chat or video call, and build relationships.",
  "Book sessions": "Book appointments, schedule meetings, set reminders, and stay organized.",
  "Live PCGs": "Host and join public video calls on topics, share screens, and engage in real-time interactions.",
  "Giftmoji": "Send and receive virtual gifts, track profile performance, and manage monetization and payouts.",
  "TODOs": "Create and manage to-do lists, set reminders, and stay on top of tasks."
}
const FEATURES: Array<keyof typeof DESCRIPTIONS> = [
  "Spot",
  "Meet new friends",
  "Book sessions",
  "Live PCGs",
  "Giftmoji",
  "TODOs",
];
const WaitlistModal: React.FC<IWaitlistModalProps> = (props) => {
  const { isOpen, close } = React.useContext(WaitlistContext);
  const [selectedFeatures, setSelectedFeatures] = React.useState<Array<keyof typeof DESCRIPTIONS>>([]);
  const features = FEATURES.filter((val) => !selectedFeatures.includes(val));
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const details = await addDetailsToWaitList({
      email,
      features: selectedFeatures,
      name,
      phone_number: phone,
    });
    setLoading(false);
    close();
  };
  return (
    <Sheet open={isOpen} onOpenChange={close}>
      <SheetContent side="center">
        <div className="flex flex-col lg:w-6/12 md:w-9/12 w-11/12 mx-auto py-11 overflow-x-visible">
          <div className="flex items-center space-x-2 px-5 py-2 shadow-lg shadow-primary-900/10 w-fit mx-auto rounded-xl">
            <Image
              src="/waitlist/users.png"
              alt="Joined users"
              width={164}
              height={56}
              className="lg:h-12 md:h-10 h-8 w-auto"
            />
            <div className="flex flex-col -space-y-1">
              <span className="text-primary-900 text-xs">+200 others</span>
              <span className="text-secondary-900 text-sm">have joined</span>
            </div>
          </div>
          <h2 className="lg:w-9/12 md:w-7/12 w-11/12 mt-2.5 text-center md:text-2xl text-xl font-medium mx-auto leading-9">
            Join The Waitlist For{" "}
            <span className="text-primary-900">Exclusive Access</span>
          </h2>
          <p className="text-center text-[10px] text-secondary-500">
            By joining our waitlist, you&apos;ll be among the first to explore
            Mimic&apos;s features, connect with new friends, discover events,
            and manage tasks like never before
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-9">
            <div className="flex flex-col space-y-2">
              <Label className="text-black/50">Name</Label>
              <Input
                placeholder="Enter name"
                className="border border-secondary-100"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label className="text-black/50">Email</Label>
              <Input
                placeholder="Enter Mail"
                className="border border-secondary-100"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label className="text-black/50">Phone number</Label>
              <Input
                placeholder="Enter Number"
                className="border border-secondary-100"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label className="text-black/50">Select features</Label>
              <div className="border border-secondary-100 min-h-[80px] rounded-md flex flex-wrap gap-3 p-3">
                {selectedFeatures.map((val) => (
                  <TooltipProvider
                    key={val.replace("", "-").toLowerCase()}
                  >
                    <Tooltip>
                      <TooltipTrigger>
                        <div
                          className={
                            "bg-primary-900/5 border-[0.4px] w-max p-2.5 h-fit rounded-full px-3 space-x-3 py-2.5 text-primary-900 border-primary-900 flex"
                          }
                        >
                          <span>{val}</span>
                          <X
                            className="cursor-pointer"
                            onClick={() => {
                              if (selectedFeatures.includes(val)) {
                                setSelectedFeatures((prev) =>
                                  prev.filter((v) => v !== val),
                                );
                              }
                            }}
                          />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{DESCRIPTIONS[val]}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
            <div className={"flex flex-wrap gap-3"}>
              {features.map((val) => (
                <TooltipProvider
                  key={val.replace("", "-").toLowerCase()}

                >
                  <Tooltip>
                    <TooltipTrigger>
                      <div
                        className={
                          "bg-primary-900/5 cursor-pointer border-[0.4px] w-max p-2.5 h-fit rounded-full px-6 py-2.5 text-primary-900 border-primary-900"
                        }
                        onClick={() => {
                          setSelectedFeatures((prev) => [...prev, val]);
                        }}
                      >
                        {val}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{DESCRIPTIONS[val]}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
            <Button
              disabled={loading}
              type="submit"
              className="text-center py-2.5 leading-6 mt-4 disabled:opacity-50"
            >
              {loading ? "Saving..." : "Join waitlist"}
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default WaitlistModal;
